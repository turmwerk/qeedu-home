export type SiteLanguage = 'zh' | 'en'

export const siteLanguages: Array<{ code: SiteLanguage; label: string; name: string; htmlLang: string }> = [
  { code: 'zh', label: 'CN', name: '简体中文', htmlLang: 'zh-CN' },
  { code: 'en', label: 'EN', name: 'English', htmlLang: 'en' },
]

const textOriginals = new WeakMap<Text, string>()
const attributeOriginals = new WeakMap<Element, Map<string, string>>()
const localizableAttributes = ['aria-label', 'title']

export const translations: Record<string, string> = {
  '简体中文': 'Simplified Chinese',
  '快捷控制': 'Quick controls',
  '切换语言': 'Switch language',
  '切换明暗主题': 'Switch color theme',
  '切换浮动按钮明暗背景': 'Switch color theme',
  '快捷入口': 'Quick actions',
  '展开快捷入口': 'Expand quick actions',
  '回到顶部': 'Back to top',
  '主导航': 'Primary navigation',
  'QeEdu 首页': 'QeEdu home',
  '首页': 'Home',
  '产品': 'Product',
  '场景': 'Scenarios',
  '方案': 'Solution',
  '版本': 'Plans',
  '安全': 'Security',
  '文档': 'Docs',
  '演示': 'Demo',
  '工作台': 'Workbench',
  '编排': 'Orchestration',
  '平台': 'Platform',
  '角色': 'Roles',
  '流程': 'Flow',
  '启育 QeEdu': 'QeEdu',
  'AI 原生智能体平台': 'AI-native agent platform',
  '面向高校全角色、全场景的 AI 原生智能体平台': 'An AI-native agent platform for every role and workflow in higher education',
  '体验云端平台': 'Try Cloud',
  '阅读文档': 'Read docs',
  '进入 Cloud': 'Open Cloud',
  '打开 Cloud': 'Open Cloud',
  '查看 Docs': 'View Docs',
  '打开 Docs': 'Open Docs',
  '定位清晰': 'Clear positioning',
  '不替换校内系统': 'Does not replace campus systems',
  '聚焦 AI 辅助与工作流生成': 'Focused on AI assistance and workflow generation',
  '课程材料': 'Course materials',
  '校本知识库': 'Campus knowledge base',
  '私有化部署': 'Private deployment',
  '智能体工作流': 'Agent workflow',
  'QeEdu 产品指标': 'QeEdu product metrics',
  '动态能力': 'Dynamic capabilities',
  '首页阅读路径': 'Home reading path',
  '首页章节导航': 'Home section navigation',
  '从定位、演示到版本路线，一屏一层推进': 'Move from positioning to demo to plans, one section at a time',
  '把高校日常事务变成可复用的 AI 工作流': 'Turn daily campus work into reusable AI workflows',
  '围绕通知、公文、课程、科研、活动、就业等高频场景，让老师和同学用自然语言生成草稿、流程建议和资料整理结果。':
    'For common needs such as notices, official writing, courses, research, events, and career support, teachers and students can generate drafts, workflow suggestions, and organized materials in natural language.',
  '不是替换学校系统，而是成为轻量的智能辅助层': 'Not a replacement for campus systems, but a lightweight intelligence layer',
  'QeEdu 面向愿意尝试 AI 的教师、学生与管理人员，连接知识库、模板和多智能体能力，降低重复事务成本。':
    'QeEdu serves teachers, students, and administrators who want to try AI, connecting knowledge bases, templates, and multi-agent workflows to reduce repetitive work.',
  '社区版开放共建，教育版面向校园部署与定制': 'Community is open for collaboration; Education is built for campus deployment and customization',
  '从开源社区到云服务，再到私有化部署，形成可验证、可扩展、可交付的高校 AI 应用路线。':
    'From open source community to cloud service to private deployment, QeEdu creates a verifiable, scalable, and deliverable path for higher-education AI applications.',
  'QeEdu 产品界面示意': 'QeEdu product interface mockup',
  '智能体': 'Agents',
  '知识库': 'Knowledge base',
  '模板': 'Templates',
  '审计': 'Audit',
  '知识库同步': 'Knowledge sync',
  '智能体运行': 'Agent run',
  '人工复核': 'Human review',
  '校本知识': 'Campus knowledge',
  'AI 生成': 'AI generation',
  '材料导出': 'Material export',
  '今日试点': 'Today pilot',
  '12 个任务模板被调用': '12 task templates used',
  '4 个知识库完成更新': '4 knowledge bases updated',
  '国际交流项目匹配完成': 'International exchange matching completed',
  '已引用 6 份校本材料': '6 campus materials cited',
  '课程大纲草稿生成': 'Course syllabus draft generated',
  '等待教师复核': 'Waiting for teacher review',
  '通知公告结构校验': 'Notice structure checked',
  '可导出 Markdown': 'Markdown export ready',
  '3': '3',
  '版本路线': 'Plan path',
  'Community、Cloud、Education': 'Community, Cloud, Education',
  '6+': '6+',
  '高频场景': 'Frequent scenarios',
  '教学、学工、行政、科研、竞赛、就业': 'Teaching, student affairs, administration, research, competitions, career support',
  '4 层': '4 layers',
  '交付边界': 'Delivery boundaries',
  '知识、智能体、权限、部署': 'Knowledge, agents, permissions, deployment',
  '通知与公文草拟': 'Notice and official-document drafting',
  '课程教案与题目生成': 'Lesson-plan and question generation',
  '学生事务答疑': 'Student-affairs Q&A',
  '活动策划与材料汇总': 'Event planning and material summaries',
  '科研项目申报辅助': 'Research project application support',
  '就业与竞赛指导': 'Career and competition guidance',
  '让 AI 真正进入高校日常任务，而不是停留在聊天窗口': 'Bring AI into daily campus work, not just a chat window',
  'QeEdu 把高校事务拆成知识、模板、角色、流程和交付结果。它不是要求学校换掉 OA、教务或学工系统，而是在这些系统之外提供轻量的 AI 生产力入口。':
    'QeEdu breaks campus work into knowledge, templates, roles, workflows, and deliverables. It does not ask schools to replace OA, academic-affairs, or student-affairs systems; it adds a lightweight AI productivity entry point around them.',
  '智能体编排': 'Agent orchestration',
  '把任务拆解为检索、推理、生成、校对、导出等节点，形成稳定可复用的校园事务流程。':
    'Break tasks into retrieval, reasoning, generation, review, and export steps to form stable reusable campus workflows.',
  '沉淀制度文件、模板、历史案例和课程材料，让生成内容贴近学校语境。':
    'Organize policies, templates, historical cases, and course materials so generated output fits the campus context.',
  '多角色入口': 'Multi-role entry points',
  '教师、学生、辅导员、行政人员可以从不同任务入口进入，而不是被迫学习复杂系统。':
    'Teachers, students, counselors, and administrators can enter through task-specific workflows instead of learning a complex system first.',
  '安全与审计': 'Security and audit',
  '围绕权限、日志、数据隔离和私有化部署设计，适配高校对数据合规的现实要求。':
    'Designed around permissions, logs, data isolation, and private deployment to meet campus compliance needs.',
  '从“能演示”走向“能试点”的校园场景': 'Campus scenarios that move from demo-ready to pilot-ready',
  '商业化前提不是喊全校替换，而是先找到高频、低风险、可验证的辅助任务。QeEdu 适合从学院、实验室、竞赛基地、就业指导中心等小范围试点开始。':
    'The commercial premise is not replacing the whole school, but finding frequent, low-risk, verifiable support tasks first. QeEdu is suited for pilots in colleges, labs, competition centers, and career offices.',
  '私有化部署不是口号，而是明确交付边界': 'Private deployment is a clear delivery boundary, not a slogan',
  '面向高校的数据安全需求，教育版可以部署在学校服务器、私有云或专有云环境中，并按院系流程配置知识库、模型、权限和审计。':
    'For campus data-security needs, the Education edition can run on school servers, private clouds, or dedicated clouds, with knowledge, model, permission, and audit settings aligned to department workflows.',
  '查看安全与合规设计': 'View security and compliance design',
  '梳理试点部门与高频事务': 'Identify pilot departments and frequent tasks',
  '导入制度、模板、问答与案例知识': 'Import policies, templates, Q&A, and case knowledge',
  '配置模型、权限、审计与数据边界': 'Configure models, permissions, audits, and data boundaries',
  '交付智能体模板并开展教师/学生培训': 'Deliver agent templates and train teachers/students',
  '先从可展示、可试用、可解释的 AI 校园助手开始': 'Start with an AI campus assistant that is demonstrable, usable, and explainable',
  '官网负责讲清定位和商业模式，Cloud 负责承载产品体验，Docs 负责支撑部署与二次开发。':
    'The website clarifies positioning and business model, Cloud hosts the product experience, and Docs supports deployment and secondary development.',
  'QeEdu 校园智能体工作台演示': 'QeEdu campus agent workbench demo',
  '选择产品线': 'Select product line',
  '演示指标': 'Demo metrics',
  '直接把 edu-ai 的真实模块变成可演示的校园智能体工作台': 'Turn real edu-ai modules into a demonstrable campus agent workbench',
  '首页不再只讲概念，而是用助国际、助教、助管、助研、助学五条产品线展示： 一个角色入口如何调用多个模块，最后生成可复核的校园交付物。':
    'The home page now shows five product lines, International, Teaching, Management, Research, and Study support, demonstrating how one role entry calls multiple modules and produces reviewable campus deliverables.',
  '助国际': 'International support',
  '交换申请、派出支持、返校沉淀': 'Exchange applications, outbound support, return-to-campus knowledge',
  '来自 edu-ai 的国际交流模块，覆盖项目中心、智能匹配、流程推进、双语沟通、行前行后支持。':
    'The international exchange module from edu-ai covers program centers, smart matching, process support, bilingual communication, and pre/post-trip support.',
  '交换与访学项目中心': 'Exchange and visiting program center',
  '项目搜索、预览、比较托盘和流程联动。': 'Program search, preview, comparison tray, and workflow linkage.',
  '项目目录 · 比较托盘 · 流程联动': 'Program catalog · Comparison tray · Workflow linkage',
  '智能项目匹配与申请决策': 'Smart program matching and application decisions',
  '画像录入、推荐结果、比较矩阵和决策说明。': 'Profile input, recommendations, comparison matrix, and decision notes.',
  'GPA · 语言 · 预算 · 风险偏好': 'GPA · Language · Budget · Risk preference',
  '申请流程助手': 'Application workflow assistant',
  '阶段地图、任务清单、里程碑和风险提醒。': 'Stage map, task list, milestones, and risk reminders.',
  '阶段地图 · 里程碑 · 补件提醒': 'Stage map · Milestones · Supplement reminders',
  '多语言沟通与邮件助手': 'Multilingual communication and email assistant',
  '双语草稿、模板抽屉、发送前检查和沟通对话。': 'Bilingual drafts, template drawer, pre-send checks, and communication dialogue.',
  '导师联系 · 住宿沟通 · 签证说明': 'Advisor contact · Housing communication · Visa notes',
  '回国与成果沉淀': 'Return and outcome archiving',
  '学分认定、报销、归档、经验反思和结案。': 'Credit recognition, reimbursement, archiving, reflection, and closure.',
  '学分认定 · 归档摘要 · FAQ 回流': 'Credit recognition · Archive summary · FAQ feedback',
  '读取项目通知与校内规则': 'Read program notices and campus rules',
  '匹配学生画像和项目门槛': 'Match student profile and program thresholds',
  '生成申请时间线和材料清单': 'Generate application timeline and material list',
  '输出双语邮件并标记复核点': 'Output bilingual email and mark review points',
  'UBC 交换申请计划 · 材料清单 · 导师沟通邮件 · 学分认定风险说明':
    'UBC exchange application plan · Material list · Advisor email · Credit-recognition risk notes',
  '9 个子模块': '9 submodules',
  '4 类跨境材料': '4 types of cross-border materials',
  '全周期支持': 'Full-cycle support',
  '助教': 'Teaching support',
  '课程建设、试卷设计、作业反馈': 'Course design, exam design, assignment feedback',
  '面向教师的教学辅助模块，把大纲、题目、rubric 和反馈草稿组织成可复用教学流程。':
    'A teaching-support module for teachers that organizes syllabi, questions, rubrics, and feedback drafts into reusable workflows.',
  '大纲生成': 'Syllabus generation',
  '匹配教学目标、学时结构和考核方式。': 'Match teaching objectives, class-hour structure, and assessment methods.',
  '教学目标 · 学时结构 · 内容编排': 'Teaching objectives · Class-hour structure · Content arrangement',
  '试卷设计': 'Exam design',
  '组织题型结构、题目池和预览导出。': 'Organize question structure, question bank, preview, and export.',
  '题型结构 · 难度分配 · 预览导出': 'Question structure · Difficulty allocation · Preview export',
  '作业批改与反馈': 'Assignment grading and feedback',
  '批改任务、rubric、反馈草稿和学生订正状态。': 'Grading tasks, rubrics, feedback drafts, and student revision status.',
  '评分标准 · 反馈草稿 · 订正状态': 'Rubric · Feedback draft · Revision status',
  '读取课程目标和教学周历': 'Read course objectives and teaching calendar',
  '生成章节目标与课堂活动': 'Generate unit objectives and class activities',
  '构造题型比例和评分标准': 'Build question ratios and scoring rubric',
  '沉淀作业反馈模板': 'Save assignment feedback templates',
  '课程大纲 · 单元教案 · 试卷结构 · Rubric 反馈草稿': 'Syllabus · Unit lesson plan · Exam structure · Rubric feedback draft',
  '3 个教学工具': '3 teaching tools',
  '覆盖课前课中课后': 'Covers before, during, and after class',
  '支持模板复用': 'Supports template reuse',
  '助管': 'Management support',
  '事务推进、通知公告、数据看板': 'Administrative workflows, notices, data dashboards',
  '面向辅导员和行政人员，把事务流程、材料表单、学生问答和节点提醒放到一张工作台。':
    'For counselors and administrators, this puts workflows, forms, student Q&A, and reminders into one workbench.',
  '事务处理助手': 'Administrative task assistant',
  '审批流程、材料清单和办理步骤自动整理。': 'Automatically organize approval workflows, material lists, and handling steps.',
  '流程图示 · 材料清单 · 联系方式': 'Workflow diagram · Material list · Contacts',
  '通知与公告生成': 'Notice and announcement generation',
  '结构化输入、多渠道生成和继续对话润色。': 'Structured input, multi-channel generation, and conversational polishing.',
  '结构化输入 · 多渠道生成 · 历史存档': 'Structured input · Multi-channel generation · History archive',
  '材料与表单管理': 'Material and form management',
  '统一管理提交材料、状态追踪和模板归档。': 'Manage submitted materials, status tracking, and template archives in one place.',
  '材料提交 · 状态追踪 · 批量导出': 'Material submission · Status tracking · Batch export',
  '学生问答助手': 'Student Q&A assistant',
  '高频问题回复、知识沉淀和答疑入口。': 'Frequent-question replies, knowledge capture, and Q&A entry point.',
  '高频问题 · 智能回复 · 知识沉淀': 'Frequent questions · Smart replies · Knowledge capture',
  '时间节点管理': 'Timeline node management',
  'DDL、面试与补件提醒统一编排。': 'Coordinate DDLs, interviews, and supplement reminders.',
  'DDL 提醒 · 面试安排 · 补件通知': 'DDL reminders · Interview scheduling · Supplement notices',
  '识别办理事项和涉及角色': 'Identify task items and involved roles',
  '生成通知、公示和 FAQ 草稿': 'Generate notice, announcement, and FAQ drafts',
  '拆解材料清单和提醒节点': 'Break down material lists and reminder nodes',
  '汇总完成率与异常状态': 'Summarize completion rates and exception status',
  '奖学金申报通知 · 办理流程图 · 材料清单 · 进度看板': 'Scholarship application notice · Process map · Material list · Progress dashboard',
  '6 个管理模块': '6 management modules',
  '多渠道公告': 'Multi-channel announcements',
  '节点闭环': 'Closed-loop nodes',
  '助研': 'Research support',
  '文献检索、论文精读、写作推进': 'Literature search, paper reading, writing progress',
  '面向科研任务，串联检索式、筛选记录、证据卡、章节树和投稿前检查。':
    'For research work, it links search queries, screening records, evidence cards, section trees, and pre-submission checks.',
  '文献检索': 'Literature search',
  '检索式、筛选记录、主题聚类和论文移交。': 'Search queries, screening records, topic clustering, and paper handoff.',
  '查询构造 · 筛选记录 · 主题聚类': 'Query building · Screening records · Topic clusters',
  '论文精读': 'Deep paper reading',
  '论文队列、结构化阅读卡、证据摘录和写作移交。': 'Paper queue, structured reading cards, evidence excerpts, and writing handoff.',
  '结构化阅读 · 证据卡 · 对比队列': 'Structured reading · Evidence cards · Comparison queue',
  '论文写作': 'Paper writing',
  '章节树、正文草稿、模板插入、引用与里程碑。': 'Section tree, body draft, template insertion, references, and milestones.',
  '章节树 · 引文组织 · 终检导出': 'Section tree · Citation organization · Final-check export',
  '围绕研究问题构造检索式': 'Build search queries around the research question',
  '筛选论文并生成主题簇': 'Screen papers and generate topic clusters',
  '抽取方法、实验和局限证据': 'Extract method, experiment, and limitation evidence',
  '回填到论文草稿章节树': 'Backfill into the paper draft section tree',
  '文献筛选表 · 结构化阅读卡 · 证据矩阵 · 摘要草稿': 'Literature screening table · Structured reading cards · Evidence matrix · Abstract draft',
  '3 个科研工具': '3 research tools',
  '证据可追溯': 'Traceable evidence',
  '写作链路联动': 'Linked writing workflow',
  '助学': 'Study support',
  '资源包、进度雷达、生涯规划': 'Resource packages, progress radar, career planning',
  '面向学生成长，把学院资源、培养方案、学分进度和职业目标拆成阶段性行动。':
    'For student growth, it turns college resources, curriculum plans, credit progress, and career goals into staged actions.',
  '学科资源包': 'Discipline resource package',
  '从学院、学科门类和招生专业类三条入口组织资源。': 'Organize resources through college, discipline, and admission-major entries.',
  '学院入口 · 学科地图 · 专业详情': 'College entry · Discipline map · Major details',
  '学业进度雷达': 'Academic progress radar',
  '围绕培养方案匹配、学分完成情况、风险课程和毕业偏离做持续诊断。':
    'Continuously diagnose curriculum-plan matching, credit completion, risk courses, and graduation drift.',
  '培养方案 · 学分进度 · 风险课程': 'Curriculum plan · Credit progress · Risk courses',
  '智能生涯规划': 'Smart career planning',
  '通过对话梳理目标画像、大学阶段成长路径和关键节点。':
    'Use dialogue to clarify target profile, college-stage growth path, and key milestones.',
  '目标画像 · 路径拆解 · 节点提醒': 'Target profile · Path breakdown · Node reminders',
  '读取培养方案和已修课程': 'Read curriculum plan and completed courses',
  '识别学分缺口与风险课程': 'Identify credit gaps and risk courses',
  '匹配学院资源和成长路径': 'Match college resources and growth paths',
  '生成下一阶段行动计划': 'Generate the next-stage action plan',
  '学业雷达 · 课程风险提示 · 资源推荐 · 生涯行动表': 'Academic radar · Course risk hints · Resource recommendations · Career action plan',
  '3 个学生入口': '3 student entry points',
  '阶段性复盘': 'Stage review',
  '成长路径拆解': 'Growth-path breakdown',
  '正在编排': 'is orchestrating',
  'Agent Run': 'Agent Run',
  'Output': 'Output',
  'QeEdu 智能体编排实验室': 'QeEdu agent orchestration lab',
  '选择演示任务': 'Select demo task',
  '运行步骤': 'Run steps',
  '把一次校园任务拆成可追踪的多智能体运行过程': 'Break one campus task into a traceable multi-agent run',
  '复杂动态演示的重点不是动效本身，而是让用户看懂：QeEdu 如何读取知识、调度智能体、 生成结果，并把高风险结论留给人工复核。':
    'The point of the dynamic demo is not animation itself, but helping users understand how QeEdu reads knowledge, coordinates agents, generates results, and leaves high-risk conclusions for human review.',
  '国际交换申请': 'International exchange application',
  '帮 2026 春季 UBC 交换候选人生成申请计划，并标记需要老师确认的风险。':
    'Generate an application plan for Spring 2026 UBC exchange candidates and flag risks that require teacher confirmation.',
  '学生 + 国际处老师': 'Student + International Office teacher',
  '国际处项目通知': 'International Office program notice',
  '培养方案': 'Curriculum plan',
  '学分认定规则': 'Credit recognition rules',
  '邮件模板': 'Email template',
  '资料读取智能体': 'Material-reading agent',
  '提取时间、资格、材料和原文来源。': 'Extract timelines, eligibility, materials, and source references.',
  '规划智能体': 'Planning agent',
  '拆解申请动作、负责人和提醒节点。': 'Break down application actions, owners, and reminder nodes.',
  '双语写作智能体': 'Bilingual writing agent',
  '生成导师联系邮件和申请说明。': 'Generate advisor-contact emails and application notes.',
  '复核智能体': 'Review agent',
  '标记学分、资格、DDL 等高风险点。': 'Flag high-risk points such as credits, eligibility, and DDLs.',
  '时间线': 'Timeline',
  'T-30 收集材料，T-14 院系审批，T-3 国际处提交': 'T-30 collect materials, T-14 department approval, T-3 submit to International Office',
  '材料清单': 'Material list',
  '成绩单、语言证明、学习计划、推荐信、护照页': 'Transcript, language proof, study plan, recommendation letter, passport page',
  '复核点': 'Review points',
  '学分认定、推荐信周期、语言成绩有效期': 'Credit recognition, recommendation timeline, language-score validity',
  '引用 8 条校本规则': 'Cited 8 campus rules',
  '2 个节点需要人工确认': '2 nodes require human confirmation',
  '导出 Markdown + 邮件草稿': 'Export Markdown + email draft',
  '解析通知': 'Parse notice',
  '从项目通知中提取截止时间、项目门槛和申请材料。': 'Extract deadline, program thresholds, and application materials from the notice.',
  '匹配画像': 'Match profile',
  '结合年级、GPA、语言成绩和专业要求判断匹配度。': 'Judge fit using year, GPA, language score, and major requirements.',
  '编排行动': 'Orchestrate actions',
  '生成周计划、补件提醒、负责人和老师确认节点。': 'Generate weekly plan, supplement reminders, owners, and teacher-confirmation nodes.',
  '输出草稿': 'Output draft',
  '整理成时间线、材料清单、双语邮件和风险摘要。': 'Organize into timeline, material list, bilingual email, and risk summary.',
  '高风险结论保留来源、置信度和编辑入口。': 'Keep source, confidence, and edit entry for high-risk conclusions.',
  '课程考试生成': 'Course exam generation',
  '基于人工智能导论第 6-8 周内容，生成一次 90 分钟闭卷考试方案。':
    'Generate a 90-minute closed-book exam plan based on weeks 6-8 of Introduction to AI.',
  '任课教师': 'Course teacher',
  '课程大纲': 'Course syllabus',
  '章节课件': 'Chapter slides',
  '往年题型': 'Past question types',
  '评分 Rubric': 'Scoring rubric',
  '教学目标智能体': 'Teaching-objective agent',
  '对齐知识点、能力目标和考核方式。': 'Align knowledge points, ability goals, and assessment methods.',
  '试题结构智能体': 'Question-structure agent',
  '控制题型比例、难度分布和覆盖范围。': 'Control question ratios, difficulty distribution, and coverage.',
  '评分智能体': 'Scoring agent',
  '生成参考答案、评分点和反馈模板。': 'Generate reference answers, scoring points, and feedback templates.',
  '质量检查智能体': 'Quality-check agent',
  '检查重复题、超纲点和表达歧义。': 'Check duplicate questions, out-of-scope points, and wording ambiguity.',
  '试卷结构': 'Exam structure',
  '选择 20%，简答 30%，综合分析 50%': 'Multiple choice 20%, short answer 30%, comprehensive analysis 50%',
  '难度分布': 'Difficulty distribution',
  '基础 40%，应用 40%，拓展 20%': 'Basic 40%, applied 40%, advanced 20%',
  '质检结论': 'Quality conclusion',
  '2 道题建议降低术语密度，1 处需要补充评分点': '2 questions should reduce terminology density; 1 item needs added scoring points',
  '覆盖 14 个知识点': 'Covers 14 knowledge points',
  '生成 3 版题目池': 'Generated 3 question-pool versions',
  '保留教师最终编辑': 'Keep final teacher edits',
  '读取课程目标': 'Read course objectives',
  '识别章节目标、教学活动和知识点边界。': 'Identify chapter objectives, teaching activities, and knowledge boundaries.',
  '生成题型蓝图': 'Generate question blueprint',
  '按考试时长和考核目标分配题型与分值。': 'Allocate question types and scores by exam duration and assessment goals.',
  '创建题目池': 'Create question pool',
  '生成可替换题目，并对齐知识点和难度。': 'Generate replaceable questions aligned to knowledge points and difficulty.',
  '生成评分标准': 'Generate scoring rubric',
  '输出参考答案、得分点和常见误区反馈。': 'Output reference answers, scoring points, and common-mistake feedback.',
  '教师确认': 'Teacher confirmation',
  '标记超纲风险、重复题和人工编辑建议。': 'Flag out-of-scope risk, repeated questions, and manual edit suggestions.',
  '奖学金通知与进度': 'Scholarship notice and progress',
  '把学院奖学金申报安排拆成通知、公示材料清单和学生问答。':
    'Break college scholarship application arrangements into notices, public material lists, and student Q&A.',
  '辅导员 + 学院办公室': 'Counselor + College office',
  '学院通知模板': 'College notice template',
  '奖学金评审办法': 'Scholarship review rules',
  '学生 FAQ': 'Student FAQ',
  '历史公示材料': 'Historical public materials',
  '流程梳理智能体': 'Workflow-structuring agent',
  '拆解申报、初审、公示和复议节点。': 'Break down application, initial review, publication, and appeal nodes.',
  '公告生成智能体': 'Announcement-generation agent',
  '生成官网、群公告和邮件版本。': 'Generate website, group notice, and email versions.',
  '问答智能体': 'Q&A agent',
  '沉淀资格、材料、时间和联系方式 FAQ。': 'Capture FAQ on eligibility, materials, timelines, and contacts.',
  '看板智能体': 'Dashboard agent',
  '汇总提交状态、缺件和待处理提醒。': 'Summarize submission status, missing materials, and pending reminders.',
  '通知版本': 'Notice versions',
  '官网公告、班群短通知、邮件长说明': 'Website notice, class-group short notice, long email note',
  '办理节点': 'Process nodes',
  '申报、资格初审、材料补正、结果公示、异议处理': 'Application, eligibility review, material correction, result publication, objection handling',
  '看板字段': 'Dashboard fields',
  '提交状态、缺件类型、处理人、下一次提醒': 'Submission status, missing-material type, handler, next reminder',
  '生成 16 条 FAQ': 'Generated 16 FAQ items',
  '5 类材料被标准化': '5 material types standardized',
  '补件提醒保留人工发送': 'Supplement reminders keep manual sending',
  '拆解政策': 'Break down policy',
  '从评审办法中提取资格条件、材料和时间节点。': 'Extract eligibility, materials, and time nodes from review rules.',
  '生成公告': 'Generate announcement',
  '按官网、邮件、班群生成不同长度和语气版本。': 'Generate versions with different lengths and tones for website, email, and class group.',
  '沉淀问答': 'Capture Q&A',
  '把高频问题转成学生可检索 FAQ。': 'Turn frequent questions into searchable student FAQ.',
  '配置节点': 'Configure nodes',
  '生成 DDL、补件提醒和负责人清单。': 'Generate DDLs, supplement reminders, and owner list.',
  '汇总看板': 'Summarize dashboard',
  '输出完成率、缺件分布和异常状态。': 'Output completion rate, missing-material distribution, and exception status.',
}

