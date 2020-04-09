module.exports = {
    base: '/say-my-life/',
    title: '野宁新之助',
    description: '说说我的生活',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    themeConfig: {
        logo: '/img/logo_shn.png',
        nav: [{
                text: 'BLOG',
                link: '/blog/Archives'
            }, {
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
                        text: 'ShnHz',
                        link: 'https://github.com/ShnHz'
                    },
                    {
                        text: '项目地址',
                        link: 'https://github.com/ShnHz/say-my-life'
                    }
                ]
            }
        ],
        sidebar: {
            '/notes/': [
                '/notes/Web',
                '/notes/Chrome',
                '/notes/VsCode',
                {
                    title: 'JavaScript',
                    collapsable: true,
                    children: [
                        '/notes/js/BinaryTree',
                        '/notes/js/Distinct',
                        '/notes/js/Date',
                        '/notes/js/FlattenDeep',
                        '/notes/js/Object',
                        '/notes/js/Promise',
                        '/notes/js/Sort',
                        '/notes/js/String',
                    ]
                },
                {
                    title: 'CSS',
                    collapsable: true,
                    children: [
                        '/notes/css/Class',
                        '/notes/css/Color',
                        '/notes/css/Shadow',
                        '/notes/css/Scss',
                    ]
                },
                {
                    title: 'Vue',
                    collapsable: true,
                    children: [
                        '/notes/vue/Axios',
                        '/notes/vue/Nprogress',
                        '/notes/vue/Interval',
                        '/notes/vue/Rem',
                        '/notes/vue/Router',
                        '/notes/vue/Sass',
                        '/notes/vue/Title',
                        '/notes/vue/GlobalComponents', //vue 全局组件
                        '/notes/vue/VueLazyload',
                        '/notes/vue/vueProgressiveImage'
                    ]
                },
                {
                    title: '动画',
                    collapsable: true,
                    children: [
                        '/notes/animation/Button',
                        '/notes/animation/CoolSquare',
                        '/notes/animation/Face',
                        '/notes/animation/Mountain',
                        '/notes/animation/Pikachu',
                        '/notes/animation/ShapesColor',
                        '/notes/animation/XRay',
                    ]
                }
            ],
            '/journey/': [{
                    title: '国内',
                    collapsable: true,
                    children: [
                        // 直辖市
                        '/journey/domestic/Bj',
                        '/journey/domestic/Tj',
                        '/journey/domestic/Sh',
                        '/journey/domestic/Cq',

                        // 浙江
                        '/journey/domestic/ZjHz',
                        '/journey/domestic/ZjNb',
                        '/journey/domestic/ZjQz',
                        '/journey/domestic/ZjNh',
                        '/journey/domestic/ZjSx',
                        '/journey/domestic/ZjTz',
                        '/journey/domestic/ZjXs',
                        '/journey/domestic/ZjZs',
                        '/journey/domestic/ZjYw',
                        '/journey/domestic/ZjHd',
                        '/journey/domestic/ZjQdh',
                        '/journey/domestic/ZjDjd',
                        '/journey/domestic/ZjYds',
                        '/journey/domestic/ZjXds',

                        // 江苏
                        '/journey/domestic/JsNj',
                        '/journey/domestic/JsCz',
                        '/journey/domestic/JsWx',
                        '/journey/domestic/JsSz',

                        // 江西
                        '/journey/domestic/JxYs',
                        '/journey/domestic/JxWy',

                        // 四川
                        '/journey/domestic/ScCd',
                        // 安徽
                        '/journey/domestic/AhHs',
                        // 陕西
                        '/journey/domestic/SxHs',
                        '/journey/domestic/SxXa',
                        // 海南
                        '/journey/domestic/HnWc',
                        '/journey/domestic/HnSy',
                        // 福建
                        '/journey/domestic/FjXm',
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
                        '/life/plan/2019',
                        '/life/plan/2020'
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
                        '/life/diary/2019-11',
                        '/life/diary/2020-03',
                    ]
                },
                {
                    title: '游戏',
                    collapsable: true,
                    children: [
                        '/life/game/GTA5',
                        '/life/game/荒野大镖客2',
                        '/life/game/极限竞速4：地平线',
                        '/life/game/都市天际线',
                        '/life/game/过山车之星',
                        '/life/game/动物园之星',
                        '/life/game/SD敢达',
                        '/life/game/跑跑卡丁车',
                        '/life/game/NBA2KOL2',
                        '/life/game/英雄联盟',
                        '/life/game/王者荣耀',
                        '/life/game/奥日与黑暗森林',
                        '/life/game/奥日与精灵意志'
                    ]
                },
                '/life/Anime',
            ]
        },
        sidebarDepth: 0, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    }
}