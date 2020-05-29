---
pageClass: blog
---

## git 忽略已提交文件的修改

<p class="date">2020-05-08 15:05
  <span id="/blog/git/UpdateIndex.html" class="leancloud_visitors">
      <i class="shni shn-eye-fill" />
      <i class="leancloud-visitors-count"></i>
  </span>
</p>

我们在使用git中，经常会遇到这样的情况：

git仓库中有某个必要的配置文件，这个文件应该存在，但是在每个开发人员的本地都要对他进行修改。这就导致这个文件要被反复修改，容易冲突。要想不冲突，就要每个人提交前，都刻意不提交该文件，很是麻烦。

一般我们这时候就会想到，用<code class="default">.gitignore</code>来忽略这个文件，但是该文件是已经提交过的，并且对于工程是必要的，应该保存在git中的。<code class="default">.gitignore</code>对于这种已提交过的文件是无能为力的，修改后会将git仓库的文件也删除了，这明显不是我们的需求。

这时候，就需要使用<code class="default">git update-index --skip-worktree</code>命令了

该命令的作用是，让git在搜索文件列表时，忽略某个文件，这样该文件即使有修改，git也不会关心。

```bash
#例子：
git update-index --skip-worktree filepath
```

使用这个命令，时间久了，可能会忘记自己忽略过哪些文件，这时候可以使用<code class="default">git ls-files -v . | grep "^S"</code> / <code class="default">git ls-files -v . | findstr "^S"</code>命令找出来忽略过的文件。

```bash
#例子：Linux
git ls-files -v . | grep "^S" 
 
#例子：Windows
git ls-files -v . | findstr "^S" 

#输出：S filepath
```

不想继续忽略该文件时，使用<code class="default">git update-index --no-skip-worktree</code>命令，来让git不再忽略该文件。

```bash
#例子：
git update-index --no-skip-worktree web/main.dart
```

<el-backtop :visibility-height="0"></el-backtop>
<base-valine />