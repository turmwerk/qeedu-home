import {
  ArrowRight,
  BookOpen,
  Boxes,
  Building2,
  Check,
  ChevronRight,
  Cloud,
  DatabaseZap,
  Github,
  Layers3,
  LockKeyhole,
  Network,
  PanelsTopLeft,
  School,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
  Workflow,
} from 'lucide-react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './styles.css'

type IconComponent = React.ComponentType<{ size?: number }>

const cloudUrl = 'https://cloud.qeedu.tech'
const docsUrl = 'https://docs.qeedu.tech'
const githubUrl = 'https://github.com/turmwerk/qeedu'

const navItems = [
  { label: '产品', href: '/product' },
  { label: '方案', href: '/education' },
  { label: '版本', href: '/pricing' },
  { label: '安全', href: '/security' },
  { label: '文档', href: docsUrl, external: true },
]

const heroSlides = [
  {
    title: '把高校日常事务变成可复用的 AI 工作流',
    text: '围绕通知、公文、课程、科研、活动、就业等高频场景，让老师和同学用自然语言生成草稿、流程建议和资料整理结果。',
  },
  {
    title: '不是替换学校系统，而是成为轻量的智能辅助层',
    text: 'QeEdu 面向愿意尝试 AI 的教师、学生与管理人员，连接知识库、模板和多智能体能力，降低重复事务成本。',
  },
  {
    title: '社区版开放共建，教育版面向校园部署与定制',
    text: '从开源社区到云服务，再到私有化部署，形成可验证、可扩展、可交付的高校 AI 应用路线。',
  },
]

const featureGroups = [
  {
    icon: Workflow,
    title: '智能体编排',
    desc: '把任务拆解为检索、推理、生成、校对、导出等节点，形成稳定可复用的校园事务流程。',
  },
  {
    icon: BookOpen,
    title: '校本知识库',
    desc: '沉淀制度文件、模板、历史案例和课程材料，让生成内容贴近学校语境。',
  },
  {
    icon: Users,
    title: '多角色入口',
    desc: '教师、学生、辅导员、行政人员可以从不同任务入口进入，而不是被迫学习复杂系统。',
  },
  {
    icon: ShieldCheck,
    title: '安全与审计',
    desc: '围绕权限、日志、数据隔离和私有化部署设计，适配高校对数据合规的现实要求。',
  },
]

const scenarios = [
  '通知与公文草拟',
  '课程教案与题目生成',
  '学生事务答疑',
  '活动策划与材料汇总',
  '科研项目申报辅助',
  '就业与竞赛指导',
]

const editions = [
  {
    name: 'Community',
    badge: '开源共建',
    price: '免费自部署',
    desc: '适合学生团队、AI 社团、教师个人和开发者体验核心能力。',
    points: ['基础智能体与知识库', '本地模型或第三方模型接入', '社区文档与 GitHub Issue 支持'],
    cta: '查看 GitHub',
    href: githubUrl,
    icon: Boxes,
  },
  {
    name: 'Cloud',
    badge: '在线服务',
    price: '按量/套餐',
    desc: '适合快速试用、项目演示和跨设备协作，无需维护服务器。',
    points: ['托管应用与持续更新', '团队空间与模板市场', '适合竞赛展示与轻量教学试点'],
    cta: '进入云端',
    href: cloudUrl,
    icon: Cloud,
    highlight: true,
  },
  {
    name: 'Education',
    badge: '校园交付',
    price: '定制报价',
    desc: '面向院系、实验室、创新创业平台和有私有化需求的高校场景。',
    points: ['私有化部署与校内域名', '校本知识库初始化', '角色权限、审计与培训服务'],
    cta: '了解方案',
    href: '/education',
    icon: School,
  },
]

const deploymentSteps = [
  '梳理试点部门与高频事务',
  '导入制度、模板、问答与案例知识',
  '配置模型、权限、审计与数据边界',
  '交付智能体模板并开展教师/学生培训',
]

const productCapabilities: Array<{ title: string; desc: string; icon: IconComponent }> = [
  {
    title: '智能体工作台',
    desc: '创建面向通知、公文、课程、科研和学生事务的多步骤 AI 流程。',
    icon: Layers3,
  },
  {
    title: '知识库与模板',
    desc: '把学校制度、常用模板、历史案例整理成可检索、可引用的资料底座。',
    icon: BookOpen,
  },
  {
    title: 'API 与集成',
    desc: '保留与现有业务系统对接的空间，适合从轻量入口逐步走向集成。',
    icon: TerminalSquare,
  },
]

const securityItems: Array<{ title: string; desc: string; icon: IconComponent }> = [
  {
    title: '数据边界',
    desc: '按云端试用、团队空间、私有化部署区分数据存储与访问方式。',
    icon: LockKeyhole,
  },
  {
    title: '权限体系',
    desc: '为教师、学生、管理员和运营人员设置不同资源访问范围。',
    icon: Users,
  },
  {
    title: '审计追踪',
    desc: '保留关键调用、知识库更新和导出记录，方便试点复盘。',
    icon: Network,
  },
  {
    title: '模型选择',
    desc: '支持第三方模型、本地模型或学校指定模型网关接入。',
    icon: Sparkles,
  },
]

