var fs = require('fs');

var PATH = './jsimg'; // 目录

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

// 运行
walk(PATH, function (path, fileName, index) {
    let oldPath = path + '/' + fileName // 源文件路径
    let oldFile = oldPath.split('.')
    oldFile = oldFile[oldFile.length - 1]
    let newPath = ''
    if (oldFile == 'JPG' || oldFile == 'jpg') {
        newPath = path + '/' + (index + 1) + '.jpg'; // 新路径
    } else if (oldFile == 'png') {
        newPath = path + '/' + (index + 1) + '.png'; // 新路径
    }
    
    if (oldFile == 'jpg' || oldFile == 'JPG' || oldFile == 'png') {
        rename(oldPath, newPath);
    }
});