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

## hexo seo 方法

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
```

#### 添加百度 sitemap
#### 出站链接添加 “nofollow” 标签
#### 永久链接


## 感谢

* [Hexo网站优化之SEO](http://www.jeyzhang.com/hexo-website-seo.html)
* [Hexo NexT 主题SEO优化指南](https://blog.paddings.cn/2016/08/16/blog/Hexo-NexT-SEO/)

