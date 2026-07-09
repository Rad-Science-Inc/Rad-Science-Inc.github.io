"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const highlights = [
  {
    id: "gvpt",
    title: "GVPT",
    affiliation: null,
    desc: "시각적 피치 추적을 위한 실시간 실험 플랫폼입니다. 정밀한 피치 감지와 동적 시각 타겟으로 통제된 행동 및 음성 실험을 지원합니다.",
    tags: ["피치 추적", "실시간"],
    demo: "/demos/GVPT_Demo.mp4",
  },
  {
    id: "apt",
    title: "APT",
    affiliation: null,
    desc: "피치 기반 실험을 위한 실시간 청각 피드백 시스템입니다. 정확한 피치 감지와 청각 타겟 안내로 통제된 행동 연구를 지원합니다.",
    tags: ["청각 피드백", "실시간"],
    demo: "/demos/APT_Demo.mp4",
  },
  {
    id: "uiowa-remote-voice",
    title: "UIowa Remote Voice",
    affiliation: "아이오와 대학교",
    desc: "음성 및 설문 기반 의료 연구를 위한 원격 데이터 수집 플랫폼입니다. 임상 환경 밖에서도 고품질 녹음과 메타데이터를 수집합니다.",
    tags: ["음성", "원격 데이터 수집"],
  },
];

export default function PortfolioHighlights() {
  return (
    <section className="py-24 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full border border-blue-100 mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              검증된 연구 성과
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
          >
            전체 포트폴리오 보기
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-50 hover:-translate-y-1 hover:border-blue-100 transition-all duration-300"
            >
              {item.demo && (
                <video
                  src={item.demo}
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
              <div className="p-7">
                {item.affiliation && (
                  <p className="text-xs font-bold text-blue-500 mb-1.5 uppercase tracking-wide">{item.affiliation}</p>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{item.desc}</p>
                <div className="flex gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
