---
title: 搜索引擎收录hexo博客 | hexo
date: 2017-10-17 21:39:45
categories:
    - 编程
tags:
    - hexo
abbrlink: 27104d21b87c0633
---

## 如何被百度收录

到百度站长平台里面的[站长工具]，找到[链接提交]，按要求步骤完成链接提交，大概步骤如下：
1. 第一步：输入网站
1. 第二步：站点属性
1. 第三步：验证网站

前两步都很简单，第三步：验证网站有以下三种方法：
* 文件验证
* HTML标签验证
* CNAME验证

这里我们选择`文件验证`的方法，然后会得到一个`baidu_verify_xxxxx.html`文件。
我们把这个验证文件放在hexo博客的`source/`根目录下面，当我们编译网站`hexo generate`的时候，这个文件会被拷贝到我们博客的`public/`根目录下。

## 如何被谷歌收录


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[百度站长平台]:(http://zhanzhang.baidu.com)
[站长工具]:(http://zhanzhang.baidu.com/dashboard/index)
[链接提交]:(http://zhanzhang.baidu.com/linksubmit/index)

