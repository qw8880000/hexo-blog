---
title: SEO搜索引擎优化 | hexo
date: 2017-10-17 17:44:46
categories:
    - 编程
tags:
    - hexo
    - hexo seo
abbrlink: 0d8d910e8b267677
---

SEO (Search Engine Optimization)，即搜索引擎优化。对网站做SEO优化，有利于提高搜索引擎的收录速度及网页排名。
这里主要是对网上常见的hexo的SEO方法进行整理。

在SEO之前，我们得先让搜索引擎收录我们的站点，具体可以参考[让搜索引擎收录hexo博客 | hexo](http://blog.wangjinle.com/posts/27104d21b87c0633.html).

## hexo seo 方法

#### 添加sitemap

参考[让搜索引擎收录hexo博客 | hexo](http://blog.wangjinle.com/posts/27104d21b87c0633.html).

#### 添加蜘蛛协议 robots

robots.txt是一种存放于网站根目录下的ASCII编码的文本文件，它的作用是告诉搜索引擎此网站中哪些内容是可以被爬取的，哪些是禁止爬取的。robots.txt应该放在站点目录下的source文件中，网站生成后在网站的根目录(站点目录/public/)下。

robots.txt示例:
```
User-agent: *
Allow: /
Allow: /archives/
Allow: /categories/
Allow: /about/

Disallow: /vendors/
Disallow: /js/
Disallow: /css/
Disallow: /fonts/
Disallow: /vendors/
Disallow: /fancybox/

Sitemap: http://blog.wangjinle.com/sitemap.xml
Sitemap: http://blog.wangjinle.com/baidusitemap.xml
```

#### 出站链接添加 “nofollow” 标签

网络爬虫会在当前页面搜索所有的链接，然后一个个查看，所以就很有可能跳到别的网站就不回来了。这个时候就需要nofollow起作用了。
nofollow标签是由谷歌领头创新的一个“反垃圾链接”的标签，并被百度、yahoo等各大搜索引擎广泛支持，引用nofollow标签的目的是：用于指示搜索引擎不要追踪（即抓取）网页上的带有nofollow属性的任何出站链接，以减少垃圾链接的分散网站权重。

这里我们使用hexo的插件来自动帮我们处理出站链接。

* 首先，安装插件
```
npm install hexo-autonofollow --save
```

* 然后，编辑站点配置文件`_config.yml`，加入配置
```
nofollow:
	enable: true
	exclude:
    - wangjinle.com
```
这里，我的域名是`wangjinle.com`，把自己想保留的域名加在`exclude`字段里。

#### 永久链接


## 感谢

* [Hexo网站优化之SEO](http://www.jeyzhang.com/hexo-website-seo.html)
* [Hexo NexT 主题SEO优化指南](https://blog.paddings.cn/2016/08/16/blog/Hexo-NexT-SEO/)

