import {
  ArrowRight,
  ArrowUp,
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
import type { ComponentType, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './styles.css'

type IconComponent = ComponentType<{ size?: number }>

type PageDemo = {
  label: string
  headline: string
  tone: 'product' | 'scenarios' | 'education' | 'security' | 'pricing' | 'community' | 'cloud'
  signals: string[]
  lanes: Array<{ title: string; detail: string; icon: IconComponent }>
  metrics: Array<{ value: string; label: string }>
  proof: {
    eyebrow: string
    title: string
    summary: string
    checks: string[]
    outputs: Array<{ title: string; detail: string; icon: IconComponent }>
  }
}

const cloudUrl = 'https://cloud.qeedu.tech'
const docsUrl = 'https://docs.qeedu.tech'
const githubUrl = 'https://github.com/turmwerk/qeedu'

const navItems = [
  { label: '产品', href: '/product', icon: PanelsTopLeft },
  { label: '场景', href: '/scenarios', icon: ClipboardList },
  { label: '方案', href: '/education', icon: School },
  { label: '版本', href: '/pricing', icon: Boxes },
  { label: '安全', href: '/security', icon: ShieldCheck },
  { label: '文档', href: docsUrl, external: true, icon: BookOpen },
]

const homeAnchors = [
  { id: 'home-hero', label: '首页', icon: Sparkles },
  { id: 'home-demo', label: '演示', icon: PanelsTopLeft },
  { id: 'home-workbench', label: '工作台', icon: Layers3 },
  { id: 'home-agents', label: '编排', icon: Workflow },
  { id: 'home-platform', label: '平台', icon: DatabaseZap },
  { id: 'home-roles', label: '角色', icon: Users },
  { id: 'home-flow', label: '流程', icon: ClipboardList },
  { id: 'home-editions', label: '版本', icon: Boxes },
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

const internationalFlow = [
  {
    step: '读取项目通知',
    detail: '从学院官网、国际处通知和项目 PDF 中提取时间、资格、材料和风险点。',
    output: '截止时间 / 申请条件 / 材料要求',
  },
  {
    step: '生成申请规划',
    detail: '把申请动作拆成周计划、提醒节点、材料负责人和需要人工确认的事项。',
    output: '时间线 / 待办清单 / 风险提醒',
  },
  {
    step: '辅助材料准备',
    detail: '生成邮件草稿、个人陈述结构、材料核对表和中英文沟通模板。',
    output: '邮件草稿 / 清单 / 文书框架',
  },
  {
    step: '回国认定归档',
    detail: '把成绩单、课程描述、学分认定说明整理成可复核的归档材料。',
    output: '认定说明 / 归档摘要 / 可追溯来源',
  },
]

const capabilityMatrix = [
  ['校本知识', '培养方案、办事指南、项目通知、课程材料'],
  ['智能体模板', '助国际、助教、助管、助研、助学等场景入口'],
  ['结构化输出', '清单、时间线、邮件、表格、Markdown 文档'],
  ['人工复核', '高风险节点保留确认、编辑、导出和审计记录'],
  ['部署选择', 'Cloud 体验、社区版自部署、教育版私有化'],
]

const demoStages = [
  {
    label: '输入任务',
    title: '帮我整理 UBC 交换项目申请',
    body: '学生上传项目通知或粘贴链接，补充专业、年级、语言成绩和目标时间。',
  },
  {
    label: '检索校本规则',
    title: '匹配培养方案与国际处要求',
    body: '系统读取校本知识库，提取申请条件、院系审批、学分认定和材料模板。',
  },
  {
    label: '生成结构化结果',
    title: '输出时间线、材料清单与邮件草稿',
    body: 'AI 把碎片信息整理成可编辑的 Markdown、表格和待办节点。',
  },
  {
    label: '人工复核',
    title: '保留老师或学生最终确认',
    body: '高风险信息标记来源和置信度，正式提交前由用户编辑、确认和导出。',
  },
]

const campusWorkspaces: Array<{
  key: string
  title: string
  subtitle: string
  desc: string
  icon: IconComponent
  accent: 'mint' | 'blue' | 'violet' | 'amber' | 'coral'
  modules: Array<{ title: string; desc: string; detail: string }>
  run: string[]
  artifact: string
  metrics: string[]
}> = [
  {
    key: 'international',
    title: '助国际',
    subtitle: '交换申请、派出支持、返校沉淀',
    desc: '来自 edu-ai 的国际交流模块，覆盖项目中心、智能匹配、流程推进、双语沟通、行前行后支持。',
    icon: School,
    accent: 'blue',
    modules: [
      { title: '交换与访学项目中心', desc: '项目搜索、预览、比较托盘和流程联动。', detail: '项目目录 · 比较托盘 · 流程联动' },
      { title: '智能项目匹配与申请决策', desc: '画像录入、推荐结果、比较矩阵和决策说明。', detail: 'GPA · 语言 · 预算 · 风险偏好' },
      { title: '申请流程助手', desc: '阶段地图、任务清单、里程碑和风险提醒。', detail: '阶段地图 · 里程碑 · 补件提醒' },
      { title: '多语言沟通与邮件助手', desc: '双语草稿、模板抽屉、发送前检查和沟通对话。', detail: '导师联系 · 住宿沟通 · 签证说明' },
      { title: '回国与成果沉淀', desc: '学分认定、报销、归档、经验反思和结案。', detail: '学分认定 · 归档摘要 · FAQ 回流' },
    ],
    run: ['读取项目通知与校内规则', '匹配学生画像和项目门槛', '生成申请时间线和材料清单', '输出双语邮件并标记复核点'],
    artifact: 'UBC 交换申请计划 · 材料清单 · 导师沟通邮件 · 学分认定风险说明',
    metrics: ['9 个子模块', '4 类跨境材料', '全周期支持'],
  },
  {
    key: 'teaching',
    title: '助教',
    subtitle: '课程建设、试卷设计、作业反馈',
    desc: '面向教师的教学辅助模块，把大纲、题目、rubric 和反馈草稿组织成可复用教学流程。',
    icon: GraduationCap,
    accent: 'mint',
    modules: [
      { title: '大纲生成', desc: '匹配教学目标、学时结构和考核方式。', detail: '教学目标 · 学时结构 · 内容编排' },
      { title: '试卷设计', desc: '组织题型结构、题目池和预览导出。', detail: '题型结构 · 难度分配 · 预览导出' },
      { title: '作业批改与反馈', desc: '批改任务、rubric、反馈草稿和学生订正状态。', detail: '评分标准 · 反馈草稿 · 订正状态' },
    ],
    run: ['读取课程目标和教学周历', '生成章节目标与课堂活动', '构造题型比例和评分标准', '沉淀作业反馈模板'],
    artifact: '课程大纲 · 单元教案 · 试卷结构 · Rubric 反馈草稿',
    metrics: ['3 个教学工具', '覆盖课前课中课后', '支持模板复用'],
  },
  {
    key: 'management',
    title: '助管',
    subtitle: '事务推进、通知公告、数据看板',
    desc: '面向辅导员和行政人员，把事务流程、材料表单、学生问答和节点提醒放到一张工作台。',
    icon: Building2,
    accent: 'amber',
    modules: [
      { title: '事务处理助手', desc: '审批流程、材料清单和办理步骤自动整理。', detail: '流程图示 · 材料清单 · 联系方式' },
      { title: '通知与公告生成', desc: '结构化输入、多渠道生成和继续对话润色。', detail: '结构化输入 · 多渠道生成 · 历史存档' },
      { title: '材料与表单管理', desc: '统一管理提交材料、状态追踪和模板归档。', detail: '材料提交 · 状态追踪 · 批量导出' },
      { title: '学生问答助手', desc: '高频问题回复、知识沉淀和答疑入口。', detail: '高频问题 · 智能回复 · 知识沉淀' },
      { title: '时间节点管理', desc: 'DDL、面试与补件提醒统一编排。', detail: 'DDL 提醒 · 面试安排 · 补件通知' },
    ],
    run: ['识别办理事项和涉及角色', '生成通知、公示和 FAQ 草稿', '拆解材料清单和提醒节点', '汇总完成率与异常状态'],
    artifact: '奖学金申报通知 · 办理流程图 · 材料清单 · 进度看板',
    metrics: ['6 个管理模块', '多渠道公告', '节点闭环'],
  },
  {
    key: 'research',
    title: '助研',
    subtitle: '文献检索、论文精读、写作推进',
    desc: '面向科研任务，串联检索式、筛选记录、证据卡、章节树和投稿前检查。',
    icon: BrainCircuit,
    accent: 'violet',
    modules: [
      { title: '文献检索', desc: '检索式、筛选记录、主题聚类和论文移交。', detail: '查询构造 · 筛选记录 · 主题聚类' },
      { title: '论文精读', desc: '论文队列、结构化阅读卡、证据摘录和写作移交。', detail: '结构化阅读 · 证据卡 · 对比队列' },
      { title: '论文写作', desc: '章节树、正文草稿、模板插入、引用与里程碑。', detail: '章节树 · 引文组织 · 终检导出' },
    ],
    run: ['围绕研究问题构造检索式', '筛选论文并生成主题簇', '抽取方法、实验和局限证据', '回填到论文草稿章节树'],
    artifact: '文献筛选表 · 结构化阅读卡 · 证据矩阵 · 摘要草稿',
    metrics: ['3 个科研工具', '证据可追溯', '写作链路联动'],
  },
  {
    key: 'study',
    title: '助学',
    subtitle: '资源包、进度雷达、生涯规划',
    desc: '面向学生成长，把学院资源、培养方案、学分进度和职业目标拆成阶段性行动。',
    icon: Users,
    accent: 'coral',
    modules: [
      { title: '学科资源包', desc: '从学院、学科门类和招生专业类三条入口组织资源。', detail: '学院入口 · 学科地图 · 专业详情' },
      { title: '学业进度雷达', desc: '围绕培养方案匹配、学分完成情况、风险课程和毕业偏离做持续诊断。', detail: '培养方案 · 学分进度 · 风险课程' },
      { title: '智能生涯规划', desc: '通过对话梳理目标画像、大学阶段成长路径和关键节点。', detail: '目标画像 · 路径拆解 · 节点提醒' },
    ],
    run: ['读取培养方案和已修课程', '识别学分缺口与风险课程', '匹配学院资源和成长路径', '生成下一阶段行动计划'],
    artifact: '学业雷达 · 课程风险提示 · 资源推荐 · 生涯行动表',
    metrics: ['3 个学生入口', '阶段性复盘', '成长路径拆解'],
  },
]

const orchestrationRuns: Array<{
  title: string
  request: string
  owner: string
  badge: string
  icon: IconComponent
  sources: string[]
  agents: Array<{ title: string; desc: string; icon: IconComponent }>
  outputs: Array<{ title: string; value: string }>
  audit: string[]
  steps: Array<{ title: string; desc: string; channel: string; icon: IconComponent }>
}> = [
  {
    title: '国际交换申请',
    request: '帮 2026 春季 UBC 交换候选人生成申请计划，并标记需要老师确认的风险。',
    owner: '学生 + 国际处老师',
    badge: '助国际',
    icon: School,
    sources: ['国际处项目通知', '培养方案', '学分认定规则', '邮件模板'],
    agents: [
      { title: '资料读取智能体', desc: '提取时间、资格、材料和原文来源。', icon: DatabaseZap },
      { title: '规划智能体', desc: '拆解申请动作、负责人和提醒节点。', icon: Workflow },
      { title: '双语写作智能体', desc: '生成导师联系邮件和申请说明。', icon: FileText },
      { title: '复核智能体', desc: '标记学分、资格、DDL 等高风险点。', icon: ShieldCheck },
    ],
    outputs: [
      { title: '时间线', value: 'T-30 收集材料，T-14 院系审批，T-3 国际处提交' },
      { title: '材料清单', value: '成绩单、语言证明、学习计划、推荐信、护照页' },
      { title: '复核点', value: '学分认定、推荐信周期、语言成绩有效期' },
    ],
    audit: ['引用 8 条校本规则', '2 个节点需要人工确认', '导出 Markdown + 邮件草稿'],
    steps: [
      { title: '解析通知', desc: '从项目通知中提取截止时间、项目门槛和申请材料。', channel: 'Knowledge', icon: DatabaseZap },
      { title: '匹配画像', desc: '结合年级、GPA、语言成绩和专业要求判断匹配度。', channel: 'Reasoning', icon: BrainCircuit },
      { title: '编排行动', desc: '生成周计划、补件提醒、负责人和老师确认节点。', channel: 'Workflow', icon: Workflow },
      { title: '输出草稿', desc: '整理成时间线、材料清单、双语邮件和风险摘要。', channel: 'Artifact', icon: FileText },
      { title: '人工复核', desc: '高风险结论保留来源、置信度和编辑入口。', channel: 'Review', icon: ShieldCheck },
    ],
  },
  {
    title: '课程考试生成',
    request: '基于人工智能导论第 6-8 周内容，生成一次 90 分钟闭卷考试方案。',
    owner: '任课教师',
    badge: '助教',
    icon: GraduationCap,
    sources: ['课程大纲', '章节课件', '往年题型', '评分 Rubric'],
    agents: [
      { title: '教学目标智能体', desc: '对齐知识点、能力目标和考核方式。', icon: BookOpen },
      { title: '试题结构智能体', desc: '控制题型比例、难度分布和覆盖范围。', icon: ClipboardList },
      { title: '评分智能体', desc: '生成参考答案、评分点和反馈模板。', icon: Check },
      { title: '质量检查智能体', desc: '检查重复题、超纲点和表达歧义。', icon: ShieldCheck },
    ],
    outputs: [
      { title: '试卷结构', value: '选择 20%，简答 30%，综合分析 50%' },
      { title: '难度分布', value: '基础 40%，应用 40%，拓展 20%' },
      { title: '质检结论', value: '2 道题建议降低术语密度，1 处需要补充评分点' },
    ],
    audit: ['覆盖 14 个知识点', '生成 3 版题目池', '保留教师最终编辑'],
    steps: [
      { title: '读取课程目标', desc: '识别章节目标、教学活动和知识点边界。', channel: 'Syllabus', icon: BookOpen },
      { title: '生成题型蓝图', desc: '按考试时长和考核目标分配题型与分值。', channel: 'Blueprint', icon: ClipboardList },
      { title: '创建题目池', desc: '生成可替换题目，并对齐知识点和难度。', channel: 'Generation', icon: Sparkles },
      { title: '生成评分标准', desc: '输出参考答案、得分点和常见误区反馈。', channel: 'Rubric', icon: Check },
      { title: '教师确认', desc: '标记超纲风险、重复题和人工编辑建议。', channel: 'Review', icon: ShieldCheck },
    ],
  },
  {
    title: '奖学金通知与进度',
    request: '把学院奖学金申报安排拆成通知、公示材料清单和学生问答。',
    owner: '辅导员 + 学院办公室',
    badge: '助管',
    icon: Building2,
    sources: ['学院通知模板', '奖学金评审办法', '学生 FAQ', '历史公示材料'],
    agents: [
      { title: '流程梳理智能体', desc: '拆解申报、初审、公示和复议节点。', icon: Workflow },
      { title: '公告生成智能体', desc: '生成官网、群公告和邮件版本。', icon: FileText },
      { title: '问答智能体', desc: '沉淀资格、材料、时间和联系方式 FAQ。', icon: Users },
      { title: '看板智能体', desc: '汇总提交状态、缺件和待处理提醒。', icon: LineChart },
    ],
    outputs: [
      { title: '通知版本', value: '官网公告、班群短通知、邮件长说明' },
      { title: '办理节点', value: '申报、资格初审、材料补正、结果公示、异议处理' },
      { title: '看板字段', value: '提交状态、缺件类型、处理人、下一次提醒' },
    ],
    audit: ['生成 16 条 FAQ', '5 类材料被标准化', '补件提醒保留人工发送'],
    steps: [
      { title: '拆解政策', desc: '从评审办法中提取资格条件、材料和时间节点。', channel: 'Policy', icon: BookOpen },
      { title: '生成公告', desc: '按官网、邮件、班群生成不同长度和语气版本。', channel: 'Writing', icon: FileText },
      { title: '沉淀问答', desc: '把高频问题转成学生可检索 FAQ。', channel: 'FAQ', icon: Users },
      { title: '配置节点', desc: '生成 DDL、补件提醒和负责人清单。', channel: 'Timeline', icon: ClipboardList },
      { title: '汇总看板', desc: '输出完成率、缺件分布和异常状态。', channel: 'Dashboard', icon: LineChart },
    ],
  },
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

const pageDemos: Record<string, PageDemo> = {
  product: {
    label: 'Product Console',
    headline: '多智能体校园工作台',
    tone: 'product',
    signals: ['校本知识库', '智能体编排', '结构化输出'],
    lanes: [
      { title: '接入任务', detail: '自然语言、文件、模板入口', icon: TerminalSquare },
      { title: '检索校本资料', detail: '制度、课程、案例和 FAQ', icon: DatabaseZap },
      { title: '组织智能体', detail: '检索、生成、校验、导出', icon: Workflow },
      { title: '交付成果', detail: '清单、邮件、文档、表格', icon: FileText },
    ],
    metrics: [
      { value: '5', label: '工作台模块' },
      { value: '4', label: '处理节点' },
      { value: 'N', label: '模板扩展' },
    ],
    proof: {
      eyebrow: 'Product Proof',
      title: '把一次校园任务压缩成可复用的四步工作流',
      summary: '从任务入口、校本资料、智能体节点到导出结果，页面直接展示产品如何跑起来。',
      checks: ['输入可追踪', '资料可引用', '结果可编辑'],
      outputs: [
        { title: '任务入口', detail: '聊天、文件、模板、场景按钮进入同一工作台。', icon: TerminalSquare },
        { title: '资料底座', detail: '制度、课程材料、FAQ 和历史案例统一检索。', icon: DatabaseZap },
        { title: '结果交付', detail: '输出清单、邮件、Markdown、表格和复核提示。', icon: FileText },
      ],
    },
  },
  scenarios: {
    label: 'Scenario Map',
    headline: '高频校园任务演示台',
    tone: 'scenarios',
    signals: ['教师', '学生', '学工', '行政'],
    lanes: [
      { title: '选择角色', detail: '匹配真实校园入口', icon: Users },
      { title: '挑选任务', detail: '通知、课程、事务、科研', icon: ClipboardList },
      { title: '生成草稿', detail: '按场景输出不同形态', icon: WandSparkles },
      { title: '复用模板', detail: '沉淀为下一次流程', icon: Layers3 },
    ],
    metrics: [
      { value: '6+', label: '核心场景' },
      { value: '4', label: '角色入口' },
      { value: '低风险', label: '试点原则' },
    ],
    proof: {
      eyebrow: 'Scenario Proof',
      title: '每个场景先回答谁在用、做什么、交付什么',
      summary: '页面把教师、学生、学工、行政入口串成一张任务图，避免只列功能名。',
      checks: ['角色清晰', '任务高频', '交付轻量'],
      outputs: [
        { title: '教师入口', detail: '课程、题目、反馈和科研材料快速生成。', icon: GraduationCap },
        { title: '学生入口', detail: '学习计划、竞赛、就业和国际交流辅助。', icon: Users },
        { title: '管理入口', detail: '通知、材料、问答和节点提醒形成闭环。', icon: Building2 },
      ],
    },
  },
  education: {
    label: 'Delivery Lab',
    headline: '教育版交付指挥台',
    tone: 'education',
    signals: ['私有化部署', '知识库初始化', '培训运营'],
    lanes: [
      { title: '确认试点边界', detail: '部门、场景、数据级别', icon: Building2 },
      { title: '部署基础服务', detail: '域名、网关、存储、模型', icon: Server },
      { title: '初始化知识库', detail: '制度、模板、FAQ、案例', icon: BookOpen },
      { title: '运营复盘', detail: '使用数据和模板迭代', icon: LineChart },
    ],
    metrics: [
      { value: '4', label: '交付包' },
      { value: '私有化', label: '部署模式' },
      { value: '可复盘', label: '运营目标' },
    ],
    proof: {
      eyebrow: 'Delivery Proof',
      title: '教育版按试点、部署、知识库、运营四件事交付',
      summary: '把“学校定制”拆成可报价、可验收、可复盘的实施动作。',
      checks: ['试点范围', '部署边界', '运营复盘'],
      outputs: [
        { title: '试点咨询', detail: '确认部门、场景、低敏数据和成效指标。', icon: Building2 },
        { title: '私有化部署', detail: '域名、网关、存储、模型和权限配置。', icon: Server },
        { title: '知识运营', detail: '制度、模板、FAQ、案例持续迭代。', icon: LineChart },
      ],
    },
  },
  security: {
    label: 'Trust Center',
    headline: '安全边界与审计视图',
    tone: 'security',
    signals: ['权限', '日志', '模型网关'],
    lanes: [
      { title: '数据分级', detail: '云端、团队、私有化边界', icon: LockKeyhole },
      { title: '角色授权', detail: '教师、学生、管理员隔离', icon: UserCheck },
      { title: '调用审计', detail: '知识、模型、导出可追踪', icon: Network },
      { title: '人工确认', detail: '高风险结论不自动生效', icon: ShieldCheck },
    ],
    metrics: [
      { value: '4', label: '安全层' },
      { value: '审计', label: '默认留痕' },
      { value: '可替换', label: '模型接入' },
    ],
    proof: {
      eyebrow: 'Trust Proof',
      title: '安全页必须把边界讲细，而不是只写安全承诺',
      summary: '从数据分级、角色权限、模型网关到人工确认，形成试点前可解释的安全叙事。',
      checks: ['权限隔离', '日志审计', '人工确认'],
      outputs: [
        { title: '数据边界', detail: '云端体验、团队空间、私有化环境分别说明。', icon: LockKeyhole },
        { title: '调用审计', detail: '知识库更新、模型调用、导出动作保留记录。', icon: Network },
        { title: '复核机制', detail: '高风险结论只做建议，不自动进入正式流程。', icon: ShieldCheck },
      ],
    },
  },
  pricing: {
    label: 'Business Model',
    headline: '三层版本商业化路径',
    tone: 'pricing',
    signals: ['Community', 'Cloud', 'Education'],
    lanes: [
      { title: '开源共建', detail: '建立可信开发者入口', icon: Github },
      { title: '云端试用', detail: '承接演示和轻量订阅', icon: Cloud },
      { title: '校园交付', detail: '私有化与模板服务包', icon: School },
      { title: '持续运营', detail: '场景模板和复盘服务', icon: LineChart },
    ],
    metrics: [
      { value: '3', label: '版本路线' },
      { value: '订阅', label: '云端收入' },
      { value: '服务', label: '教育版收入' },
    ],
    proof: {
      eyebrow: 'Business Proof',
      title: '三层版本对应三种真实增长路径',
      summary: 'Community 建信任，Cloud 承接试用和订阅，Education 形成交付收入。',
      checks: ['开源入口', '云端订阅', '校园交付'],
      outputs: [
        { title: 'Community', detail: '开发者和学生团队自部署、反馈、共建模板。', icon: Github },
        { title: 'Cloud', detail: '在线体验、团队空间、模板市场和轻量订阅。', icon: Cloud },
        { title: 'Education', detail: '私有化部署、校本知识库和运营复盘服务。', icon: School },
      ],
    },
  },
  community: {
    label: 'Community Build',
    headline: '开源自部署体验路径',
    tone: 'community',
    signals: ['GitHub', 'Docs', '自部署'],
    lanes: [
      { title: '拉取仓库', detail: '前端、后端、文档协同', icon: Github },
      { title: '配置模型', detail: '本地或第三方模型网关', icon: Sparkles },
      { title: '导入模板', detail: '校园样例和知识片段', icon: BookOpen },
      { title: '反馈共建', detail: 'Issue、PR、模板贡献', icon: Boxes },
    ],
    metrics: [
      { value: '免费', label: '自部署' },
      { value: '开源', label: '共建方式' },
      { value: '文档', label: '启动入口' },
    ],
    proof: {
      eyebrow: 'Community Proof',
      title: '社区版要让开发者知道怎么跑、怎么改、怎么贡献',
      summary: '页面把仓库、模型、模板、反馈四个动作压成可执行路径。',
      checks: ['可启动', '可配置', '可贡献'],
      outputs: [
        { title: '拉起项目', detail: '前端、后端、文档按仓库说明完成启动。', icon: Github },
        { title: '配置模型', detail: '本地模型或第三方模型网关都可接入。', icon: Sparkles },
        { title: '共建模板', detail: '场景模板、Issue 和 PR 形成社区反馈。', icon: Boxes },
      ],
    },
  },
  cloud: {
    label: 'Cloud Trial',
    headline: '在线试用与团队空间',
    tone: 'cloud',
    signals: ['托管应用', '团队空间', '模板市场'],
    lanes: [
      { title: '注册进入', detail: '快速体验核心工作流', icon: Cloud },
      { title: '创建空间', detail: '团队模板和成员协作', icon: Users },
      { title: '运行样例', detail: '课程、事务、国际交流', icon: Sparkles },
      { title: '导出演示', detail: '比赛和试点材料沉淀', icon: FileText },
    ],
    metrics: [
      { value: '托管', label: '无需运维' },
      { value: '协作', label: '团队空间' },
      { value: '演示', label: '快速闭环' },
    ],
    proof: {
      eyebrow: 'Cloud Proof',
      title: '云端页面强调最快体验和团队协作闭环',
      summary: '从注册、空间、样例任务到导出演示，形成比赛和试点前的低摩擦入口。',
      checks: ['快速进入', '团队协作', '结果导出'],
      outputs: [
        { title: '进入空间', detail: '无需运维，直接进入托管应用试用。', icon: Cloud },
        { title: '运行样例', detail: '助教、助管、助国际等流程可快速演示。', icon: Sparkles },
        { title: '沉淀结果', detail: '输出材料可导出、复用、带入后续试点。', icon: FileText },
      ],
    },
  },
}

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="app">
      <AmbientBackground />
      <ScrollProgress />
      <Header />
      <div className="route-stage" key={location.pathname}>
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
      </div>
      <Footer />
      <FloatingControls />
    </div>
  )
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setProgress(maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ width: `${progress}%` }} />
    </div>
  )
}

