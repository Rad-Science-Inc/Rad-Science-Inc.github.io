"use client";

import { motion } from "framer-motion";
import { FlaskConical, Database, BrainCircuit, Lightbulb, type LucideIcon } from "lucide-react";

type Stage = {
  step: string;
  icon: LucideIcon;
  title: string;
  sub: string;
  color: string;
  glowRgb: string;
  x: number;
  y: number;
};

// Diagonal "zig-zag" cascade, top -> bottom, so the pipeline reads clearly
// as a single downward flow while staying visually dynamic.
const stages: Stage[] = [
  {
    step: "01",
    icon: FlaskConical,
    title: "실험실",
    sub: "임상 · 실험 데이터 수집",
    color: "from-blue-600 to-blue-400",
    glowRgb: "37,99,235",
    x: 110,
    y: 55,
  },
  {
    step: "02",
    icon: Database,
    title: "연구 데이터",
    sub: "CT · MRI · EMR · 유전체",
    color: "from-cyan-600 to-cyan-400",
    glowRgb: "8,145,178",
    x: 340,
    y: 195,
  },
  {
    step: "03",
    icon: BrainCircuit,
    title: "AI 분석",
    sub: "딥러닝 모델 추론",
    color: "from-violet-600 to-violet-400",
    glowRgb: "124,58,237",
    x: 110,
    y: 355,
  },
  {
    step: "04",
    icon: Lightbulb,
    title: "지식 생성",
    sub: "SCI(E) 논문 · 임상 인사이트",
    color: "from-emerald-600 to-emerald-400",
    glowRgb: "5,150,105",
    x: 340,
    y: 495,
  },
];

// Smooth S-curve connecting the four stage centers above, in order.
const pathD =
  "M110,55 C260,55 260,195 340,195 C190,195 190,355 110,355 C260,355 260,495 340,495";

export default function HeroFlow() {
  return (
    <div className="relative w-105 h-140">
      {/* Connecting flow path */}
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 450 560" fill="none">
        <defs>
          <linearGradient id="flowGradient" x1="110" y1="55" x2="340" y2="495" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="33%" stopColor="#0891b2" />
            <stop offset="66%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* soft base line */}
        <path d={pathD} stroke="url(#flowGradient)" strokeWidth="2" strokeOpacity="0.2" fill="none" strokeLinecap="round" />
        {/* animated dashed overlay to sell the "flow" */}
        <path
          d={pathD}
          stroke="url(#flowGradient)"
          strokeWidth="2.5"
          strokeOpacity="0.7"
          strokeDasharray="9 11"
          fill="none"
          strokeLinecap="round"
          className="animate-dash-flow"
        />

        {/* traveling data particles */}
        {[0, 2, 4].map((delay, i) => (
          <g key={i}>
            <circle r="7" fill="url(#flowGradient)" opacity="0.35">
              <animateMotion dur="6s" begin={`${delay}s`} repeatCount="indefinite" path={pathD} rotate="auto" />
              <animate attributeName="opacity" values="0;0.4;0.4;0" keyTimes="0;0.05;0.9;1" dur="6s" begin={`${delay}s`} repeatCount="indefinite" />
            </circle>
            <circle r="3.5" fill="#ffffff">
              <animateMotion dur="6s" begin={`${delay}s`} repeatCount="indefinite" path={pathD} rotate="auto" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.9;1" dur="6s" begin={`${delay}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>

      {/* Stage cards */}
      {stages.map((s, i) => (
        <motion.div
          key={s.title}
          className="absolute"
          style={{ left: s.x, top: s.y, transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.25 + 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="glass-card rounded-2xl px-4 py-3.5 flex items-center gap-3 w-53"
            animate={{
              boxShadow: [
                "0 10px 25px -8px rgba(0,0,0,0.06)",
                `0 18px 34px -10px rgba(${s.glowRgb},0.35)`,
                "0 10px 25px -8px rgba(0,0,0,0.06)",
              ],
            }}
            transition={{ delay: i * 1.5, duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={`relative w-11 h-11 rounded-xl bg-linear-to-br ${s.color} flex items-center justify-center shrink-0 shadow-lg`}>
              <s.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider">STEP {s.step}</p>
              <p className="font-bold text-gray-900 text-sm leading-tight">{s.title}</p>
              <p className="text-xs text-gray-500 mt-0.5 truncate">{s.sub}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