function translateValue(raw: string, language: SiteLanguage) {
  if (language === 'zh') return raw

  const prefix = raw.match(/^\s*/)?.[0] || ''
  const suffix = raw.match(/\s*$/)?.[0] || ''
  const core = raw.trim()
  const normalized = core.replace(/\s+/g, ' ')
  const translated =
    translations[core] ||
    translations[normalized] ||
    translatePattern(normalized, language) ||
    translateFallback(normalized, language)

  return translated ? `${prefix}${translated}${suffix}` : raw
}

function translatePattern(value: string, language: SiteLanguage) {
  if (language === 'zh') return ''

  if (value.endsWith(' 模块列表')) {
    const title = value.slice(0, -5)
    const translatedTitle = translations[title] || title
    return `${translatedTitle} module list`
  }

  if (value.endsWith(' 正在编排')) {
    const title = value.slice(0, -5)
    const translatedTitle = translations[title] || title
    return `${translatedTitle} is orchestrating`
  }

  return ''
}

function translateFallback(value: string, language: SiteLanguage) {
  if (language === 'zh' || !/[\u3400-\u9fff]/.test(value)) return ''

  const rules: Array<[RegExp, string]> = [
    [/安全|审计|权限|日志|数据|合规|边界/, 'Security, permissions, audit, and data-boundary content'],
    [/教育版|私有化|部署|交付|培训|运营|服务包/, 'Education edition deployment and delivery content'],
    [/Community|社区|开源|GitHub|Issue|PR|共建/, 'Community and open-source collaboration content'],
    [/Cloud|云端|托管|团队空间|订阅/, 'Cloud trial and team-collaboration content'],
    [/智能体|编排|工作流|流程|节点|任务/, 'Agent workflow and orchestration content'],
    [/课程|教学|教师|题目|试卷|Rubric|教案/, 'Teaching and course support content'],
    [/学生|学习|生涯|竞赛|就业|成长/, 'Student growth, study, and career-support content'],
    [/国际|交换|UBC|学分|签证|跨境/, 'International exchange support content'],
    [/科研|论文|文献|研究|证据/, 'Research and academic-writing support content'],
    [/通知|公告|材料|表单|问答|奖学金/, 'Administrative notices, materials, and Q&A content'],
    [/场景|角色|入口|试点|低风险/, 'Campus scenario and pilot content'],
    [/商业|版本|收入|报价|免费|套餐/, 'Edition and business-model content'],
    [/知识库|模板|资料|制度|案例/, 'Campus knowledge-base and template content'],
    [/官网|文档|域名|前端|后端|API/, 'Website, documentation, and integration content'],
    [/路线|当前|近期|中期|长期|生态/, 'Roadmap and product-evolution content'],
  ]

  const matched = rules.find(([pattern]) => pattern.test(value))
  return matched ? matched[1] : 'QeEdu campus AI workflow content'
}

