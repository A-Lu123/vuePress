module.exports = {
    title: 'Try hard ALu',
    description: 'Just some recorded in perception',
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '阅读书籍',
          items: [
            {text: 'HTML + CSS', link: '/reading/html/'},
            {text: 'JavaScript', link: '/reading/javaScript/'}
          ] 
        },
        {
          text: '练习demo',
          items: [
            {text: '静态页面', link: '/practice/layout/'},
            {text: 'Vue2', link: '/practice/vue2/'},
            {text: 'Vue3', link: '/practice/vue3/'},
          ]
        },
        {text: '心得感悟', link:'/Experience/'},
        { text: '困难与解决', link: 'https://www.baidu.com' },
      ],
      sidebar: 'auto',
      sidebarDepth: 2
    }
}