"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Trendy-toned yellow -> green -> blue -> purple -> red cluster palette
const CLUSTER_COLORS = ["#FBBF24", "#22C55E", "#3B82F6", "#8B5CF6", "#FB7185"];

function createCircleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.8, "rgba(255,255,255,1)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

export default function WovenCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const particleCount = 8000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const clusterCount = CLUSTER_COLORS.length;
    const clusterBases = CLUSTER_COLORS.map((hex) => new THREE.Color(hex));
    const clusterHSL = clusterBases.map((c) => c.getHSL({ h: 0, s: 0, l: 0 }));

    const torusKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 32);
    const vertexCount = torusKnot.attributes.position.count;
    for (let i = 0; i < particleCount; i++) {
      const vertexIndex = i % vertexCount;
      const x = torusKnot.attributes.position.getX(vertexIndex);
      const y = torusKnot.attributes.position.getY(vertexIndex);
      const z = torusKnot.attributes.position.getZ(vertexIndex);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      const clusterId = Math.floor((vertexIndex / vertexCount) * clusterCount) % clusterCount;
      const base = clusterHSL[clusterId];
      const color = new THREE.Color().setHSL(
        base.h + (Math.random() - 0.5) * 0.02,
        Math.min(1, base.s),
        Math.min(1, Math.max(0, base.l + (Math.random() - 0.5) * 0.12))
      );
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    torusKnot.dispose();

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const circleTexture = createCircleTexture();
    const material = new THREE.PointsMaterial({
      size: 0.04,
      map: circleTexture,
      alphaTest: 0.02,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
    });

    const points = new THREE.Points(geometry, material);
    points.scale.setScalar(0.9);
    scene.add(points);

    const mouse = new THREE.Vector2(0, 0);
    const handlePointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    const handlePointerLeave = () => {
      mouse.set(0, 0);
    };
    mount.addEventListener("pointermove", handlePointerMove);
    mount.addEventListener("pointerleave", handlePointerLeave);

    const clock = new THREE.Clock();
    const mouseWorld = new THREE.Vector3();
    const currentPos = new THREE.Vector3();
    const originalPos = new THREE.Vector3();
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();
    const returnForce = new THREE.Vector3();

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseWorld.set(mouse.x * 3, mouse.y * 3, 0);

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        currentPos.set(positions[ix], positions[iy], positions[iz]);
        originalPos.set(originalPositions[ix], originalPositions[iy], originalPositions[iz]);
        velocity.set(velocities[ix], velocities[iy], velocities[iz]);

        const dist = currentPos.distanceTo(mouseWorld);
        if (dist < 1.5) {
          const force = (1.5 - dist) * 0.01;
          direction.subVectors(currentPos, mouseWorld).normalize();
          velocity.addScaledVector(direction, force);
        }

        returnForce.subVectors(originalPos, currentPos).multiplyScalar(0.004);
        velocity.add(returnForce).multiplyScalar(0.95);

        currentPos.add(velocity);

        // Clamp how far a particle can stray from its resting position so
        // sustained mouse interaction can't push the shape past the frustum edge
        direction.subVectors(currentPos, originalPos);
        const strayDist = direction.length();
        if (strayDist > 0.9) {
          direction.multiplyScalar(0.9 / strayDist);
          currentPos.copy(originalPos).add(direction);
        }

        positions[ix] = currentPos.x;
        positions[iy] = currentPos.y;
        positions[iz] = currentPos.z;

        velocities[ix] = velocity.x;
        velocities[iy] = velocity.y;
        velocities[iz] = velocity.z;
      }
      geometry.attributes.position.needsUpdate = true;

      points.rotation.y = elapsedTime * 0.08;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mount.removeEventListener("pointermove", handlePointerMove);
      mount.removeEventListener("pointerleave", handlePointerLeave);
      geometry.dispose();
      material.dispose();
      circleTexture.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full max-w-3xl aspect-square" />;
}
