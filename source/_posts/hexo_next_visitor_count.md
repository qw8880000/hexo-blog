---
title: 网站访问量统计 | hexo
date: 2017-10-17 15:50:47
categories:
    - 编程
tags:
    - hexo
    - hexo next theme
abbrlink: 916d83182e15eeb1
---

这里使用的是[不蒜子]提供的阅读统计功能，使用的hexo主题是next。
![image](http://oxnimkw03.bkt.clouddn.com/20171017172318.png)

以下是方法。

### 添加是否开启统计功能的配置

找到next主题的配置文件`themes/next/_config.yml`，找到原来的`footer`字段，加入一个配置，这里我们叫它`counter`吧，即
```
footer:
  # -------------------------------------------------------------
  # visitors count
  counter: true
```

### 修改next主题的模板文件

由于是把访问量统计放在网页的`footer`，所以我们需要修改的模板文件是`theme/next/layout/_partials/footer.swig`。
我们在合适的位置加入：
```
{% if theme.footer.counter %}
    <script async src="//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"></script>

    <span id="busuanzi_container_site_pv">总访问量<span id="busuanzi_value_site_pv"></span>次</span>
    <span class="post-meta-divider">|</span>
    <span id="busuanzi_container_site_uv">总访客<span id="busuanzi_value_site_uv"></span>人</span>
    <span class="post-meta-divider">|</span>

{% endif %}
```

访问量统计的效果：
![image](http://oxnimkw03.bkt.clouddn.com/20171017165533.png)

### 不蒜子统计说明

不蒜子有两种统计方法：

1. pv的方式，单个用户连续点击n篇文章，记录n次访问量
```
    <span id="busuanzi_container_site_pv">
        总访问量
        <span id="busuanzi_value_site_pv"></span>
        次
    </span>
```

1. uv的方式，单个用户连续点击n篇文章，只记录1次访客数
```
    <span id="busuanzi_container_site_uv">
        总访客
        <span id="busuanzi_value_site_uv"></span>
        人
    </span>
```


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[不蒜子]:(http://busuanzi.ibruce.info/)

