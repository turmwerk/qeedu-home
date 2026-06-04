import {
  ArrowRight,
  BookOpen,
  Boxes,
  BrainCircuit,
  ClipboardList,
  Building2,
  Check,
  ChevronRight,
  Cloud,
  DatabaseZap,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  PanelsTopLeft,
  School,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UserCheck,
  Users,
  WandSparkles,
  Workflow,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './styles.css'

type IconComponent = React.ComponentType<{ size?: number }>

const cloudUrl = 'https://cloud.qeedu.tech'
const docsUrl = 'https://docs.qeedu.tech'
const githubUrl = 'https://github.com/turmwerk/qeedu'

const navItems = [
  { label: '产品', href: '/product' },
  { label: '场景', href: '/scenarios' },
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

const metrics = [
  { value: '3', label: '版本路线', desc: 'Community、Cloud、Education' },
  { value: '6+', label: '高频场景', desc: '教学、学工、行政、科研、竞赛、就业' },
  { value: '4 层', label: '交付边界', desc: '知识、智能体、权限、部署' },
]

const roleScenarios: Array<{ icon: IconComponent; role: string; desc: string; tasks: string[] }> = [
  {
    icon: GraduationCap,
    role: '教师',
    desc: '面向课程建设、教学材料、科研申报和学院事务，把重复写作变成可复用模板。',
    tasks: ['教案与题目生成', '课程资料整理', '科研申报摘要', '学院通知草稿'],
  },
  {
    icon: Users,
    role: '学生',
    desc: '面向学习规划、竞赛项目、就业准备和校园活动，提供结构化建议与草稿生成。',
    tasks: ['学习计划', '竞赛计划书', '简历与面试', '活动策划'],
  },
  {
    icon: UserCheck,
    role: '辅导员与学工',
    desc: '围绕学生事务、常见问答、活动组织和材料汇总，减少高频重复沟通成本。',
    tasks: ['事务问答', '活动方案', '材料汇总', '流程说明'],
  },
  {
    icon: Building2,
    role: '行政与平台运营',
    desc: '用于制度检索、模板管理、试点复盘和权限配置，而不是替代核心审批系统。',
    tasks: ['制度检索', '模板维护', '权限配置', '审计复盘'],
  },
]

const architectureLayers: Array<{ icon: IconComponent; title: string; desc: string }> = [
  {
    icon: PanelsTopLeft,
    title: 'Cloudflare 前端',
    desc: '官网、文档和 Cloud 产品分域部署，便于展示、试用和后续运营。',
  },
  {
    icon: Server,
    title: 'API 与微服务',
    desc: '以 API 网关连接用户、智能体、聊天、沙箱等后端能力，保持可扩展边界。',
  },
  {
    icon: BrainCircuit,
    title: '模型与工具编排',
    desc: '支持第三方模型、本地模型或学校指定模型网关，按任务组合知识检索与生成。',
  },
  {
    icon: LockKeyhole,
    title: '数据与权限',
    desc: '围绕知识库、角色权限、调用日志和私有化部署设计安全闭环。',
  },
]

const trialSteps = [
  {
    title: '选择低风险试点',
    desc: '从通知草稿、课程材料、活动策划、就业辅导等辅助任务开始。',
  },
  {
    title: '沉淀校本知识',
    desc: '导入制度文件、模板、问答和历史案例，让输出贴近真实学校语境。',
  },
  {
    title: '配置智能体模板',
    desc: '把任务拆成检索、生成、校对、导出等节点，形成可复用流程。',
  },
  {
    title: '评估并扩展',
    desc: '用生成时间、修改比例、复用次数和用户反馈评估是否扩大试点。',
  },
]

const roadmap = [
  { stage: '当前', title: '可展示的 Cloud 体验', desc: '官网、文档、登录、核心 AI 辅助能力和比赛演示闭环。' },
  { stage: '近期', title: '社区版开源共建', desc: '完善部署文档、示例模板和 Issue 反馈，让外部用户能跑起来。' },
  { stage: '中期', title: '教育版试点包', desc: '形成私有化部署、校本知识库初始化、培训和运营复盘模板。' },
  { stage: '长期', title: '校园智能体生态', desc: '沉淀可复用场景市场和高校 AI 应用最佳实践。' },
]

const comparisonRows = [
  ['核心定位', '辅助生成、知识检索、流程建议', '替代 OA、教务、学工等核心系统'],
  ['适用数据', '公开/低敏材料，或私有化环境内的校本资料', '在云端直接处理高敏校务数据'],
  ['交付方式', 'Cloud 体验、社区版自部署、教育版私有化', '一次性承诺全校上线'],
  ['结果责任', 'AI 输出由用户确认后进入正式流程', 'AI 自动作出正式业务结论'],
]

const faqs = [
  {
    question: 'QeEdu 凭什么适合高校？',
    answer: '它不要求高校替换现有系统，而是先解决材料生成、知识检索、流程说明、模板复用这些低风险高频任务，适合从兴趣用户和小范围试点切入。',
  },
  {
    question: '所谓全角色、全场景会不会太大？',
    answer: '官网表达的是长期平台方向；当前落地应聚焦教师、学生、辅导员、行政人员的辅助任务，并明确不覆盖核心审批和正式业务决策。',
  },
  {
    question: '如何商业化？',
    answer: 'Community 建立可信开源入口，Cloud 承接在线试用和订阅，Education 通过私有化部署、校本知识库、场景模板和培训服务形成交付收入。',
  },
  {
    question: '数据安全怎么讲？',
    answer: '按 Cloud、社区自部署、教育版私有化区分数据边界，并围绕权限、日志、模型接入和人工确认机制说明安全设计。',
  },
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

const scenarioDetails: Array<{ title: string; desc: string; icon: IconComponent }> = [
  {
    title: '材料生成',
    desc: '通知、公文、新闻稿、总结、活动策划案、项目申报摘要。',
    icon: FileText,
  },
  {
    title: '知识问答',
    desc: '围绕校本制度、课程资料、竞赛规则和就业政策进行检索式问答。',
    icon: BookOpen,
  },
  {
    title: '流程建议',
    desc: '把复杂事务拆成时间表、材料清单、负责人和注意事项。',
    icon: ClipboardList,
  },
  {
    title: '模板复用',
    desc: '沉淀学院、社团、实验室常用模板，让下一次任务更快完成。',
    icon: WandSparkles,
  },
]

const servicePacks: Array<{ title: string; desc: string; icon: IconComponent }> = [
  {
    title: '部署实施',
    desc: '域名、HTTPS、数据库、对象存储、模型网关和后端服务配置。',
    icon: Server,
  },
  {
    title: '知识库初始化',
    desc: '制度、模板、FAQ、历史案例的整理、分组、导入和校验。',
    icon: DatabaseZap,
  },
  {
    title: '场景模板',
    desc: '教师、学生、学工、行政四类模板包，按试点部门调整。',
    icon: Settings2,
  },
  {
    title: '运营复盘',
    desc: '使用数据、反馈问题、模板迭代和下一阶段试点建议。',
    icon: LineChart,
  },
]

function Layout() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/scenarios" element={<ScenariosPage />} />
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
        <div className="hero-ambient" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
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
        <div className="hero-floating-notes" aria-hidden="true">
          <span>课程材料</span>
          <span>校本知识库</span>
          <span>私有化部署</span>
          <span>智能体工作流</span>
        </div>
      </section>

      <section className="metric-strip" aria-label="QeEdu 产品指标">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.desc}</p>
          </article>
        ))}
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

      <RoleScenarioSection />

      <ArchitectureSection />

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

      <ComparisonSection />

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

      <RoadmapSection />

      <FaqSection />

      <CallToAction />
    </>
  )
}

