---
title: linux tool boxes
date: 2017-10-14 14:39:25
categories:
- 编程
tags:
- linux
- tools
- ascii art
---

> Boxes is a command line program that draws a box around its input text. It can remove and repair those boxes, too. You can easily make your own box designs if you wish, but many designs are already provided.

boxex 是 linux 下的一款命令行工具，可以用字符组成盒子把你的文字包围在里面。
就像下面这样：

```
    Hello World!  ==>

     __________________
    /\                 \  
    \_|                |  
      |  Hello World!  |  
      |                |  
      |  ______________|_ 
      \_/_______________/
    
    
    /******************/
    /*                */
    /*  Hello World!  */
    /*                */
    /******************/
     
             \\\///
            / _  _ \
          (| (.)(.) |)
    .---.OOOo--()--oOOO.---.
    |                      |
    |     Hello World!     |
    |                      |
    '---.oooO--------------'
         (   )   Oooo.
          \ (    (   )
           \_)    ) /
                 (_/

```
    

安装
-----------------------

**Debian** 和 **debian-based**, 如 **Ubuntu**, 还有 **Windows 10 Ubuntu Subsystem**，安装都很简单，
只需要命令行执行： 

`apt-get install boxes`

使用
-----------------------

`boxes --help`  查看帮助。linux工具使用大法，先看帮助。
`boxes -l`  查看有多少可以使用的盒子格式。 已知有个叫`dog`的盒子模型。
输入`echo "I am testing" | boxes -d dog -a c` 将生成：
```
          __   _,--="=--,_   __
         /  \."    .-.    "./  \
        /  ,/  _   : :   _  \/` \
        \  `| /o\  :_:  /o\ |\__/
         `-'| :="~` _ `~"=: |
            \`     (_)     `/
     .-"-.   \      |      /   .-"-.
.---{     }--|  /,.-'-.,\  |--{     }---.
 )  (_)_)_)  \_/`~-===-~`\_/  (_(_(_)  (
(             I am testing              )
 )                                     (
'---------------------------------------'
```
`-d` 参数表示选择哪一个盒子模型，
`-a` 参数表示对齐方式。

自定义盒子模型
-------------------

这个工具还支持自定义盒子模型。

我的使用方法
-------------------

我配合boxes 写了个vim插件，每次写代码的时候，就把这个狗头放在我代码的开头

```
/* * 
 * @file 
 * @Brief  
 * @author                                                                                                                       
 * @version v1.0
 * @date 2016-10-31
 *
 *           __   _,--="=--,_   __
 *          /  \."    .-.    "./  \
 *         /  ,/  _   : :   _  \/` \
 *         \  `| /o\  :_:  /o\ |\__/
 *          `-'| :="~` _ `~"=: |
 *             \`     (_)     `/
 *      .-"-.   \      |      /   .-"-.
 * .---{     }--|  /,.-'-.,\  |--{     }---.
 *  )  (_)_)_)  \_/`~-===-~`\_/  (_(_(_)  (
 * (        0 Error(s) 0 Warning(s)        )
 *  )       xxxxxx Wang@xxxxxx            (
 * '---------------------------------------'            
 *                     
 */
```

是不是也挺有意思的。

其他
-----------------

* [boxes主页](http://boxes.thomasjensen.com/)
* [github源码](https://github.com/ascii-boxes/boxes)

