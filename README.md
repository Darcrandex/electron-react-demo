## 已集成的方案

- vite
- tailwindcss
- axios
- jotai
- react-query

## 快速开始

```bash
pnpm i
pnpm dev
```

## 打包

Linux 打包需要先安装以下两个工具

- brew install snapcraft
- brew install multipass

```bash
pnpm i
pnpm build
pnpm build:linux
```

## TODO

- 打包测试，目前没有环境测试
- 自动更新方案；官方使用 github-actions，但似乎不可行
