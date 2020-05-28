const express = require('express')
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require('path');

let app = express()

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /*让options请求快速返回*/
    } else {
        next();
    }
});

app.post('/addblog', bodyParser.json(), (req, res) => {
    let json = JSON.stringify(req.body.json)
    let url = req.body.addblog.url

    let urlSpd = url.split('.')
    let urlSpx = url.split('/')
    urlSpx.pop()
    urlSpx.shift()

    let mdFilePath = urlSpd[0] + '.md'
    let mdFile = urlSpx.join('/')

    let mdContent = ''

    if (req.body.addblog.dir) {
        mdContent =
            `---
pageClass: blog-catalog
---

## ${req.body.addblog.title}
<p class="date">${req.body.addblog.date} 
<span id="${req.body.addblog.url}" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>
</p>

内容

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
`
    } else {
        mdContent =
            `---
pageClass: blog
---

## ${req.body.addblog.title}
<p class="date">${req.body.addblog.date} 
<span id="${req.body.addblog.url}" class="leancloud_visitors">
    <i class="shni shn-eye-fill" />
    <i class="leancloud-visitors-count"></i>
</span>
</p>

内容

<base-valine />
<el-backtop :visibility-height="0"></el-backtop>
`
    }

    async function createMd() {
        await dirExists('./docs/' + mdFile);
        fs.writeFile('./docs' + mdFilePath, mdContent, err => {
            if (err) return console.log(err);
            console.log('写入MD成功')
        })
    }

    try {
        createMd();

        fs.readFile('../say-my-life/docs/.vuepress/public/json/blog.json', function (err, data) {
            fs.writeFile('../say-my-life/docs/.vuepress/public/json/blog.json', json, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log('----------修改JSON成功-------------');
                }
            })
        })
    } catch {
        res.json({
            success: false
        })
    }

    res.json({
        success: true
    })
})

app.listen(3000, () => console.log('服务启动成功,http://localhost:3000/'))

/**
 * 读取路径信息
 * @param {string} path 路径
 */
function getStat(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                resolve(false);
            } else {
                resolve(stats);
            }
        })
    })
}

/**
 * 创建路径
 * @param {string} dir 路径
 */
function mkdir(dir) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dir, err => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        })
    })
}

/**
 * 路径是否存在，不存在则创建
 * @param {string} dir 路径
 */
async function dirExists(dir) {
    let isExists = await getStat(dir);
    //如果该路径且不是文件，返回true
    if (isExists && isExists.isDirectory()) {
        return true;
    } else if (isExists) { //如果该路径存在但是文件，返回false
        return false;
    }
    //如果该路径不存在
    let tempDir = path.parse(dir).dir; //拿到上级路径
    //递归判断，如果上级目录也不存在，则会代码会在此处继续循环执行，直到目录存在
    let status = await dirExists(tempDir);
    let mkdirStatus;
    if (status) {
        mkdirStatus = await mkdir(dir);
    }
    return mkdirStatus;
}