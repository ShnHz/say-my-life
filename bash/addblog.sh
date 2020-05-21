###!/usr/bin/env sh

### 确保脚本抛出遇到的错误
# set -e

### 生成静态文件
# npm run build
cd ../

git init
git add -A
git commit -m 'add blog'

### 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
git push -f https://gitee.com/sang_hang_ning/say-my-life.git master
git push -f git@github.com:ShnHz/say-my-life.git master

cd -
