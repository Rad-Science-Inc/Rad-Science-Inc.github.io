import Link from "next/link";
import { Server, Zap, Workflow, Users, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "의료 연구 소프트웨어 공급",
    desc: "PACS 연동, 임상 데이터 관리, FDA·CE 인허가 대응까지 의료 현장 최적화 솔루션",
    color: "blue",
  },
  {
    icon: Zap,
    title: "딥러닝 데이터 분석",
    desc: "CT·MRI·X-ray부터 유전체·EMR까지 의료 데이터에 최신 AI 모델을 적용한 분석 서비스",
    color: "indigo",
  },
  {
    icon: Workflow,
    title: "연구 데이터 파이프라인",
    desc: "데이터 수집·전처리·분석 전 과정을 자동화하여 연구 효율을 획기적으로 개선",
    color: "cyan",
  },
  {
    icon: Users,
    title: "연구 컨설팅 & 공동 연구",
    desc: "AI 연구 설계부터 SCI(E) 논문 게재까지, 연구의 전 과정을 함께하는 파트너",
    color: "violet",
  },
];

const borderMap: Record<string, string> = {
  blue: "hover:border-blue-300 hover:shadow-blue-100",
  indigo: "hover:border-indigo-300 hover:shadow-indigo-100",
  cyan: "hover:border-cyan-300 hover:shadow-cyan-100",
  violet: "hover:border-violet-300 hover:shadow-violet-100",
};

const iconBg: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  indigo: "bg-indigo-100 text-indigo-600",
  cyan: "bg-cyan-100 text-cyan-600",
  violet: "bg-violet-100 text-violet-600",
};

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full border border-blue-100 mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            연구의 모든 단계를 지원합니다
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            소프트웨어 공급부터 AI 분석, 논문 지원까지 — 의료 연구의 A to Z
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`p-6 rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${borderMap[svc.color]}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${iconBg[svc.color]}`}>
                <svc.icon className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{svc.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-blue-200 hover:border-blue-500 text-blue-600 font-semibold rounded-full transition-all duration-200 text-sm hover:bg-blue-50"
          >
            서비스 전체 보기
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
