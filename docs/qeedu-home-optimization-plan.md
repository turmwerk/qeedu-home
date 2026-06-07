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
