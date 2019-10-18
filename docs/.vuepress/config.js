module.exports = {
    base: '/say-my-life/',
    title: 'Say My Life - Shn',
    description: '说说我的生活',
    themeConfig: {
        nav: [{
                text: '笔记',
                link: '/notes/Notes'
            },
            {
                text: '生活',
                link: '/life/Life'
            },
            {
                text: '旅程',
                link: '/journey/Journey'
            },
            {
                text: 'GitHub',
                items: [{
                    text: 'GitHub地址',
                    link: 'https://github.com/ShnHz'
                }]
            }
        ],
        sidebar: {
            '/notes/': [{
                    title: 'JavaScript',
                    collapsable: true,
                    children: [
                        '/notes/js/Promise',
                        '/notes/js/Sort',
                        '/notes/js/Distinct',
                        '/notes/js/FlattenDeep'
                    ]
                },
                {
                    title: 'CSS',
                    collapsable: true,
                    children: [
                        '/notes/css/Class',
                        '/notes/css/Color',
                        '/notes/css/Shadow',
                    ]
                },
                {
                    title: 'Vue',
                    collapsable: true,
                    children: [
                        '/notes/vue/Sass',
                        '/notes/vue/Rem',
                        '/notes/vue/GlobalComponents',
                        '/notes/vue/Axios',
                    ]
                }
            ],
            '/journey/': [{
                    title: '国内',
                    collapsable: true,
                    children: [
                        '/journey/domestic/ZjHz'
                    ]
                },
                {
                    title: '国外',
                    collapsable: true,
                    children: [
                        '/journey/foreign/YnHn'
                    ]
                }
            ],
            '/life/': [{
                title: '年度计划',
                collapsable: true,
                children: [
                    '/life/plan/2018',
                    '/life/plan/2019'
                ]
            }]
        },
        sidebarDepth: 0, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    }
}