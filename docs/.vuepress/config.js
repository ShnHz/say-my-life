module.exports = {
    title: '野宁新之助',
    description: '说说我的生活',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }],
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?2ac01fd25230ad4a6d23c56daa31eba5";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();
        `]
    ],
    themeConfig: {
        logo: '/img/logo_shn.png',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '归档',
                link: '/blog/Archives'
            }, {
                text: '标签',
                link: '/blog/Tag'
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
                text: '友链',
                link: '/Friend'
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
            ]
        },
        sidebarDepth: 0, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    }
}