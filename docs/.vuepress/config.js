module.exports = {
  title: '一叶',
  description: 'a blog with my out brain',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/never-more-sound/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // 顶部栏目
    nav: [
      { text: '算法', link: '/algorithm/t1' }, // 内部链接 以docs为根目录
      { text: '掘金', link: 'https://juejin.cn/user/2700056287256382/posts' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub', link: 'https://github.com/kv321vk/never-more-sound.git' },
          {
            text: '算法仓库',
            link: 'https://www.baidu.com'
          }
        ]
      }
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        '/guide/',
        {
          title: '组1',
          children: [
            '/guide/test',
            '/guide/test2'
          ]
        }
      ],
      '/algorithm/': [
        '/algorithm/',
        {
          title: '组2',
          children: [
            '/algorithm/t1',
            '/algorithm/t2'
          ]
        }
      ]
    }
  }
}

