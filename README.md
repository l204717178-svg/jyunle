# JyunLe · 个人网站与作品集

李隽乐（JyunLe）的个人展示网站，记录教育与实习经历、影像创作、摄影作品、技能和荣誉。网站围绕“爱好 → 技能 → 成果”的成长理念，展示产品方向的职业探索与个人生活。

- 在线访问：[www.jyunle.top](https://www.jyunle.top/)
- 代码仓库：[l204717178-svg/jyunle](https://github.com/l204717178-svg/jyunle)

## 页面功能

网站采用单页布局，顶部导航通过锚点跳转到各个区域。

| 模块 | 内容 | 维护位置 |
| --- | --- | --- |
| 首页介绍 | 姓名、学校标签、个人身份与自我介绍 | `src/components/Hero.jsx` |
| My Journey | 教育和实习经历，左右交替时间轴 | `src/components/Experience.jsx` |
| Philosophy | 个人成长理念 | `src/components/About.jsx` |
| Skills / Achievements | 技能进度条、影像与足球荣誉 | `src/components/Skills.jsx` |
| 作品集 | 视频、摄影图集和作品详情弹窗 | `src/components/Portfolio.jsx` |
| 联系方式 | 求职方向与邮件入口 | `src/components/Contact.jsx` |

当前经历包括 vivo、灵动科技、商汤科技、中国移动杭州研究院，以及香港城市大学、电子科技大学。作品集包含年度总结视频、《足迹》和摄影作品。

点击作品卡片可以打开详情弹窗：视频使用 B 站内嵌播放器，摄影图集支持左右按钮、拖动切换和页数显示。点击关闭按钮或背景遮罩可退出弹窗。页面还包含滚动入场、卡片悬停和切换动画。

## 技术栈

| 技术 | 用途 |
| --- | --- |
| React 19 | 页面组件、弹窗与图集状态管理 |
| Vite 7 | 开发服务、热更新、生产构建 |
| Framer Motion 12 | 入场、悬停和图集动画 |
| Lucide React | 界面图标 |
| CSS 变量与内联样式 | 深色主题、字体、间距和布局 |
| ESLint 9 | JavaScript / JSX 静态检查 |

项目使用 JavaScript 和 JSX，是纯前端静态网站，没有独立后端、数据库或内容管理后台。文案和作品数据直接维护在组件中。联系按钮通过 `mailto:` 调起邮件客户端，不会在站内提交表单。当前代码不需要环境变量。

## 本地运行

### 环境准备

安装 Git、Node.js 和 npm。当前 Vite 版本要求 Node.js `^20.19.0` 或 `>=22.12.0`，可使用 Node.js 22.12 及以上的 22.x 版本。

```bash
node --version
npm --version
git --version
```

### 下载与启动

```bash
git clone https://github.com/l204717178-svg/jyunle.git
cd jyunle
npm ci
npm run dev
```

如果电脑上已有项目，直接用 `cd` 进入现有项目目录即可。后续命令均在项目根目录执行。

打开终端显示的地址，通常是 `http://localhost:5173/`。端口被占用时可能自动更换，以终端输出为准。保持终端运行，保存源码后页面通常会自动更新；按 `Ctrl + C` 停止服务。

### 构建与预览

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`，预览地址通常是 `http://localhost:4173/`。预览服务用于本地检查构建结果，不是正式线上托管服务。不要直接双击 `dist/index.html` 代替 HTTP 预览。

| 命令 | 说明 |
| --- | --- |
| `npm ci` | 按锁文件安装依赖 |
| `npm run dev` | 启动开发服务 |
| `npm run build` | 生成生产静态文件 |
| `npm run preview` | 预览构建结果 |
| `npm run lint` | 执行 ESLint 检查 |

构建和 ESLint 是不同的检查，构建成功不代表 ESLint 一定通过。项目目前没有配置自动化测试脚本。

## 目录结构

```text
jyunle/
├── public/portfolio-gallery/  # 摄影图集静态资源
├── src/
│   ├── assets/images/        # 作品封面等图片
│   ├── components/           # 页面各模块
│   ├── styles/
│   │   ├── global.css        # 全局样式与通用布局
│   │   └── variables.css     # 颜色、字体、间距变量
│   ├── App.jsx               # 页面模块组合与顺序
│   └── main.jsx              # React 入口
├── index.html                # HTML 入口
├── vite.config.js            # Vite 配置
├── eslint.config.js          # 静态检查配置
├── package.json              # 依赖和运行命令
├── package-lock.json         # 依赖锁文件
└── README.md
```

`node_modules/` 和 `dist/` 已被 Git 忽略，可以分别通过安装依赖和构建重新生成。

## 内容维护指南

### 教育和实习经历

编辑 `src/components/Experience.jsx` 中的 `TimelineItem`：

```jsx
<TimelineItem
    isLeft={true}
    date="2026.05 - 2026.09"
    title="vivo (维沃移动通信有限公司)"
    subtitle="OS搜索产品实习生"
    description="负责全局搜索体验升级与增长需求；主导引入 AI 自动化评测工作流；通过看板数据提升北极星指标。"
/>
```

源码中的先后顺序决定上下顺序，不会按日期自动排序。需要置顶时，将整个组件移到第一条。`isLeft={true}` 表示左侧，`false` 表示右侧；新增或调整顺序后，检查各条记录按 `true、false、true、false` 交替。

### 作品卡片和视频

编辑 `src/components/Portfolio.jsx` 顶部的 `projects` 数组。数组第一项是网格第一格，后面的作品依次排列。

| 字段 | 说明 |
| --- | --- |
| `id` | 唯一的非零编号，用于选择作品和关联动画 |
| `title` | 卡片与详情标题 |
| `category` | 类别标签，如 `Video`、`Photography`、`Product` |
| `description` | 卡片摘要和详情说明 |
| `image` | 封面图片 |
| `bvid` | B 站视频编号，存在时使用视频播放器 |
| `videoUrl` | 视频原始地址，当前播放器实际使用 `bvid` |
| `link` | 外部地址；无 `bvid` 且不是 `#` 时展示外链按钮 |
| `images` | 图集地址数组，无 `bvid` 时用于图集展示 |

更换视频时，同步更新 `bvid`、`videoUrl` 和 `link`。只修改 `link` 不会改变弹窗中的视频。类别标签由 `category` 控制，不会自动识别作品类型。

### 替换封面

将图片放入 `src/assets/images/`，在 `Portfolio.jsx` 中通过 `import` 引入，再赋给作品的 `image` 字段：

```jsx
import newCover from '../assets/images/my-video-cover.jpg'
```

卡片比例是 `16:9`，图片使用 `object-fit: cover`，比例不同的素材可能被裁切。重要文字尽量不要贴近边缘。提交时需要同时包含新图片和组件修改。

### 更新摄影图集

图集读取 `public/portfolio-gallery/g0.jpg` 到 `g23.jpg`，共 24 张。替换同名文件即可更新图片；增减数量时，同时修改 `Portfolio.jsx` 中 `galleryImages` 的 `length`，保持文件编号连续。

`public` 下的文件通过根路径访问，例如 `/portfolio-gallery/g0.jpg`，URL 不包含 `public`。当前路径适用于域名根目录部署；改为子路径部署时，需要一起检查 Vite 的 `base` 和图集资源路径。

### 其他信息与样式

- 首页介绍和学校标签在 `Hero.jsx` 中修改。
- 个人理念在 `About.jsx` 中修改。
- 技能百分比与获奖记录在 `Skills.jsx` 中修改。
- 邮箱在 `Contact.jsx` 中修改，同时更新 `mailto:` 和按钮文字。
- 页面模块顺序在 `App.jsx` 中调整。
- 导航和页脚在 `Layout.jsx` 中维护。
- 全局颜色、字体、间距在 `src/styles/variables.css` 中设置。

多数模块还使用内联样式，局部布局需在对应组件中调整。发布前建议检查桌面和窄屏效果，尤其是导航、双列时间轴与作品弹窗。

## 部署与线上更新

### 构建配置

| 配置项 | 值 |
| --- | --- |
| 项目类型 | Vite / React |
| 项目根目录 | 仓库根目录 |
| 安装命令 | `npm ci` |
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| 环境变量 | 当前代码无需配置 |

使用自有服务器时，发布 `dist/` 的完整内容。域名绑定、DNS 和 HTTPS 证书在实际托管平台与域名服务商处维护。

仓库没有包含完整的托管平台绑定信息。推送是否触发自动部署、使用哪个生产分支，以现有平台设置为准。已有站点更新内容通常无需重新购买域名或修改 DNS。

### 日常更新流程

1. 修改文案或素材，本地预览确认。
2. 运行 `npm run build`，确认构建成功。
3. 使用 `git status` 和 `git diff` 检查变更。
4. 暂存需要的文件，提交并推送到实际部署仓库。
5. 在托管平台确认部署成功，再访问线上网站检查。

从本仓库克隆后，`origin` 通常指向本仓库。以更新 README 为例：

```bash
git remote -v
git add README.md
git commit -m "docs: update Chinese README"
git push origin main
```

维护者现有工作区曾同时配置 `origin` 和 `deploy`，其中 `deploy` 指向本仓库，该工作区使用 `git push deploy main`。远程名称只是本地别名，推送前以 `git remote -v` 中的仓库地址为准。

本地保存、构建成功、推送成功和线上部署成功是不同步骤。托管平台完成发布后，域名才会展示新版本。

## 常见问题

### 本地已经更新，线上仍然是旧内容

检查修改是否提交、是否推送到正确仓库和生产分支、托管平台最新部署是否成功。确认发布完成后，可以尝试强制刷新；Mac 浏览器通常使用 `Command + Shift + R`。

### 视频没有自动播放或没有声音

当前播放器请求包含 `autoplay=1`，但不等于强制取消静音。实际播放和声音状态由 B 站播放器、浏览器自动播放策略及用户设置决定，必要时手动点击播放或音量按钮。

### 图片线上无法显示

检查图片是否加入 Git 并推送、路径和文件名大小写是否一致、扩展名是否正确。线上文件系统可能区分大小写，图集还需确认编号与数组长度一致。

### 推送提示 Permission denied (publickey)

这是 SSH 身份认证问题。确认公钥已添加到对应 GitHub 账号，再通过 `ssh -T git@github.com` 测试。添加的是 `.pub` 公钥，私钥保留在本机。

### 是否需要后端服务

不需要，站点只需静态托管。B 站视频依赖外部播放器网络访问，邮件联系依赖访问者的邮件客户端。

## 联系与使用说明

联系邮箱：[l1204717178@outlook.com](mailto:l1204717178@outlook.com)。

仓库目前未提供开源许可证。个人照片、视频、文字和其他素材的使用授权需单独确认，公开访问不代表已获得自由使用授权。