function RotatingMessages() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [visibleText, setVisibleText] = useState('')
  const [mode, setMode] = useState<'typing' | 'holding' | 'deleting'>('typing')

  useEffect(() => {
    const currentTitle = heroSlides[slideIndex].title
    const delay = mode === 'holding' ? 1300 : mode === 'deleting' ? 22 : 54

    const timer = window.setTimeout(() => {
      if (mode === 'typing') {
        if (visibleText.length < currentTitle.length) {
          setVisibleText(currentTitle.slice(0, visibleText.length + 1))
          return
        }

        setMode('holding')
        return
      }

      if (mode === 'holding') {
        setMode('deleting')
        return
      }

      if (visibleText.length > 0) {
        setVisibleText(currentTitle.slice(0, visibleText.length - 1))
        return
      }

      setSlideIndex((index) => (index + 1) % heroSlides.length)
      setMode('typing')
    }, delay)

    return () => window.clearTimeout(timer)
  }, [mode, slideIndex, visibleText])

  const activeSlide = heroSlides[slideIndex]

  return (
    <div className="typewriter-panel" aria-label="核心定位">
      <div className="typewriter-window">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-label">QeEdu positioning</span>
      </div>
      <h2>
        {visibleText}
        <span className="typing-cursor" aria-hidden="true" />
      </h2>
      <p key={activeSlide.text}>{activeSlide.text}</p>
      <div className="typewriter-dots" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <span className={index === slideIndex ? 'active' : ''} key={slide.title} />
        ))}
      </div>
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

