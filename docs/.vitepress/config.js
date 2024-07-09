import { defineConfig } from 'vitepress';
import {processData} from "@chunge16/vitepress-blogs-theme/config";
import { enUS } from "date-fns/locale";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",  // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  cleanUrls: true,
  title: "Kevin",
  description: "kevin.net.br",
  lang: 'pt-BR',
  themeConfig: {
    logo: '/img/web/logo.svg',
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Sobre', link: '/about' },
      {
        text: 'Blog',
        activeMatch: '/blog/',
        items: [
          {
            text: 'Blog',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: 'Tags',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: 'Arquivo cronológico',
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          },
//           {
//             text: 'RSS Feed',
//             link: '/blog/feed.rss',
//           },
        ],
      },
//      {text: '∴', link: '/ordem/',activeMatch: '/ordem/'}, ############ projeto futuro ##############
    ],
  extendsMarkdown: md => {
    md.use(require('markdown-it-container'), 'password', {
      validate: params => params.trim() === 'password',
      render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
          return `<PasswordProtected>`
        } else {
          return `</PasswordProtected>`
        }
      }
    })
  },

//    sidebar: [
//      {
//        text: 'Examples',
//        items: [
//          { text: 'Markdown Examples', link: '/markdown-examples' },
//          { text: 'Runtime API Examples', link: '/api-examples' }
//        ]
//      }
//    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/kevday' }
    ],

    blog: {
      title: 'Blog',
      description: '',
      defaultAuthor: 'Kevin',
      categoryIcons: {
        artigo: 'i-[carbon/notebook]',
        tutorial: 'i-[carbon/book]',
        documento: 'i-[carbon/document]',
        teste: 'i-[carbon/document]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[logos/vue]',
        javascript: 'i-[logos/javascript]',
        'web development': 'i-[carbon/development]',
        html: 'i-[logos/html-5]',
        git: 'i-[logos/git-icon]',
        vite: 'i-[logos/vitejs]',
        locked: 'i-[twemoji/locked]',
        react: 'i-[logos/react]',
        blog: 'i-[carbon/blog]',
        comment: 'i-[carbon/add-comment]',
      },
      dateConfig: {
        format: 'yyyy/MM/dd',
        locale: enUS
      },
      giscus: {
        repo: 'chunge16/vitepress-blogs-theme-template',
        repoId: 'R_kgDOKz3GKg',
        category: 'General',
        categoryId: 'DIC_kwDOKz3GKs4CbySw',
        mapping: 'pathname', // default: `pathname`
        inputPosition: 'top', // default: `top`
        lang: 'pt', // default: `zh-CN`
        lightTheme: 'light', // 默认: `light`
        darkTheme: 'transparent_dark', // 默认: `transparent_dark`
        defaultEnable: true, // 默认： true
      }
    },

  },
  vite: {
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme']
    },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});