function Layout() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/community" element={<EditionPage edition="Community" />} />
        <Route path="/cloud" element={<EditionPage edition="Cloud" />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="QeEdu 首页">
        <img className="brand-logo" src="/qeedu-logo.png" alt="" />
        <span>
          <strong>启育 QeEdu</strong>
          <small>AI 原生智能体平台</small>
        </span>
      </Link>
      <nav className="nav-links" aria-label="主导航">
        {navItems.map((item) =>
          item.external ? (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ) : (
            <NavLink key={item.label} to={item.href}>
              {item.label}
            </NavLink>
          ),
        )}
      </nav>
      <div className="header-actions">
        <a className="ghost-button" href={githubUrl}>
          <Github size={16} />
          GitHub
        </a>
        <a className="solid-button" href={cloudUrl}>
          <Cloud size={16} />
          进入 Cloud
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  )
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="pill">
            <Sparkles size={16} />
            Community + Cloud + Education
          </div>
          <h1>启育 QeEdu</h1>
          <p className="hero-subtitle">面向高校全角色、全场景的 AI 原生智能体平台</p>
          <RotatingMessages />
          <div className="hero-actions">
            <a className="solid-button large" href={cloudUrl}>
              <Cloud size={18} />
              体验云端平台
              <ArrowRight size={18} />
            </a>
            <a className="ghost-button large" href={docsUrl}>
              阅读文档
            </a>
          </div>
          <div className="trust-row">
            <span>定位清晰</span>
            <span>不替换校内系统</span>
            <span>聚焦 AI 辅助与工作流生成</span>
          </div>
        </div>
        <ProductConsole />
      </section>

      <section className="marquee-section" aria-label="动态能力">
        <div className="marquee-track">
          {[...scenarios, ...scenarios].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <SectionHeader
        eyebrow="Platform"
        title="让 AI 真正进入高校日常任务，而不是停留在聊天窗口"
        desc="QeEdu 把高校事务拆成知识、模板、角色、流程和交付结果。它不是要求学校换掉 OA、教务或学工系统，而是在这些系统之外提供轻量的 AI 生产力入口。"
      />
      <section className="feature-grid">
        {featureGroups.map((item) => (
          <article className="feature-card" key={item.title}>
            <item.icon size={24} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Use Cases</p>
          <h2>从“能演示”走向“能试点”的校园场景</h2>
          <p>
            商业化前提不是喊全校替换，而是先找到高频、低风险、可验证的辅助任务。QeEdu
            适合从学院、实验室、竞赛基地、就业指导中心等小范围试点开始。
          </p>
        </div>
        <div className="scenario-board">
          {scenarios.map((scenario) => (
            <div className="scenario-chip" key={scenario}>
              <Check size={16} />
              {scenario}
            </div>
          ))}
        </div>
      </section>

      <EditionCards />

      <section className="deployment-section">
        <div className="deployment-copy">
          <p className="eyebrow">Private Deployment</p>
          <h2>私有化部署不是口号，而是明确交付边界</h2>
          <p>
            面向高校的数据安全需求，教育版可以部署在学校服务器、私有云或专有云环境中，并按院系流程配置知识库、模型、权限和审计。
          </p>
          <Link className="text-link" to="/security">
            查看安全与合规设计
            <ChevronRight size={16} />
          </Link>
        </div>
        <ol className="timeline">
          {deploymentSteps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <CallToAction />
    </>
  )
}

function RotatingMessages() {
  return (
    <div className="rotator" aria-label="核心定位">
      {heroSlides.map((slide, index) => (
        <article key={slide.title} style={{ animationDelay: `${index * 5}s` }}>
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
        </article>
      ))}
    </div>
  )
}

function ProductConsole() {
  return (
    <div className="console" aria-label="QeEdu 产品界面示意">
      <div className="console-topbar">
        <span />
        <span />
        <span />
        <strong>Campus Agent Builder</strong>
      </div>
      <div className="console-grid">
        <aside>
          {['智能体', '知识库', '模板', '审计'].map((item, index) => (
            <div className={index === 0 ? 'active' : ''} key={item}>
              <PanelsTopLeft size={16} />
              {item}
            </div>
          ))}
        </aside>
        <div className="workflow-canvas">
          <div className="node source">
            <DatabaseZap size={18} />
            校本知识
          </div>
          <div className="connector" />
          <div className="node model">
            <Sparkles size={18} />
            AI 生成
          </div>
          <div className="connector" />
          <div className="node output">
            <BookOpen size={18} />
            材料导出
          </div>
          <div className="insight-panel">
            <strong>今日试点</strong>
            <span>12 个任务模板被调用</span>
            <span>4 个知识库完成更新</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <section className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{desc}</p>
    </section>
  )
}

function EditionCards() {
  return (
    <section className="edition-grid" id="editions">
      {editions.map((edition) => (
        <article className={edition.highlight ? 'edition-card highlighted' : 'edition-card'} key={edition.name}>
          <div className="edition-icon">
            <edition.icon size={22} />
          </div>
          <span className="edition-badge">{edition.badge}</span>
          <h3>{edition.name}</h3>
          <strong>{edition.price}</strong>
          <p>{edition.desc}</p>
          <ul>
            {edition.points.map((point) => (
              <li key={point}>
                <Check size={15} />
                {point}
              </li>
            ))}
          </ul>
          {edition.href.startsWith('http') ? (
            <a className="card-link" href={edition.href}>
              {edition.cta}
              <ArrowRight size={16} />
            </a>
          ) : (
            <Link className="card-link" to={edition.href}>
              {edition.cta}
              <ArrowRight size={16} />
            </Link>
          )}
        </article>
      ))}
    </section>
  )
}

function ProductPage() {
  return (
    <PageShell
      eyebrow="Product"
      title="从聊天到工作流，再到校园智能体"
      desc="QeEdu 的核心不是单个聊天机器人，而是面向高校任务的智能体构建、知识检索、内容生成和结果交付。"
    >
      <section className="capability-list">
        {productCapabilities.map(({ title, desc, icon: Icon }) => (
          <article className="wide-card" key={title}>
            <Icon size={24} />
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  )
}

function EditionPage({ edition }: { edition: 'Community' | 'Cloud' }) {
  const current = editions.find((item) => item.name === edition)!
  return (
    <PageShell
      eyebrow="Edition"
      title={`QeEdu ${current.name}`}
      desc={current.desc}
    >
      <section className="detail-grid">
        {current.points.map((point) => (
          <article className="feature-card compact" key={point}>
            <Check size={20} />
            <h3>{point}</h3>
            <p>围绕真实试点需求逐步开放，优先保证可演示、可部署、可验证。</p>
          </article>
        ))}
      </section>
    </PageShell>
  )
}

function EducationPage() {
  return (
    <PageShell
      eyebrow="Education"
      title="教育版面向院系试点、创新创业平台和私有化部署"
      desc="教育版不是简单卖账号，而是把部署、知识库初始化、场景模板、权限与培训作为交付包。"
    >
      <section className="detail-grid">
        {[
          ['试点咨询', '从学院、实验室、就业中心等低风险场景开始，明确数据边界和可衡量指标。'],
          ['私有化部署', '支持校内服务器、私有云或专有云部署，API 与前端可按学校域名配置。'],
          ['定制服务', '围绕校本制度、话术、模板、流程和品牌视觉进行配置，不承诺替代核心业务系统。'],
          ['培训与运营', '提供教师、学生、管理员的分层使用手册和模板维护机制。'],
        ].map(([title, desc]) => (
          <article className="feature-card compact" key={title}>
            <Building2 size={20} />
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </section>
    </PageShell>
  )
}

function SecurityPage() {
  return (
    <PageShell
      eyebrow="Security"
      title="围绕高校数据安全设计部署和使用边界"
      desc="QeEdu 的安全叙事应当落在数据隔离、权限控制、日志审计、模型配置和私有化部署上，而不是泛泛承诺。"
    >
      <section className="detail-grid">
        {securityItems.map(({ title, desc, icon: Icon }) => (
          <article className="feature-card compact" key={title}>
            <Icon size={20} />
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </section>
    </PageShell>
  )
}

function PricingPage() {
  return (
    <PageShell
      eyebrow="Plans"
      title="用 Community、Cloud、Education 三层讲清商业模式"
      desc="比赛展示时可以先展示规划，不需要假装已经具备完整企业版能力。关键是路线可信、边界清晰。"
    >
      <EditionCards />
    </PageShell>
  )
}

function PageShell({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow: string
  title: string
  desc: string
  children: React.ReactNode
}) {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{desc}</p>
      </section>
      {children}
      <CallToAction />
    </main>
  )
}

function CallToAction() {
  return (
    <section className="cta-section">
      <div>
        <p className="eyebrow">Start</p>
        <h2>先从可展示、可试用、可解释的 AI 校园助手开始</h2>
        <p>官网负责讲清定位和商业模式，Cloud 负责承载产品体验，Docs 负责支撑部署与二次开发。</p>
      </div>
      <div className="cta-actions">
        <a className="solid-button large" href={cloudUrl}>
          <Cloud size={18} />
          打开 Cloud
          <ArrowRight size={18} />
        </a>
        <a className="ghost-button large" href={docsUrl}>
          查看 Docs
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="brand">
        <img className="brand-logo" src="/qeedu-logo.png" alt="" />
        <span>
          <strong>启育 QeEdu</strong>
          <small>AI for higher education workflows</small>
        </span>
      </div>
      <div className="footer-links">
        <a href={cloudUrl}>Cloud</a>
        <a href={docsUrl}>Docs</a>
        <a href={githubUrl}>GitHub</a>
      </div>
    </footer>
  )
}

export function App() {
  return <Layout />
}
