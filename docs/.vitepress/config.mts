import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/myVitepress/',
  title: "Meritlink 前端",
  description: "业务逻辑最佳实践&技巧",
  head: [
    ['link', { rel: 'icon', href: '/extension.ico'}]
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '../public/logo.png',
    siteTitle: 'Meritlink 前端',
    search: {
      provider: 'local'
    },
    outline: 'deep',
    nav: [
      { text: 'Home', link: '/' },
      { text: '公用方法', link: '/functions' },
      { text: '通用组件', link: '/components' },
      { text: '业务逻辑最佳实践', link: '/develop-logic' },
      { 
        text: '前端常用',
        items: [
          {
            text: '压缩图片',
            link: 'https://tinypng.com/'
          },
          {
            text: '前端工具',
            link: 'https://tools.fun/index.html'
          },
          {
            text: 'markdown 在线编辑',
            link: 'https://markdown.com.cn/editor/'
          },
        ]
      },
    ],
    sidebar: [
      {
        text: '业务逻辑最佳实践',
        collapsed: true,
        items: [
          { text: '最佳实践', link: '/develop-logic/index' },
          { text: '分支管理策略', link: '/develop-logic/branch' },
        ]
      },
      {
        text: '通用组件',
        collapsed: true,
        items: [
          { text: '通用组件', link: '/components/index' },
        ]
      },
      {
        text: '公用方法',
        collapsed: true,
        items: [
          { text: '公用方法', link: '/functions/index' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present gqk'
    }
  }
})
