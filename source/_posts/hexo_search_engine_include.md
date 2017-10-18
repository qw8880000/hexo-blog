---
title: 让搜索引擎收录hexo博客 | hexo
date: 2017-10-17 21:39:45
categories:
    - 编程
tags:
    - hexo
abbrlink: 27104d21b87c0633
---

当我们一开始建完博客时，搜索引擎是搜索不到的，我们需要做一项工作就是通知搜索引擎收录我们的网站。

## 如何被百度收录

这里需要做两个事情，一个是`验证网站`，一个是`链接提交`.

### 验证网证

我们到百度站长平台里面的[站长工具]里面去验证网站，大概步骤如下：
1. 第一步：输入网站
1. 第二步：站点属性
1. 第三步：验证网站

前两步都很简单，第三步：验证网站有以下三种方法：
* 文件验证
* HTML标签验证
* CNAME验证

这里我们选择`文件验证`的方法，然后会得到一个`baidu_verify_xxxxx.html`文件。
我使用的主题是`next`，所以我把这个验证文件放在`theme/next/source/`根目录下面，
这样当我们编译网站`hexo generate`的时候，这个文件会被原封不动的拷贝到我们博客的`public/`根目录下。

好，重要编译hexo并部署，完成验证.

### 链接提交

接下来我们进入[链接提交].
链接提交有`手动`和`自动`两种方法，手动就是每次你有新的链接生成，你就需要手动提交链接到百度，这种方法太麻烦了，不使用。
`自动`提交有三种方式：
1. 主动推送(实时) 
1. 自动推送 
1. sitemap

这里我们选择`sitemap`方式。

* 安装hexo的sitemap网站地图生成插件
```
npm install hexo-generator-baidu-sitemap --save
```

* 在你的hexo站点的`_config.yml`添加下面的代码
```
# hexo sitemap网站地图
baidusitemap:
    path: baidusitemap.xml
```

* 配置成功后，hexo编译时会在hexo站点根目录生成`baidusitemap.xml`，部署网站后，提交到百度：

![image](http://oxnimkw03.bkt.clouddn.com/20171018150633.png)


完成上述步骤后，我们可以在百度搜索框里输入`site:wangjinle.com`(这里换成你自己的域名)，来查看收录情况。

## 如何被谷歌收录

方法同上。

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[百度站长平台]:(http://zhanzhang.baidu.com)
[站长工具]:(http://zhanzhang.baidu.com/dashboard/index)
[链接提交]:(http://zhanzhang.baidu.com/linksubmit/index)

