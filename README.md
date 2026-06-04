<h1 align="center">QeEdu Home</h1>

<div align="center">

<div>
<a href="https://qeedu.tech/" target="_blank">
  <img src="https://img.shields.io/badge/%E5%AE%98%E7%BD%91-qeedu.tech-0D7D5F?style=flat-square&logo=google-chrome&logoColor=white&labelColor=555555" alt="QeEdu 官网">
</a>
<a href="https://cloud.qeedu.tech/" target="_blank">
  <img src="https://img.shields.io/badge/CLOUD-cloud.qeedu.tech-083D31?style=flat-square&logo=cloudflare&logoColor=white&labelColor=555555" alt="QeEdu Cloud">
</a>
<a href="https://docs.qeedu.tech/" target="_blank">
  <img src="https://img.shields.io/badge/DOCS-docs.qeedu.tech-B8FF5C?style=flat-square&logo=readthedocs&logoColor=white&labelColor=555555" alt="QeEdu Docs">
</a>
</div>

<div>
<a href="https://react.dev/" target="_blank">
  <img src="https://img.shields.io/badge/REACT-19-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=555555" alt="React 19">
</a>
<a href="https://vite.dev/" target="_blank">
  <img src="https://img.shields.io/badge/VITE-7-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=555555" alt="Vite 7">
</a>
<a href="https://www.typescriptlang.org/" target="_blank">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white&labelColor=555555" alt="TypeScript">
</a>
<a href="https://github.com/turmwerk/qeedu-home/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/LICENSE-MIT-green?style=flat-square&logo=github&logoColor=white&labelColor=555555" alt="License">
</a>
</div>

</div>

<div align="center">

简体中文 | [繁體中文](docs/README.zh-TW.md) | [English](docs/README.en.md) | [日本語](docs/README.ja.md)

</div>

## 项目定位

`qeedu-home` 是启育 QeEdu 的官方网站仓库，部署到 [qeedu.tech](https://qeedu.tech/)。

它负责展示 QeEdu 的产品定位、版本路线、商业模式、私有化部署、数据安全和校园试点方案。官网不承载产品登录和业务数据，产品体验请访问 [QeEdu Cloud](https://cloud.qeedu.tech/)，部署与试点说明请访问 [QeEdu Docs](https://docs.qeedu.tech/)。

## 相关仓库

| 仓库 | 地址 | 说明 |
| --- | --- | --- |
| QeEdu Home | <https://github.com/turmwerk/qeedu-home> | 官网与产品宣传站 |
| QeEdu Docs | <https://github.com/turmwerk/qeedu-docs> | 文档站、部署说明、试点手册 |
| QeEdu Cloud / Community | <https://github.com/turmwerk/qeedu> | 主产品前后端代码 |

## 功能内容

- 官网首页：动态产品文案、角色场景、版本路线、部署架构、FAQ。
- 多路由页面：`/product`、`/scenarios`、`/education`、`/security`、`/pricing`、`/community`、`/cloud`。
- 品牌资源：QeEdu Logo、霞鹜文楷字体、绿色主题视觉。
- Cloudflare Pages 支持：包含 SPA 回退 `_redirects`。

## 技术栈

- React 19
- Vite 7
- TypeScript 5
- React Router
- Lucide React
- Cloudflare Pages

## 本地开发

```bash
pnpm install
pnpm dev
```

默认开发地址：

```text
http://localhost:5173
```

## 构建

```bash
pnpm build
```

构建产物输出到：

```text
dist
```

## Cloudflare Pages

推荐配置：

| 项目 | 值 |
| --- | --- |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Production branch | `main` |

## 许可证

本仓库基于 [MIT License](LICENSE) 开源。