function RoleScenarioSection() {
  return (
    <section className="role-section">
      <SectionHeader
        eyebrow="Roles"
        title="把“全角色”落到可解释的辅助任务"
        desc="官网可以讲平台方向，但展示时必须让评委看到具体角色、具体任务、具体边界。QeEdu 先服务愿意尝试 AI 的老师、学生和校园工作人员。"
      />
      <div className="role-grid">
        {roleScenarios.map((item) => (
          <article className="role-card" key={item.role}>
            <div className="role-card-head">
              <item.icon size={24} />
              <h3>{item.role}</h3>
            </div>
            <p>{item.desc}</p>
            <div className="tag-list">
              {item.tasks.map((task) => (
                <span key={task}>{task}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ArchitectureSection() {
  return (
    <section className="architecture-section">
      <div className="architecture-copy">
        <p className="eyebrow">Architecture</p>
        <h2>官网、Cloud、Docs 分域部署，产品边界更清楚</h2>
        <p>
          `qeedu.tech` 承接品牌与商业模式，`cloud.qeedu.tech` 承接产品体验，`docs.qeedu.tech`
          承接部署和二次开发说明。这种结构也方便后续社区版与教育版分层演进。
        </p>
      </div>
      <div className="architecture-grid">
        {architectureLayers.map((layer) => (
          <article key={layer.title}>
            <layer.icon size={22} />
            <h3>{layer.title}</h3>
            <p>{layer.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ComparisonSection() {
  return (
    <section className="comparison-section">
      <div>
        <p className="eyebrow">Positioning</p>
        <h2>把边界讲清楚，商业化才可信</h2>
      </div>
      <div className="comparison-table" role="table" aria-label="QeEdu 定位边界">
        <div className="comparison-header" role="row">
          <span>维度</span>
          <span>QeEdu 做什么</span>
          <span>QeEdu 不承诺什么</span>
        </div>
        {comparisonRows.map(([dimension, does, not]) => (
          <div className="comparison-row" role="row" key={dimension}>
            <strong>{dimension}</strong>
            <span>{does}</span>
            <span>{not}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function RoadmapSection() {
  return (
    <section className="roadmap-section">
      <div className="roadmap-copy">
        <p className="eyebrow">Roadmap</p>
        <h2>从比赛展示到真实试点的四阶段路线</h2>
        <p>路线图的重点不是夸大现状，而是说明当前能做什么、下一步如何验证、未来如何形成教育版交付。</p>
      </div>
      <div className="roadmap-list">
        {roadmap.map((item) => (
          <article key={item.stage}>
            <span>{item.stage}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="faq-section">
      <div>
        <p className="eyebrow">FAQ</p>
        <h2>评委会追问的问题，首页先回答一部分</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
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
      <section className="trial-section">
        <div>
          <p className="eyebrow">Trial Playbook</p>
          <h2>产品试点不是“全校上线”，而是四步验证</h2>
        </div>
        <div className="trial-grid">
          {trialSteps.map((step, index) => (
            <article key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

function ScenariosPage() {
  return (
    <PageShell
      eyebrow="Scenarios"
      title="高频、低风险、可验证的校园 AI 辅助场景"
      desc="QeEdu 的场景展示应先证明“有用”，再谈“全角色、全场景”。这些场景适合做比赛演示和小范围试点。"
    >
      <RoleScenarioSection />
      <section className="scenario-detail-grid">
        {scenarioDetails.map(({ title, desc, icon: Icon }) => (
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
      <section className="service-pack-section">
        <div>
          <p className="eyebrow">Delivery Package</p>
          <h2>教育版交付包</h2>
          <p>把商业模式落到服务清单，避免只讲“私有化部署”和“学校定制”。</p>
        </div>
        <div className="service-pack-grid">
          {servicePacks.map(({ title, desc, icon: Icon }) => (
            <article key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
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
      <ComparisonSection />
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
