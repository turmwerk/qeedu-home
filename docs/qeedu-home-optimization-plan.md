# QeEdu Home Optimization Plan

## 目标拆解

1. 背景与动效
   - 移除背景光点、飘落粒子和大面积持续动画。
   - 保留低成本的网格、柔和绿色层次和少量 hover/进入动效。
   - 所有持续动画都要能被 `prefers-reduced-motion` 关闭。

2. 组件结构
   - `Layout` 负责路由、页头、页脚、滚动进度和浮动入口。
   - `AmbientBackground` 只输出静态背景层，不再生成粒子节点。
   - `Header`、`FloatingControls`、`HomeSectionNav` 统一按钮与导航交互。
   - 首页大块保持现有组件边界：`Home`、`ProductConsole`、`CampusWorkbenchDemo`、`AgentOrchestrationLab`、`DemoShowcaseSection`、`EditionCards`。
   - 二级页面使用 `PageShell`、`PageHeroVisual`、`PageSignalRail`、`PageProofSection` 复用布局与动效。

3. 视觉与密度
   - 绿色配色参考 `dieWehmut.github.io` 的 `--site-accent: #1fc41f`，辅以深绿、浅绿和白色面板。
   - 缩小区块上下间距、卡片 gap 和移动端 padding，减少页面松散感。
   - 卡片保留 8px 以内圆角，避免过重阴影和嵌套卡片。

4. 按钮与图标
   - 主按钮、次按钮、文本链接统一高度、focus、hover、active 状态。
   - 重要标题、清单、导航项左侧尽量加入 lucide 图标或已有图标组件。
   - 移动端按钮允许换行或全宽布局，避免文字溢出。

5. 响应式与流畅性
   - 桌面端维持信息密度，移动端收敛为单列并降低背景复杂度。
   - 减少 `will-change` 和无限动画数量，降低滚动卡顿。
   - 构建后用桌面和移动视口检查首屏、区块间距、按钮和文本重叠。

## 小步提交顺序

1. `docs: plan qeedu home optimization components`
   - 增加本规划，固定组件范围和验收点。

2. `refactor: simplify ambient background motion`
   - 精简 `AmbientBackground` 节点。
   - 移除光点、雪花、花瓣和重型背景动画样式。

3. `style: tune green theme buttons and density`
   - 调整全局绿色变量、按钮、导航和区块间距。
   - 保留清晰 hover/focus/active 状态。

4. `style: improve responsive icon-led sections`
   - 优化移动端与桌面端布局协调。
   - 强化文字左侧图标、清单和标题视觉节奏。

5. `chore: verify qeedu home build`
   - 运行构建。
   - 检查关键页面在桌面与移动端没有明显重叠、卡顿源和背景光点。

## 追加优化：图标、悬浮按钮与性能

### 验收目标

1. 图标与数字
   - 同一个导航项、步骤项或输出项已经有明确图标时，不再同时展示序号徽标。
   - 保留纯流程清单中的数字，例如没有图标辅助的时间线、试点步骤。
   - 二级页信号条如果没有图标，也不使用醒目的序号块，改为轻量状态点，避免与图标体系冲突。

2. 图标与文字对齐
   - 所有 lucide 图标统一 `display: block`、`flex: 0 0 auto`、`stroke-width: 2`。
   - 按钮、标签、标题行、校验项统一 `inline-flex` 或 `flex` 居中，图标尺寸与相邻文字字号保持 1:1 到 1.2:1。
   - 多行文字的图标固定在首行视觉中心，避免上下错位。

3. 右下角悬浮按钮
   - 参考 `/root/edu-ai/sample/dieWehmut.github.io/src/components/system/FloatButton.vue`。
   - 使用 44px 小圆角按钮、黑底/白底两套背景、绿色激活态、绝对定位展开和短过渡。
   - 不引入参考项目里的无限旋转设置动画，避免低端设备滚动时持续占用合成资源。

4. 字号与动效
   - 首屏标题从极大号收敛到更稳定的展示尺度，移动端保证不挤压内容。
   - 打字机效果改为低频整句切换，减少每 54ms 的 React 状态更新。
   - 保留短进入/hover 动效，移除或静态化持续闪烁、扫描、高光扫过等易造成卡顿的效果。

### 小步提交顺序

1. `docs: 追加图标和动效优化设计`
   - 固定本轮要求和验收边界。

2. `style: 移除图标旁冗余数字`
   - 首页阅读路径、左侧章节导航、智能体步骤、工作台模块、二级页输出/泳道去掉图标旁序号。
   - 调整对应 CSS 网格与轨道线位置。

3. `style: 统一图标文字对齐`
   - 增加全局图标对齐规则。
   - 修正按钮、chip、header、卡片头部和输出项的 gap、line-height、icon size。

4. `style: 参考黑白样式重做悬浮按钮`
   - 采用参考项目的绝对定位展开方式。
   - 加入浅/深按钮背景状态和绿色 active/focus。

5. `perf: 降低首页动效和字号压力`
   - 打字机改成整句轮播。
   - 收敛首屏、二级页标题字号。
   - 降低 marquee 和 route enter 等动画强度。

6. `chore: 校验图标对齐与页面性能`
   - `pnpm build`。
   - Playwright 桌面/移动截图。
   - 检查图标数字共存、横向溢出、持续动画数量和移动端重叠。
