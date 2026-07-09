"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  affiliation: string | null;
  context: string;
  link: string | null;
  linkLabel: string | null;
  demo?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: "gvpt",
    title: "GVPT",
    description:
      "시각적 피치 추적을 위한 실시간 실험 플랫폼입니다. 정밀한 피치 감지와 동적 시각 타겟을 구현하여 통제된 행동 및 음성 실험을 지원합니다.",
    affiliation: null,
    context: "행동 및 음성 실험",
    link: null,
    linkLabel: "사이트 방문",
    demo: "/demos/GVPT_Demo.mp4",
    tags: ["피치 추적", "실시간", "음성", "실험"],
  },
  {
    id: "apt",
    title: "APT",
    description:
      "피치 기반 실험을 위한 실시간 청각 피드백 시스템입니다. 정확한 피치 감지와 청각 타겟 안내를 제공하여 통제된 행동 연구를 지원합니다.",
    affiliation: null,
    context: "행동 연구",
    link: null,
    linkLabel: "사이트 방문",
    demo: "/demos/APT_Demo.mp4",
    tags: ["청각 피드백", "피치 감지", "실시간", "실험"],
  },
  {
    id: "uiowa-remote-voice",
    title: "UIowa Remote Voice",
    description:
      "음성 및 설문 기반 의료 연구를 위한 원격 데이터 수집 플랫폼입니다. 참가자들이 임상 환경 밖에서 고품질 녹음과 메타데이터를 제공할 수 있게 하여 연구의 접근성과 확장성을 향상시킵니다.",
    affiliation: "아이오와 대학교",
    context: "의료 음성 연구",
    link: null,
    linkLabel: "사이트 방문",
    tags: ["음성", "원격 데이터 수집", "의료 연구", "설문"],
  },
  {
    id: "3d-lipid-projection",
    title: "3D Lipid Projection",
    description:
      "고차원 지질체학 데이터를 위한 연구 시각화 도구입니다. Isomap과 UMAP을 사용해 지질 및 피험자를 투영하여 전역적·국소적 매니폴드 구조를 파악하고, 하위 머신러닝 및 위상 분석을 위한 피처 선택을 지원합니다.",
    affiliation: "매니토바 대학교",
    context: "종양 연구 목적으로 개발",
    link: null,
    linkLabel: null,
    tags: ["시각화", "지질체학", "UMAP", "Isomap", "머신러닝"],
  },
  {
    id: "3d-stack-image-annotator",
    title: "3D Stack Image Annotator",
    description:
      "오가노이드 이미징을 위한 3D 인식 어노테이션 도구입니다. 복잡한 3D 구조 내에서 공간적 일관성을 유지하면서 이미지 스택 전반에 걸친 효율적인 레이블링을 지원합니다. 암 오가노이드 분석을 위한 딥러닝 파이프라인을 지원하도록 설계되었습니다.",
    affiliation: "아이오와 대학교",
    context: "암 오가노이드 분석",
    link: null,
    linkLabel: null,
    tags: ["어노테이션", "3D 이미징", "딥러닝", "오가노이드", "암"],
  },
];

export default function Portfolio({ hideHeader }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05, rootMargin: "100px 0px 0px 0px" }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!hideHeader && (
          <div ref={ref} className="section-reveal text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full border border-blue-100 mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              검증된 연구 성과
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              국내외 주요 연구기관과 함께 쌓아온 실적과 경험
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group rounded-2xl border border-gray-100 hover:border-blue-100 bg-white hover:shadow-xl hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {p.demo && (
                <video
                  src={p.demo}
                  className="w-full h-40 object-cover bg-gray-100"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              )}
              <div className="p-6">
                {p.affiliation && (
                  <p className="text-xs font-semibold text-blue-500 mb-1">{p.affiliation}</p>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{p.context}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <Link
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                  >
                    {p.linkLabel ?? "자세히 보기"}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-10 rounded-2xl bg-linear-to-r from-blue-600 to-blue-500 text-white">
          <h3 className="text-2xl font-bold mb-3">귀 기관의 연구에 기여하고 싶습니다</h3>
          <p className="text-blue-100 mb-6">첫 상담은 무료입니다. 연구 목표를 말씀해 주세요.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3.5 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg"
          >
            프로젝트 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
