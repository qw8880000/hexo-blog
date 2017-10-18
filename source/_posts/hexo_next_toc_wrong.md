---
title: next主题文章目录的标题排列错误 | hexo
date: 2017-10-18 17:46:32
categories:
    - 编程
tags:
    - hexo
    - hexo next
abbrlink: aea643f88e8ace5a
---

使用hexo的next主题，无意中发现有一篇文章的目录排列出错了，如下效果：
![image](http://oxnimkw03.bkt.clouddn.com/20171018174529.png)


原因是因为next自带的文章目录解析工具要求标题的排列格式是：
```
H2
  H3

H2
  H3
    H4

H2
  H3
    H4
  H3
    H4
      H5
    H4
      H5
        H6
```

而我的标题排列为：
```
## hexo seo 方法

#### 添加sitemap
```

从`H2`跳到了`H4`，导致解析出错。原因找到后，修复问题后，正常如下：
![image](http://oxnimkw03.bkt.clouddn.com/20171018174603.png)

