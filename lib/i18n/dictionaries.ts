import type { Locale } from "./constants";

export const dictionaries = {
  ko: {
    brand: "래드사이언스",
    nav: {
      about: "회사 소개",
      services: "서비스",
      portfolio: "포트폴리오",
      contact: "문의",
      menuLabel: "메뉴",
    },
    pageHeaders: {
      home: "홈",
      about: {
        badge: "About Us",
        title: "의료와 AI의 교차점에서",
        subtitle: "방사선 의학과 데이터 과학의 결합에서 출발한 의료 AI 전문 법인",
        breadcrumb: "회사 소개",
      },
      services: {
        badge: "Services",
        title: "전문화된 의료 AI 서비스",
        subtitle: "의료 연구의 전 과정에서 데이터 기반 인사이트를 제공합니다",
        breadcrumb: "서비스",
      },
      contact: {
        badge: "Contact",
        title: "함께 연구를 시작하세요",
        subtitle: "어떤 단계에 계시든 Rad Science가 함께 방향을 잡아드립니다",
        breadcrumb: "문의",
      },
      portfolio: {
        badge: "Portfolio",
        title: "검증된 연구 성과",
        subtitle: "국내 주요 의료기관과 함께 쌓아온 실적과 경험",
        breadcrumb: "포트폴리오",
      },
    },
    hero: {
      badge: "법인 전환 공식 출범",
      titleLine1: "데이터가 지식이 되는",
      titleLine2: "순간을 설계합니다",
      subtitle:
        "Rad Science는 의료 연구 소프트웨어 공급과 딥러닝 기반 데이터 분석으로 연구자와 의료 기관의 다음 발견을 함께 만듭니다.",
      ctaPrimary: "서비스 살펴보기",
      ctaSecondary: "무료 상담 신청",
      scrollLabel: "SCROLL",
      stats: [
        { num: "50+", label: "납품 기관" },
        { num: "99%", label: "고객 만족도" },
        { num: "5년+", label: "연구 경험" },
        { num: "15+", label: "SCI 논문" },
      ],
    },
    about: {
      titleLine1: "의료와 AI의 교차점에서",
      titleLine2Gradient: "새로운 가능성을",
      paragraph1:
        "Rad Science는 방사선 의학(Radiology)과 데이터 과학(Data Science)의 결합에서 출발한 의료 AI 전문 기업입니다.",
      paragraph2:
        "국내 주요 대학병원 및 연구기관과의 협력을 통해 쌓은 의료 도메인 지식과 최신 딥러닝 기술을 결합하여, 연구자들이 더 빠르고 정확하게 임상적 인사이트를 얻을 수 있도록 지원합니다. 2024년 법인 전환 이후에는 이 노하우를 바탕으로 계산과학, 바이오, 기후·에너지, 국방·우주항공, 로봇·IoT 등 다양한 과학기술 분야로 연구개발 영역을 넓혀가며, 보다 체계적이고 신뢰할 수 있는 서비스 제공 체계를 갖추었습니다.",
      leadership: {
        sectionLabel: "Leadership",
        ceoName: "조현진",
        ceoRole: "대표이사",
        timeline: [
          {
            year: "2021",
            title: "다이브플래시 CTO",
            desc: "수중사진 필터 앱 및 CNN 기반 어류 탐지·분석 시스템을 개발한 스타트업 다이브플래시의 CTO로 활동",
          },
          {
            year: "2022",
            title: "아이오와 대학교 컴퓨터공학 석사 입학",
            desc: "University of Iowa Computer Science 석사 과정 시작",
          },
          {
            year: "2023",
            title: "아이오와 대학병원 신경외과 R01 그랜트 소프트웨어 개발",
            desc: "아이오와 대학병원(UIHC) 신경외과 R01 그랜트 파일럿 소프트웨어 개발 및 납품",
          },
          {
            year: "2024",
            title: "신경외과 프로젝트 확장",
            desc: "신경외과 프로젝트를 확장하고 새로운 패러다임의 소프트웨어를 개발",
          },
          {
            year: "2024",
            title: "이비인후과 발성장애 모니터링 앱 개발",
            desc: "아이오와 의료 낙후지역 노인 발성장애 모니터링 앱을 개발해 배포",
          },
          {
            year: "2025",
            title: "FOXP2 유전자 관련 논문 게재",
            desc: "FOXP2 유전자 관련 연구 논문 게재",
          },
          {
            year: "2025",
            title: "ISVC 논문 발표",
            desc: "오가노이드 데이터의 위상 기반 이미지 세그멘테이션 연구를 ISVC에서 발표",
          },
          {
            year: "2025",
            title: "신경외과 소프트웨어 프리프린트 게재",
            desc: "신경외과 소프트웨어 연구를 arXiv에 프리프린트로 게재 (Behavior Research Methods 심사 중)",
          },
          {
            year: "2026.07",
            title: "(주)래드사이언스 설립",
            desc: "래드사이언스 법인 사업자 등록",
            highlight: true,
          },
        ],
      },
      orgChart: {
        members: [
          { name: "조성호", role: "사내이사", bio: "연구 자문과 프로젝트 컨셉 설계를 총괄하며 방향성을 제시" },
          { name: "김성중", role: "제품 및 운영 부문 총괄", bio: "프로젝트 구체화 및 실무 개발과 소프트웨어 전반을 총괄" },
          { name: "염기진", role: "AI 데이터 엔지니어", bio: "데이터 가공과 분석을 중심으로 연구 인사이트 도출" },
        ],
      },
      businessAreas: {
        sectionLabel: "Business Areas",
        title: "사업 영역",
        desc: "의료 AI를 넘어 계산과학, 바이오, 기후·에너지, 국방·우주항공, 로봇·IoT까지 데이터 기반 연구개발 역량을 확장하고 있습니다.",
        items: [
          {
            title: "AI·데이터 과학",
            desc: "계산과학, 인공지능·머신러닝, 데이터 분석·예측 알고리즘부터 클라우드 기반 연구 플랫폼까지 데이터 기반 기술을 연구합니다.",
          },
          {
            title: "바이오·헬스케어",
            desc: "의료·디지털헬스 연구를 기반으로 생명정보학, 오믹스 빅데이터 분석, 신약 후보물질 발굴을 지원합니다.",
          },
          {
            title: "첨단 융합기술",
            desc: "기후·해양·에너지, 국방·우주항공·재난안전, 로봇·센서·IoT 등 다양한 산업의 지능형 시스템 연구개발에 참여합니다.",
          },
          {
            title: "국가 R&D·기술사업화",
            desc: "정부지원사업과 산학연 공동연구를 수행하고, 연구성과와 지식재산권을 기술이전·라이선스·사업화로 연결합니다.",
          },
          {
            title: "연구지원·교육",
            desc: "연구용 데이터베이스 구축부터 논문 작성 지원, 전문 교육과정·연구인력 양성까지 연구 생태계를 폭넓게 지원합니다.",
          },
        ],
      },
      keywordCloud: [
        "딥러닝",
        "의료 영상 분석",
        "바이오인포매틱스",
        "데이터 파이프라인",
        "임상 연구",
        "클라우드 연구 플랫폼",
        "로봇·IoT",
        "기술사업화",
      ],
      partners: {
        sectionLabel: "Partners",
        title: "함께하는 파트너",
        items: [
          { name: "한양대학교", logo: "/images/partners/hanyang.png" },
          { name: "아이오와 대학교", logo: "/images/partners/iowa.svg" },
          { name: "위스콘신 대학교", logo: "/images/partners/wisconsin.png" },
          { name: "매니토바 대학교", logo: "/images/partners/manitoba.svg" },
          { name: "㈜젠다카디언", logo: "/images/partners/xandar-kardian.png" },
        ],
      },
    },
    services: {
      badge: "Services",
      title: "전문화된 의료 AI 서비스",
      subtitle: "의료 연구의 전 과정에서 데이터 기반 인사이트를 제공합니다",
      items: [
        {
          title: "의료 연구 소프트웨어 공급",
          desc: "임상 연구, 영상 분석, PACS 연동 등 의료 현장에 최적화된 소프트웨어 솔루션을 공급합니다. FDA·CE 인허가 대응 경험을 바탕으로 신뢰할 수 있는 제품을 제공합니다.",
          details: [
            "PACS/DICOM 연동 및 영상 뷰어 커스터마이징",
            "임상시험 데이터 수집·관리 시스템(EDC) 구축",
            "FDA 510(k)·CE MDR 인허가 대응 문서화 지원",
          ],
          tags: ["PACS 연동", "임상 데이터 관리", "인허가 대응"],
          color: "blue",
        },
        {
          title: "딥러닝 데이터 분석 서비스",
          desc: "의료 영상(CT, MRI, X-ray), 유전체 데이터, EMR 등 다양한 의료 데이터에 딥러닝을 적용하여 진단 보조, 예후 예측, 패턴 분석 서비스를 제공합니다.",
          details: [
            "CT·MRI·X-ray 영상 분할(Segmentation) 및 병변 검출 모델 개발",
            "유전체·오믹스 데이터 기반 바이오마커 발굴",
            "EMR 시계열 데이터를 활용한 예후 예측 모델링",
          ],
          tags: ["영상 AI 분석", "예후 예측 모델", "바이오마커 탐색"],
          color: "indigo",
        },
        {
          title: "연구 데이터 파이프라인 구축",
          desc: "연구 기관 및 병원의 데이터 수집·전처리·분석까지 전 과정의 자동화 파이프라인을 설계하고 구축합니다. 반복 연구 작업의 효율을 획기적으로 개선합니다.",
          details: [
            "대규모 코호트 데이터 수집·정제 자동화(ETL)",
            "클라우드 기반 연구 데이터 레이크 구축",
            "반복 분석 워크플로우의 스케줄링·모니터링 체계화",
          ],
          tags: ["데이터 전처리", "자동화 파이프라인", "대규모 코호트"],
          color: "cyan",
        },
        {
          title: "연구 컨설팅 & 공동 연구",
          desc: "의료 AI 연구 설계부터 논문 게재까지 전 과정을 함께합니다. 국내외 저명 학술지 게재 경험을 바탕으로 연구 방법론 및 통계 분석을 지원합니다.",
          details: [
            "연구 설계 및 통계 분석 방법론 자문",
            "SCI(E)급 국제 학술지 논문 작성·투고 지원",
            "산학연 공동 연구과제 기획 및 참여",
          ],
          tags: ["연구 설계", "통계 분석", "논문 지원"],
          color: "violet",
        },
      ],
    },
    contact: {
      title: "함께 연구를 시작하세요",
      subtitle: "어떤 단계에 계시든 Rad Science가 함께 방향을 잡아드립니다",
      info: [
        { title: "이메일", value: "contact@radscience.ai.kr", sub: "영업일 기준 24시간 내 답변" },
        { title: "전화", value: "010-5968-1673", sub: "평일 09:00 – 18:00" },
        { title: "주소", value: "서울특별시", sub: "양천구 중앙로32길 55 306호 2A" },
      ],
      form: {
        nameLabel: "이름 *",
        namePlaceholder: "홍길동",
        orgLabel: "소속 기관",
        orgPlaceholder: "병원 / 대학교 / 기업",
        emailLabel: "이메일 *",
        emailPlaceholder: "you@hospital.ac.kr",
        phoneLabel: "연락처",
        phonePlaceholder: "010-0000-0000",
        messageLabel: "문의 내용 *",
        messagePlaceholder: "연구 주제, 데이터 종류, 목표 등을 자유롭게 작성해 주세요.",
        submit: "문의 보내기",
        submitting: "전송 중...",
        footNote: "제출한 문의 내용은 이메일로 전송됩니다. 개인정보는 문의 답변 목적으로만 사용됩니다.",
        errorDefault: "메일 발송에 실패했습니다.",
      },
      success: {
        title: "문의가 접수되었습니다",
        desc: "빠른 시일 내에 답변 드리겠습니다.",
        resetButton: "다시 작성하기",
      },
    },
    footer: {
      taglineLine1: "의료 연구 소프트웨어 공급 및",
      taglineLine2: "딥러닝 데이터 분석 전문 기업",
      quickLinksTitle: "Quick Links",
      links: { services: "서비스", about: "회사 소개", contact: "문의" },
      contactTitle: "Contact",
      addressValue: "서울특별시 양천구 중앙로32길 55 306호 2A",
      copyright: "© 2026 Rad Science Inc. All rights reserved.",
      bizReg: "사업자등록번호: 000-00-00000 | 대표: 조현진",
    },
    processBento: {
      badge: "Our Process",
      title: "데이터가 지식이 되는 여정",
      subtitle:
        "Rad Science는 실험실에서 시작된 데이터를 정제하고 딥러닝으로 분석해, 임상 현장에서 바로 쓸 수 있는 지식으로 완성합니다.",
      ctaLink: "서비스 자세히 알아보기 →",
    },
    whyUs: {
      badge: "Why Rad Science",
      title: "왜 Rad Science인가요?",
      subtitle: "의료 AI 프로젝트의 성패는 기술만큼 도메인 이해에 달려 있습니다",
      strengths: [
        { num: "50+", label: "납품 기관", desc: "국내 주요 대학병원 및 연구기관" },
        { num: "15+", label: "SCI 논문", desc: "공동 저자로 참여한 국제 저명 저널" },
        { num: "5년+", label: "의료 AI 경험", desc: "영상·유전체·EMR 전 분야 커버" },
        { num: "99%", label: "고객 만족도", desc: "납품 후 유지보수 및 재계약률" },
      ],
      differentiators: [
        {
          title: "의료 도메인 전문성",
          desc: "단순 개발사가 아닌, 의료 연구를 직접 수행한 팀이 만드는 솔루션입니다. 연구자의 언어로 소통하고 임상 현장의 맥락을 이해합니다.",
        },
        {
          title: "End-to-End 지원",
          desc: "데이터 수집 설계부터 모델 개발, 논문 작성, 인허가 대응까지 연구의 전 과정을 하나의 팀이 담당합니다.",
        },
        {
          title: "신속한 프로토타이핑",
          desc: "2주 내 파일럿 결과 제공을 원칙으로 합니다. 긴 계약 전 작은 성공 경험부터 확인하세요.",
        },
      ],
    },
    ctaBanner: {
      badge: "첫 상담 무료",
      titleLine1: "귀 기관의 연구에",
      titleLine2: "Rad Science가 함께합니다",
      subtitle:
        "연구 설계, 데이터 분석, 소프트웨어 도입 — 어느 단계든 지금 바로 이야기해 보세요. 첫 상담은 무료입니다.",
      ctaPrimary: "무료 상담 신청하기",
    },
  },
  en: {
    brand: "Rad Science",
    nav: {
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      menuLabel: "Menu",
    },
    pageHeaders: {
      home: "Home",
      about: {
        badge: "About Us",
        title: "At the Intersection of Medicine and AI",
        subtitle: "A medical AI corporation born from the convergence of radiology and data science",
        breadcrumb: "About",
      },
      services: {
        badge: "Services",
        title: "Specialized Medical AI Services",
        subtitle: "Delivering data-driven insight across the full research lifecycle",
        breadcrumb: "Services",
      },
      contact: {
        badge: "Contact",
        title: "Let's Start Your Research Together",
        subtitle: "Wherever you are in your research journey, Rad Science will help guide the way",
        breadcrumb: "Contact",
      },
      portfolio: {
        badge: "Portfolio",
        title: "Proven Research Impact",
        subtitle: "Track record and experience built alongside leading medical institutions nationwide and abroad",
        breadcrumb: "Portfolio",
      },
    },
    hero: {
      badge: "Now Officially Incorporated",
      titleLine1: "We design the moment",
      titleLine2: "data becomes knowledge",
      subtitle:
        "Rad Science combines medical research software with deep learning-based data analysis to help researchers and medical institutions make their next discovery, together.",
      ctaPrimary: "Explore Services",
      ctaSecondary: "Request a Free Consultation",
      scrollLabel: "SCROLL",
      stats: [
        { num: "50+", label: "Partner Institutions" },
        { num: "99%", label: "Client Satisfaction" },
        { num: "5+ Yrs", label: "Research Experience" },
        { num: "15+", label: "SCI Publications" },
      ],
    },
    about: {
      titleLine1: "At the Intersection of Medicine and AI,",
      titleLine2Gradient: "New Possibilities",
      paragraph1:
        "Rad Science is a medical AI company born from the convergence of Radiology and Data Science.",
      paragraph2:
        "Combining medical domain expertise built through collaboration with leading university hospitals and research institutions in Korea with cutting-edge deep learning technology, we help researchers gain clinical insights faster and more accurately. Since our corporate transition in 2024, we've expanded this expertise into computational science, bio, climate & energy, defense & aerospace, robotics & IoT, and other science and technology fields, building a more systematic and reliable service framework.",
      leadership: {
        sectionLabel: "Leadership",
        ceoName: "Jin Cho",
        ceoRole: "CEO",
        timeline: [
          {
            year: "2021",
            title: "CTO, DiveFlash",
            desc: "Served as CTO of DiveFlash, a startup that built an underwater photo filter app and a CNN-based fish detection and analysis system",
          },
          {
            year: "2022",
            title: "Began M.S. in Computer Science, University of Iowa",
            desc: "Started a Master's program in Computer Science at the University of Iowa",
          },
          {
            year: "2023",
            title: "R01 Grant Software Development, UIHC Neurosurgery",
            desc: "Developed and delivered pilot software for an NIH R01 grant project in the Department of Neurosurgery at University of Iowa Hospitals & Clinics",
          },
          {
            year: "2024",
            title: "Expanded Neurosurgery Project",
            desc: "Expanded the neurosurgery project and developed next-generation software",
          },
          {
            year: "2024",
            title: "Voice Disorder Monitoring App, Otolaryngology",
            desc: "Developed and deployed a voice-disorder monitoring app for elderly patients in medically underserved areas of Iowa",
          },
          {
            year: "2025",
            title: "Published Paper on the FOXP2 Gene",
            desc: "Published a research paper related to the FOXP2 gene",
          },
          {
            year: "2025",
            title: "Presented at ISVC",
            desc: "Presented research on topology-based image segmentation of organoid data at ISVC",
          },
          {
            year: "2025",
            title: "Neurosurgery Software Preprint",
            desc: "Posted a preprint on neurosurgery software research to arXiv (currently under review at Behavior Research Methods)",
          },
          {
            year: "Jul 2026",
            title: "Founded Rad Science Inc.",
            desc: "Officially registered Rad Science Inc.",
            highlight: true,
          },
        ],
      },
      orgChart: {
        members: [
          { name: "Seongho Cho", role: "In-house Director", bio: "Leads research advisory and project concept design, setting overall direction" },
          { name: "Jay Kim", role: "Head of Product and Operations", bio: "Oversees project execution, hands-on development, and software as a whole" },
          { name: "Kijin Yeom", role: "AI Data Engineer", bio: "Focuses on data processing and analysis to derive research insights" },
        ],
      },
      businessAreas: {
        sectionLabel: "Business Areas",
        title: "Business Areas",
        desc: "Beyond medical AI, we're expanding our data-driven R&D capabilities into computational science, bio, climate & energy, defense & aerospace, and robotics & IoT.",
        items: [
          {
            title: "AI & Data Science",
            desc: "We research data-driven technology spanning computational science, AI/ML, predictive analytics, and cloud-based research platforms.",
          },
          {
            title: "Bio & Healthcare",
            desc: "Built on medical and digital health research, we support bioinformatics, omics big-data analysis, and drug candidate discovery.",
          },
          {
            title: "Advanced Convergence Tech",
            desc: "We contribute to intelligent-systems R&D across climate/ocean/energy, defense/aerospace/disaster safety, and robotics/sensors/IoT.",
          },
          {
            title: "National R&D & Commercialization",
            desc: "We carry out government-funded and industry-academia joint research, translating results and IP into technology transfer, licensing, and commercialization.",
          },
          {
            title: "Research Support & Education",
            desc: "From research database construction to manuscript support and specialized training programs, we broadly support the research ecosystem.",
          },
        ],
      },
      keywordCloud: [
        "Deep Learning",
        "Medical Imaging",
        "Bioinformatics",
        "Data Pipeline",
        "Clinical Research",
        "Cloud Research Platform",
        "Robotics · IoT",
        "Tech Commercialization",
      ],
      partners: {
        sectionLabel: "Partners",
        title: "Our Partners",
        items: [
          { name: "Hanyang University", logo: "/images/partners/hanyang.png" },
          { name: "University of Iowa", logo: "/images/partners/iowa.svg" },
          { name: "University of Wisconsin-Madison", logo: "/images/partners/wisconsin.png" },
          { name: "University of Manitoba", logo: "/images/partners/manitoba.svg" },
          { name: "Xandar Kardian Inc.", logo: "/images/partners/xandar-kardian.png" },
        ],
      },
    },
    services: {
      badge: "Services",
      title: "Specialized Medical AI Services",
      subtitle: "Delivering data-driven insight across the full research lifecycle",
      items: [
        {
          title: "Medical Research Software",
          desc: "We supply software solutions optimized for clinical research, imaging analysis, and PACS integration, backed by hands-on experience with FDA/CE regulatory approval.",
          details: [
            "PACS/DICOM integration and custom imaging viewers",
            "Clinical trial EDC system design & data management",
            "FDA 510(k) / CE MDR regulatory documentation support",
          ],
          tags: ["PACS Integration", "Clinical Data Management", "Regulatory Support"],
          color: "blue",
        },
        {
          title: "Deep Learning Data Analysis",
          desc: "We apply deep learning to medical imaging (CT, MRI, X-ray), genomic data, and EMRs for diagnostic assistance, prognosis prediction, and pattern analysis.",
          details: [
            "Segmentation & lesion-detection models for CT/MRI/X-ray",
            "Biomarker discovery from genomic & omics data",
            "Prognosis prediction modeling from longitudinal EMR data",
          ],
          tags: ["Imaging AI Analysis", "Prognosis Prediction Models", "Biomarker Discovery"],
          color: "indigo",
        },
        {
          title: "Research Data Pipelines",
          desc: "We design and build automated pipelines covering the full data lifecycle — collection, preprocessing, and analysis — for research institutions and hospitals, dramatically improving efficiency for recurring research tasks.",
          details: [
            "Automated ETL for large-scale cohort data collection & cleaning",
            "Cloud-based research data lake architecture",
            "Scheduled, monitored pipelines for recurring analysis workflows",
          ],
          tags: ["Data Preprocessing", "Automated Pipelines", "Large-Scale Cohorts"],
          color: "cyan",
        },
        {
          title: "Research Consulting & Collaboration",
          desc: "We partner through the full arc of medical AI research, from study design to publication, supporting methodology and statistical analysis backed by experience publishing in leading journals worldwide.",
          details: [
            "Study design & statistical methodology consulting",
            "Manuscript preparation & submission support for SCI(E) journals",
            "Joint industry-academia R&D project planning & participation",
          ],
          tags: ["Study Design", "Statistical Analysis", "Publication Support"],
          color: "violet",
        },
      ],
    },
    contact: {
      title: "Let's Start Your Research Together",
      subtitle: "Wherever you are in your research journey, Rad Science will help guide the way",
      info: [
        { title: "Email", value: "contact@radscience.ai.kr", sub: "We respond within 24 business hours" },
        { title: "Phone", value: "010-5968-1673", sub: "Weekdays 09:00 – 18:00" },
        { title: "Address", value: "Seoul", sub: "306-2A, 55, Jungang-ro 32-gil, Yangcheon-gu" },
      ],
      form: {
        nameLabel: "Full Name *",
        namePlaceholder: "Jane Doe",
        orgLabel: "Organization",
        orgPlaceholder: "Hospital / University / Company",
        emailLabel: "Email *",
        emailPlaceholder: "you@hospital.ac.kr",
        phoneLabel: "Phone",
        phonePlaceholder: "010-0000-0000",
        messageLabel: "Message *",
        messagePlaceholder: "Feel free to describe your research topic, data types, and goals.",
        submit: "Send Message",
        submitting: "Sending...",
        footNote: "Submitting this form sends your message via email. Your information is used only to respond to your inquiry.",
        errorDefault: "Failed to send your message.",
      },
      success: {
        title: "Your inquiry has been received",
        desc: "We'll get back to you as soon as possible.",
        resetButton: "Submit Another Message",
      },
    },
    footer: {
      taglineLine1: "Medical research software supply and",
      taglineLine2: "deep learning data analysis specialists",
      quickLinksTitle: "Quick Links",
      links: { services: "Services", about: "About", contact: "Contact" },
      contactTitle: "Contact",
      addressValue: "306-2A, 55, Jungang-ro 32-gil, Yangcheon-gu, Seoul",
      copyright: "© 2026 Rad Science Inc. All rights reserved.",
      bizReg: "Business Registration No.: 000-00-00000 | CEO: Hyunjin Cho",
    },
    processBento: {
      badge: "Our Process",
      title: "The Journey from Data to Knowledge",
      subtitle:
        "Rad Science refines data from the lab and analyzes it with deep learning, turning it into knowledge that's ready for clinical use.",
      ctaLink: "Learn More About Our Services →",
    },
    whyUs: {
      badge: "Why Rad Science",
      title: "Why Rad Science?",
      subtitle: "In medical AI, success depends as much on domain understanding as on technology",
      strengths: [
        { num: "50+", label: "Partner Institutions", desc: "Leading university hospitals and research institutions nationwide" },
        { num: "15+", label: "SCI Publications", desc: "Co-authored papers in internationally renowned journals" },
        { num: "5+ Yrs", label: "Medical AI Experience", desc: "Covering imaging, genomics, and EMR data" },
        { num: "99%", label: "Client Satisfaction", desc: "Post-delivery maintenance and renewal rate" },
      ],
      differentiators: [
        {
          title: "Medical Domain Expertise",
          desc: "Not just a dev shop — our solutions are built by a team that has directly conducted medical research. We speak the language of researchers and understand clinical context.",
        },
        {
          title: "End-to-End Support",
          desc: "From data-collection design to model development, manuscript writing, and regulatory support — one team handles the entire research journey.",
        },
        {
          title: "Rapid Prototyping",
          desc: "We deliver pilot results within two weeks as a rule. See a small win before committing to a longer engagement.",
        },
      ],
    },
    ctaBanner: {
      badge: "Free First Consultation",
      titleLine1: "Rad Science is Here for",
      titleLine2: "Your Institution's Research",
      subtitle:
        "Study design, data analysis, software adoption — whatever stage you're at, let's talk today. Your first consultation is free.",
      ctaPrimary: "Request a Free Consultation",
    },
  },
} satisfies Record<Locale, unknown>;

export type Dictionary = (typeof dictionaries)["ko"];

// Maps a route path to the nav dictionary key used for its page title
const ROUTE_NAV_KEY: Record<string, keyof Dictionary["nav"]> = {
  "/about": "about",
  "/services": "services",
  "/contact": "contact",
};

export function getPageTitle(locale: Locale, pathname: string): string {
  const dict = dictionaries[locale];
  const navKey = ROUTE_NAV_KEY[pathname];
  return navKey ? `${dict.brand} | ${dict.nav[navKey]}` : dict.brand;
}