function localizeTextNode(node: Text, language: SiteLanguage) {
  const current = node.nodeValue || ''
  if (!current.trim()) return

  const stored = textOriginals.get(node)

  if (language === 'zh') {
    if (stored && current !== stored) node.nodeValue = stored
    return
  }

  if (stored && current === translateValue(stored, language)) return

  const original = /[\u3400-\u9fff]/.test(current) ? current : stored || current
  textOriginals.set(node, original)

  const translated = translateValue(original, language)
  if (translated !== current) node.nodeValue = translated
}

function localizeElementAttributes(element: Element, language: SiteLanguage) {
  for (const attribute of localizableAttributes) {
    const current = element.getAttribute(attribute)
    if (!current) continue

    let originals = attributeOriginals.get(element)
    if (!originals) {
      originals = new Map()
      attributeOriginals.set(element, originals)
    }

    const stored = originals.get(attribute)

    if (language === 'zh') {
      if (stored && current !== stored) element.setAttribute(attribute, stored)
      continue
    }

    if (stored && current === translateValue(stored, language)) continue

    const original = /[\u3400-\u9fff]/.test(current) ? current : stored || current
    originals.set(attribute, original)

    const translated = translateValue(original, language)
    if (translated !== current) element.setAttribute(attribute, translated)
  }
}

function localizeNode(node: Node, language: SiteLanguage) {
  if (node.nodeType === Node.TEXT_NODE) {
    localizeTextNode(node as Text, language)
    return
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return

  const element = node as Element
  localizeElementAttributes(element, language)

  for (const child of element.childNodes) {
    localizeNode(child, language)
  }
}

export function observeLocalization(language: SiteLanguage) {
  if (typeof document === 'undefined') return () => {}

  localizeNode(document.body, language)

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') {
        localizeNode(mutation.target, language)
        continue
      }

      if (mutation.type === 'attributes') {
        localizeNode(mutation.target, language)
        continue
      }

      for (const node of mutation.addedNodes) {
        localizeNode(node, language)
      }
    }
  })

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: localizableAttributes,
    characterData: true,
    childList: true,
    subtree: true,
  })

  return () => observer.disconnect()
}
