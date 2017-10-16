---
title: 像极客一样写作
date: 2017-10-14 14:39:25
categories:
  - 杂记
tags:
  - git
  - markdown
  - 写作
abbrlink: c52f3bf4214af8ab
---

回顾一下我做笔记过程：
一开始使用的是myBase软件，在分类存储管理上做得很好，作为工作笔记使用了一年。
后来发觉这个软件无法在不同的设备间同步数据，或者我没发现这个功能，就果断弃用。
然后就是使用云笔记evernote，它在电脑、移动端都有软件，可以互相同步数据， 网页文章保存、微博收藏等功能都很不错。

但是随着文章数量的增多，evernote的两个缺点越来越让我无法忍受：
* 无法迁移文章到另一个软件，或者迁移非常麻烦；
* 文章格式渲染麻烦，每篇文章都要编辑一次。

于是我又弃用了evernote，然后选择了 `markdown + git` 这样的写作方式。

markdown + git
-----------------------------------

这种写作方式使用**markdown**语法来标记内容，使用**git**文件对文件进行版本管理，然后git服务器选用**github**。
使用markdown语法是为了把注意力放在写作内容上而不是漂亮的格式，使用git与github是为了把自己的数据托管在云服务器上。

有一定的技术门槛，需要掌握：
* markdown语法
* git
* github

> markdown：是一种轻量级标记语言。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档”。

> git：一个分布式版本控制软件

> github：GitHub是一个通过Git进行版本控制的软件源代码托管服务

具体是怎么做的呢
-----------------------------------

就拿本文章举例。

新建一个`write_as_a_geek.md`文件，使用任意一个文本编辑器（记事本、notepad++、Vim等），
使用markdown语法写下以下内容：

```
markdown + git
-----------------------------------

这种写作方式使用**markdown**语法来标记内容，使用**git**文件对文件进行版本管理，然后git服务器选用**github**。
使用markdown语法是为了把注意力放在写作内容上而不是漂亮的格式，使用git与github是为了把自己的数据托管在云服务器上。

有一定的技术门槛，需要掌握：
* markdown语法
* git
* github

> markdown：是一种轻量级标记语言。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档”。

> git：一个分布式版本控制软件

> github：GitHub是一个通过Git进行版本控制的软件源代码托管服务

```

然后可以使用markdown转换软件来预览转换成HTML的效果。
我使用的转换软件是chrome + markdown preview plus插件，效果如下

![image](http://oxnimkw03.bkt.clouddn.com/markdown.png)

接着，我把文章上传到github服务器上，等我回到家，我可以把文章从服务器同步到我个人电脑上。

这样，只要github服务器不挂，我的文章就不会丢。
即使github挂了，我本地还保留着文章，再找一个新的git服务器托管就是了。

更方便的gitbook editor
------------------------------

当我使用上述方法写作一段时间后，无意间发现了一款软件 **gitbook editor**。
`gitbook editor` 使用Github/Git + markdown创建漂亮的图书。
它是集markdown编辑、markdown预览、git管理于一身的一个软件。还支持生成静态网站、输出PDF。
界面很清爽，就像这样：

![image](https://gitbookio.github.io/blog/assets/2014-11-29-webeditor.png)

有兴趣的同学可以搜索`gitbook`、`github editor`。
总之，万变不离其宗，选一个最适合你的才是最好的。