function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-background__wash" />
      <div className="ambient-background__ribbons">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

function FloatingControls() {
  const [atTop, setAtTop] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setAtTop(window.scrollY < 80)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const className = ['float-controls', atTop ? 'is-top-hidden' : '', open ? 'is-open' : ''].filter(Boolean).join(' ')

  return (
    <div className={className} aria-label="快捷控制">
      <div className="float-controls__options">
        <a className="float-controls__button float-controls__option" href={docsUrl} title="Docs" aria-label="打开 Docs">
          <BookOpen size={18} />
        </a>
        <a className="float-controls__button float-controls__option" href={cloudUrl} title="Cloud" aria-label="打开 Cloud">
          <Cloud size={18} />
        </a>
      </div>
      <div className="float-controls__cluster">
        <button
          className="float-controls__button float-controls__settings"
          type="button"
          title="快捷入口"
          aria-label="展开快捷入口"
          onClick={() => setOpen((value) => !value)}
        >
          <Settings2 size={18} />
        </button>
        <button
          className="float-controls__button float-controls__top"
          type="button"
          title="回到顶部"
          aria-label="回到顶部"
          onClick={scrollToTop}
        >
          <ArrowUp size={18} />
        </button>
      </div>
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
        {navItems.map((item) => {
          const NavIcon = item.icon
          return item.external ? (
            <a key={item.label} href={item.href}>
              <NavIcon size={15} />
              {item.label}
            </a>
          ) : (
            <NavLink key={item.label} to={item.href}>
              <NavIcon size={15} />
              {item.label}
            </NavLink>
          )
        })}
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
      <HomeSectionNav />
      <section className="hero" id="home-hero">
        <HeroDataflow />
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
              <BookOpen size={18} />
              阅读文档
            </a>
          </div>
          <div className="trust-row">
            <span>
              <Check size={14} />
              定位清晰
            </span>
            <span>
              <ShieldCheck size={14} />
              不替换校内系统
            </span>
            <span>
              <Workflow size={14} />
              聚焦 AI 辅助与工作流生成
            </span>
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

      <HomeFlowStrip />

      <DemoShowcaseSection />

      <CampusWorkbenchDemo />

      <AgentOrchestrationLab />

      <SectionHeader
        id="home-platform"
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

      <InternationalFlowSection />

      <CapabilityMatrixSection />

      <ArchitectureSection />

      <section className="split-section">
        <div>
          <p className="eyebrow">
            <ClipboardList size={15} />
            Use Cases
          </p>
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

      <EditionCards id="home-editions" />

      <ComparisonSection />

      <section className="deployment-section">
        <div className="deployment-copy">
          <p className="eyebrow">
            <Server size={15} />
            Private Deployment
          </p>
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

function HeroDataflow() {
  return (
    <div className="hero-dataflow" aria-hidden="true">
      <div className="hero-dataflow__scan">
        {['input', 'retrieval', 'agent', 'review', 'export'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="hero-dataflow__matrix" />
      <div className="hero-dataflow__status">
        <span>knowledge sync</span>
        <span>agent run</span>
        <span>human review</span>
      </div>
    </div>
  )
}

function HomeFlowStrip() {
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="home-flow-strip" aria-label="首页阅读路径">
      <div className="home-flow-strip__rail" aria-hidden="true" />
      <div className="home-flow-strip__copy">
        <span>Flow Path</span>
        <strong>从定位、演示到版本路线，一屏一层推进</strong>
      </div>
      <div className="home-flow-strip__actions">
        {homeAnchors.map((anchor, index) => (
          <button key={anchor.id} type="button" onClick={() => scrollToSection(anchor.id)}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <anchor.icon size={15} />
            {anchor.label}
          </button>
        ))}
      </div>
    </section>
  )
}

function HomeSectionNav() {
  const [activeId, setActiveId] = useState(homeAnchors[0].id)

  useEffect(() => {
    function onScroll() {
      let current = homeAnchors[0].id

      for (const anchor of homeAnchors) {
        const element = document.getElementById(anchor.id)

        if (element && element.getBoundingClientRect().top <= 128) {
          current = anchor.id
        }
      }

      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="home-section-nav" aria-label="首页章节导航">
      {homeAnchors.map((anchor, index) => (
        <button
          aria-current={anchor.id === activeId ? 'true' : undefined}
          className={anchor.id === activeId ? 'active' : ''}
          key={anchor.id}
          type="button"
          onClick={() => scrollToSection(anchor.id)}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          <anchor.icon size={14} />
          {anchor.label}
        </button>
      ))}
    </nav>
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
        <em>Live Run</em>
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
          <div className="console-status-row" aria-hidden="true">
            <span>知识库同步</span>
            <span>智能体运行</span>
            <span>人工复核</span>
          </div>
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
          <div className="console-live-feed">
            {[
              ['09:42', '国际交流项目匹配完成', '已引用 6 份校本材料'],
              ['09:45', '课程大纲草稿生成', '等待教师复核'],
              ['09:48', '通知公告结构校验', '可导出 Markdown'],
            ].map(([time, title, detail]) => (
              <article key={title}>
                <span>{time}</span>
                <div>
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </div>
              </article>
            ))}
          </div>
          <div className="console-output-strip" aria-hidden="true">
            <span>Audit OK</span>
            <span>3 outputs</span>
            <span>Human review</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AgentOrchestrationLab() {
  const [activeRunIndex, setActiveRunIndex] = useState(0)
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const run = orchestrationRuns[activeRunIndex]
  const step = run.steps[activeStepIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStepIndex((index) => {
        const next = index + 1

        if (next < orchestrationRuns[activeRunIndex].steps.length) {
          return next
        }

        setActiveRunIndex((runIndex) => (runIndex + 1) % orchestrationRuns.length)
        return 0
      })
    }, 2200)

    return () => window.clearInterval(timer)
  }, [activeRunIndex])

  function selectRun(index: number) {
    setActiveRunIndex(index)
    setActiveStepIndex(0)
  }

  return (
    <section className="orchestration-section" id="home-agents">
      <div className="orchestration-copy">
        <p className="eyebrow">Agent Orchestration</p>
        <h2>把一次校园任务拆成可追踪的多智能体运行过程</h2>
        <p>
          复杂动态演示的重点不是动效本身，而是让用户看懂：QeEdu 如何读取知识、调度智能体、
          生成结果，并把高风险结论留给人工复核。
        </p>
      </div>

      <div className="orchestration-lab" aria-label="QeEdu 智能体编排实验室">
        <div className="run-selector" aria-label="选择演示任务">
          {orchestrationRuns.map((item, index) => (
            <button
              className={index === activeRunIndex ? 'active' : ''}
              key={item.title}
              type="button"
              onClick={() => selectRun(index)}
            >
              <item.icon size={19} />
              <span>
                <strong>{item.title}</strong>
                <small>{item.owner}</small>
              </span>
            </button>
          ))}
        </div>

        <div className="run-stage">
          <div className="run-prompt">
            <span>{run.badge}</span>
            <h3>{run.request}</h3>
            <p>{run.owner}</p>
          </div>

          <div className="agent-network">
            <div className="source-cluster">
              <strong>Knowledge Sources</strong>
              {run.sources.map((source) => (
                <span key={source}>{source}</span>
              ))}
            </div>
            <div className="agent-lane">
              {run.agents.map((agent, index) => (
                <article className={index <= activeStepIndex ? 'active' : ''} key={agent.title}>
                  <agent.icon size={20} />
                  <h4>{agent.title}</h4>
                  <p>{agent.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="step-sequencer" aria-label="运行步骤">
            {run.steps.map((item, index) => (
              <button
                className={index === activeStepIndex ? 'active' : index < activeStepIndex ? 'complete' : ''}
                key={item.title}
                type="button"
                onClick={() => setActiveStepIndex(index)}
              >
                <span>{index + 1}</span>
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <aside className="run-output-panel">
          <div className="run-output-header">
            <step.icon size={19} />
            <span>{step.channel}</span>
          </div>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
          <div className="output-grid">
            {run.outputs.map((output) => (
              <article key={output.title}>
                <strong>{output.title}</strong>
                <span>{output.value}</span>
              </article>
            ))}
          </div>
          <div className="audit-log">
            <strong>Audit Log</strong>
            {run.audit.map((item) => (
              <span key={item}>
                <Check size={14} />
                {item}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

function CampusWorkbenchDemo() {
  const [activeWorkspaceIndex, setActiveWorkspaceIndex] = useState(0)
  const [activeModuleIndex, setActiveModuleIndex] = useState(0)
  const workspace = campusWorkspaces[activeWorkspaceIndex]
  const activeModule = workspace.modules[activeModuleIndex]
  const runProgress = Math.min(activeModuleIndex, workspace.run.length - 1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveModuleIndex((index) => {
        const next = index + 1

        if (next < campusWorkspaces[activeWorkspaceIndex].modules.length) {
          return next
        }

        setActiveWorkspaceIndex((workspaceIndex) => (workspaceIndex + 1) % campusWorkspaces.length)
        return 0
      })
    }, 2400)

    return () => window.clearInterval(timer)
  }, [activeWorkspaceIndex])

  function selectWorkspace(index: number) {
    setActiveWorkspaceIndex(index)
    setActiveModuleIndex(0)
  }

  function selectModule(index: number) {
    setActiveModuleIndex(index)
  }

  return (
    <section className="workbench-section" id="home-workbench">
      <div className="workbench-copy">
        <p className="eyebrow">Product Workbench</p>
        <h2>直接把 edu-ai 的真实模块变成可演示的校园智能体工作台</h2>
        <p>
          首页不再只讲概念，而是用助国际、助教、助管、助研、助学五条产品线展示：
          一个角色入口如何调用多个模块，最后生成可复核的校园交付物。
        </p>
      </div>

      <div className={`workbench-shell accent-${workspace.accent}`} aria-label="QeEdu 校园智能体工作台演示">
        <aside className="workbench-nav" aria-label="选择产品线">
          {campusWorkspaces.map((item, index) => (
            <button
              className={index === activeWorkspaceIndex ? 'active' : ''}
              key={item.key}
              type="button"
              onClick={() => selectWorkspace(index)}
            >
              <item.icon size={19} />
              <span>
                <strong>{item.title}</strong>
                <small>{item.subtitle}</small>
              </span>
            </button>
          ))}
        </aside>

        <div className="workbench-main">
          <div className="workbench-toolbar">
            <span className="live-dot" />
            <strong>{workspace.title}</strong>
            <span>{workspace.desc}</span>
          </div>
          <div className="workbench-canvas">
            <div className="module-stack" aria-label={`${workspace.title} 模块列表`}>
              {workspace.modules.map((module, index) => (
                <button
                  className={index === activeModuleIndex ? 'module-card current' : 'module-card'}
                  key={module.title}
                  type="button"
                  onClick={() => selectModule(index)}
                >
                  <span className="module-index">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{module.title}</strong>
                  <small>{module.desc}</small>
                </button>
              ))}
            </div>

            <div className="agent-run-panel">
              <div className="agent-run-header">
                <Sparkles size={18} />
                <span>Agent Run</span>
                <strong>{activeModule.detail}</strong>
              </div>
              <div className="agent-run-body" key={`${workspace.key}-${activeModule.title}`}>
                {workspace.run.map((item, index) => (
                  <div className={index <= runProgress ? 'is-done' : ''} key={item}>
                    <span>{index + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="artifact-panel">
              <div className="artifact-header">
                <FileText size={18} />
                <span>Output</span>
              </div>
              <h3>{activeModule.title}</h3>
              <p>{activeModule.desc}</p>
              <strong>{workspace.artifact}</strong>
            </div>
          </div>
        </div>

        <aside className="workbench-insights" aria-label="演示指标">
          <div className="insight-ring">
            <span>{activeModuleIndex + 1}</span>
            <small>/ {workspace.modules.length}</small>
          </div>
          <h3>{workspace.title} 正在编排</h3>
          <p>{workspace.subtitle}</p>
          <div>
            {workspace.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

function DemoShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % demoStages.length)
    }, 2600)

    return () => window.clearInterval(timer)
  }, [])

  const active = demoStages[activeIndex]

  return (
    <section className="demo-showcase-section" id="home-demo">
      <div className="demo-copy">
        <p className="eyebrow">Live Demo Narrative</p>
        <h2>首页直接展示 QeEdu 如何把一句需求变成可复核结果</h2>
        <p>
          评委和用户需要看到“AI 到底做了什么”。这个演示链路把输入、检索、生成和复核拆开，
          也自然解释了为什么高校场景需要校本知识库和人工确认。
        </p>
      </div>
      <div className="demo-console" aria-label="QeEdu 演示链路">
        <div className="demo-stage-tabs">
          {demoStages.map((stage, index) => (
            <button
              className={index === activeIndex ? 'active' : ''}
              key={stage.label}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              <span>{index + 1}</span>
              {stage.label}
            </button>
          ))}
        </div>
        <div className="demo-screen">
          <div className="demo-screen-header">
            <span>QeEdu Agent Run</span>
            <strong>{active.label}</strong>
          </div>
          <div className="demo-output" key={active.title}>
            <h3>{active.title}</h3>
            <p>{active.body}</p>
            <div className="demo-progress">
              {demoStages.map((stage, index) => (
                <span className={index <= activeIndex ? 'filled' : ''} key={stage.label} />
              ))}
            </div>
          </div>
          <div className="demo-result-grid">
            <article>
              <strong>时间线</strong>
              <span>校内报名 03/22，院系审批 03/28，国际处提交 04/05</span>
            </article>
            <article>
              <strong>材料清单</strong>
              <span>成绩单、语言证明、推荐信、学习计划、护照页</span>
            </article>
            <article>
              <strong>风险提醒</strong>
              <span>学分认定需提前确认，推荐信至少预留 10 个工作日</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, desc, id }: { eyebrow: string; title: string; desc: string; id?: string }) {
  return (
    <section className="section-header" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{desc}</p>
    </section>
  )
}

function RoleScenarioSection() {
  return (
    <section className="role-section" id="home-roles">
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

function InternationalFlowSection() {
  return (
    <section className="international-flow-section" id="home-flow">
      <div className="flow-copy">
        <p className="eyebrow">Flagship Workflow</p>
        <h2>用助国际打穿一个真实高校流程</h2>
        <p>
          “全场景”不能只靠口号。QeEdu 的首个强展示场景应当是国际交流：它天然跨系统、跨材料、跨语言、跨周期，
          适合证明校本知识库、智能体编排和人工复核的价值。
        </p>
      </div>
      <div className="flow-board" aria-label="助国际流程">
        {internationalFlow.map((item, index) => (
          <article key={item.step}>
            <div className="flow-index">{String(index + 1).padStart(2, '0')}</div>
            <h3>{item.step}</h3>
            <p>{item.detail}</p>
            <span>{item.output}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function CapabilityMatrixSection() {
  return (
    <section className="capability-matrix-section">
      <div className="matrix-copy">
        <p className="eyebrow">Capability Map</p>
        <h2>把“平台能力”拆成评委能看懂的五个部件</h2>
        <p>
          官网展示不只写商业词汇，而是说明每一层如何支撑可交付的校园 AI 辅助服务。
        </p>
      </div>
      <div className="matrix-panel">
        {capabilityMatrix.map(([title, desc]) => (
          <div className="matrix-row" key={title}>
            <strong>{title}</strong>
            <span>{desc}</span>
          </div>
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

function EditionCards({ id = 'editions' }: { id?: string }) {
  return (
    <section className="edition-grid" id={id}>
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
      demo={pageDemos.product}
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
      demo={pageDemos.scenarios}
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
  const demo = edition === 'Community' ? pageDemos.community : pageDemos.cloud
  return (
    <PageShell
      eyebrow="Edition"
      title={`QeEdu ${current.name}`}
      desc={current.desc}
      demo={demo}
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
      demo={pageDemos.education}
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
      demo={pageDemos.security}
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
      demo={pageDemos.pricing}
    >
      <EditionCards />
    </PageShell>
  )
}

function PageShell({
  eyebrow,
  title,
  desc,
  demo,
  children,
}: {
  eyebrow: string
  title: string
  desc: string
  demo: PageDemo
  children: ReactNode
}) {
  return (
    <main className="page-shell">
      <PageBackplane demo={demo} />
      <section className="page-hero">
        <div className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{desc}</p>
          <div className="page-hero__actions">
            <a className="solid-button" href={cloudUrl}>
              <Cloud size={16} />
              进入 Cloud
              <ArrowRight size={16} />
            </a>
            <a className="ghost-button" href={docsUrl}>
              <BookOpen size={16} />
              阅读文档
            </a>
          </div>
        </div>
        <PageHeroVisual demo={demo} />
      </section>
      <PageSignalRail demo={demo} />
      <PageProofSection demo={demo} />
      {children}
      <CallToAction />
    </main>
  )
}

function PageBackplane({ demo }: { demo: PageDemo }) {
  const labels = [demo.label, ...demo.signals, ...demo.metrics.map((metric) => metric.label)].slice(0, 8)

  return (
    <div className={`page-backplane tone-${demo.tone}`} aria-hidden="true">
      <div className="page-backplane__grid" />
      <div className="page-backplane__ribbons">
        {Array.from({ length: 6 }, (_, index) => (
          <span key={`page-backplane-ribbon-${demo.tone}-${index}`} />
        ))}
      </div>
      <div className="page-backplane__chips">
        {labels.map((label, index) => (
          <span key={`${label}-${index}`}>{label}</span>
        ))}
      </div>
    </div>
  )
}

function PageSignalRail({ demo }: { demo: PageDemo }) {
  return (
    <section className={`page-signal-rail tone-${demo.tone}`} aria-label="页面关键信号">
      <div className="page-signal-rail__track" aria-hidden="true" />
      <div className="page-signal-rail__copy">
        <span>{demo.label}</span>
        <strong>{demo.headline}</strong>
      </div>
      <div className="page-signal-rail__items">
        {[...demo.signals, ...demo.proof.checks].slice(0, 6).map((signal, index) => (
          <span key={`${signal}-${index}`}>
            {String(index + 1).padStart(2, '0')}
            <em>{signal}</em>
          </span>
        ))}
      </div>
      <div className="page-signal-rail__metrics">
        {demo.metrics.map((metric) => (
          <span key={metric.label}>
            <strong>{metric.value}</strong>
            {metric.label}
          </span>
        ))}
      </div>
    </section>
  )
}

function PageProofSection({ demo }: { demo: PageDemo }) {
  return (
    <section className={`page-proof tone-${demo.tone}`}>
      <div className="page-proof__copy">
        <p className="eyebrow">{demo.proof.eyebrow}</p>
        <h2>{demo.proof.title}</h2>
        <p>{demo.proof.summary}</p>
        <div className="page-proof__checks">
          {demo.proof.checks.map((check) => (
            <span key={check}>
              <Check size={14} />
              {check}
            </span>
          ))}
        </div>
      </div>
      <div className="page-proof__outputs">
        {demo.proof.outputs.map((output, index) => (
          <article key={output.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <output.icon size={19} />
            <div>
              <h3>{output.title}</h3>
              <p>{output.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PageHeroVisual({ demo }: { demo: PageDemo }) {
  return (
    <div className={`page-hero__visual tone-${demo.tone}`} aria-hidden="true">
      <div className="page-hero__atmosphere">
        <div className="page-hero__grid" />
        <div className="page-hero__rails">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="page-hero__screen">
        <div className="page-hero__topline">
          <span>{demo.label}</span>
          <strong>Live</strong>
        </div>
        <h2>{demo.headline}</h2>
        <div className="page-hero__signals">
          {demo.signals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
        <div className="page-hero__lanes">
          {demo.lanes.map((lane, index) => (
            <article key={lane.title}>
              <div>
                <lane.icon size={16} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <strong>{lane.title}</strong>
              <small>{lane.detail}</small>
            </article>
          ))}
        </div>
        <div className="page-hero__metrics">
          {demo.metrics.map((metric) => (
            <span key={metric.label}>
              <strong>{metric.value}</strong>
              {metric.label}
            </span>
          ))}
        </div>
      </div>
      <div className="page-hero__orbit" />
    </div>
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
