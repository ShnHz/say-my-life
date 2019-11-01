module.exports = {
    base: '/say-my-life/',
    title: 'Say My Life - Shn',
    description: '说说我的生活',
    plugins: ['@vuepress/back-to-top'],
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
                        '/notes/vue/VueLazyload',
                        '/notes/vue/Nprogress',
                        '/notes/vue/Title'
                    ]
                }
            ],
            '/journey/': [{
                    title: '国内',
                    collapsable: true,
                    children: [
                        '/journey/domestic/ZjHz',
                        '/journey/domestic/ZjNb',
                        '/journey/domestic/JxYs',
                        '/journey/domestic/Cq',
                        '/journey/domestic/ScCd',
                        '/journey/domestic/ZjQdh',
                        '/journey/domestic/AhHs',
                        '/journey/domestic/ZjNh',
                        '/journey/domestic/SxHs',
                        '/journey/domestic/SxXa',
                        '/journey/domestic/ZjQz',
                        '/journey/domestic/ZjDjd',
                        '/journey/domestic/ShDsn',
                        '/journey/domestic/JsCz',
                        '/journey/domestic/JsWx',
                        '/journey/domestic/Tj',
                        '/journey/domestic/Bj',
                        '/journey/domestic/ZjYds',
                        '/journey/domestic/Sh',
                        '/journey/domestic/JsSz',
                        '/journey/domestic/JsNj',
                        '/journey/domestic/ZjXds',
                        '/journey/domestic/ZjSx',
                        '/journey/domestic/ZjTz',
                        '/journey/domestic/HnWc',
                        '/journey/domestic/HnSy',
                        '/journey/domestic/ZjXs',
                        '/journey/domestic/JxWy',
                        '/journey/domestic/FjXm',
                        '/journey/domestic/ZjZs',
                        '/journey/domestic/ZjYw',
                        '/journey/domestic/ZjHd',
                    ]
                },
                {
                    title: '国外',
                    collapsable: true,
                    children: [
                        '/journey/foreign/YnHn',
                        '/journey/foreign/YnXg',
                        '/journey/foreign/YnHzm',
                        '/journey/foreign/TgMg',
                        '/journey/foreign/TgBty'
                    ]
                }
            ],
            '/life/': [{
                    title: '年度计划',
                    collapsable: false,
                    children: [
                        '/life/plan/2018',
                        '/life/plan/2019'
                    ]
                },
                {
                    title: '日记',
                    collapsable: true,
                    children: [
                        '/life/diary/2019-03',
                        '/life/diary/2019-05',
                        '/life/diary/2019-09',
                        '/life/diary/2019-10',
                    ]
                },
                {
                    title: '游戏',
                    collapsable: true,
                    children: [
                        '/life/game/GTA5',
                        '/life/game/极限竞速4：地平线',
                        '/life/game/都市天际线',
                        '/life/game/过山车之星',
                        '/life/game/动物园之星',
                        '/life/game/SD敢达',
                        '/life/game/跑跑卡丁车',
                        '/life/game/NBA2KOL2'
                    ]
                }
            ]
        },
        sidebarDepth: 0, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    }
}