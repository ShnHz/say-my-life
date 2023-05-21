var fs = require('fs');

//  遍历目录得到文件信息
function walk(path, callback) {
    var files = fs.readdirSync(path);

    files.forEach(function (file, index) {
        if (fs.statSync(path + '/' + file).isFile()) {
            callback(path, file, index);
        }
    });
}

// 修改文件名称
function rename(oldPath, newPath) {
    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            throw err;
        }
    });
}


var PATH = 'E:/Program Files (x86)/WeGameApps/英雄联盟/Game/Screenshots'; // 目录
var FILE_FIRST = '' //文件名前缀
var FILE_INDEX = 4 //文件初始index
var COUNT = 0

walk(PATH, function (path, fileName, index) {
    let File = fileName.split('.')
    let FileType = File[File.length - 1]

    let typeList = [
        'jpg',
        'png'
    ]
    if (typeList.indexOf(FileType.toLowerCase()) > -1) {
        COUNT++
    }
});

console.log(COUNT)

// 运行
walk(PATH, function (path, fileName, index) {
    let oldPath = path + '/' + fileName // 源文件路径
    let File = fileName.split('.')
    let FileType = File[File.length - 1]
    let newPath = ''

    let typeList = [
        'jpg',
        'png'
    ]
    if (typeList.indexOf(FileType.toLowerCase()) > -1) {
        newPath = path + '/' + FILE_FIRST + (FILE_INDEX + index + 1) + '.' + FileType; // 新路径
        rename(oldPath, newPath);
    }
});