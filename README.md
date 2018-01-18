# hexo-blog

使用hexo构建的静态博客。本仓库是hexo博客的框架 + next主题风格，克隆后可直接使用。效果见[好好编程](http://www.wangjinle.com/)。

# 开始

首先安装javascript包管理器[npm](https://www.npmjs.com/)，下载链接：[Download Node.js and npm](https://nodejs.org/en/)。

然后进入以下操作：
1. 克隆本仓库
1. 执行`cd hexo-blog`进入hexo-blog目录
1. 执行`npm install`安装依赖
1. 执行`npm install -g hexo-cli`安装hexo工具
1. 把你的文章(`.md`文件)放入`source`目录
1. 执行`hexo server`启动hexo服务
1. 打开浏览器，输入`http://localhost:4000`查看效果

# 生成静态文件

使用`hexo generate`命令，将会进行博客的构建，把必要的文件转换为html文件，存放在`public`目录。此时`public`里面的内容就是一个完整的静态博客，只需要把它部署到服务器上就可以了。

# 部署

如果想让互联网上的所有人能访问你的博客，那需要把博客部署到服务器上，再绑定上域名。如果没有自己的域名和服务器，可以使用github本身提供的`github pages`服务。

下面简单介绍一下如何使用`github pages`来托管静态博客：
* 使用你自己的github账号新建一个仓库，比如叫`blog-test`
* 在`blog-test`中新建一个目录`public`，用来存放博客页面
* 在`public`目录中新建一个`index.html`文件，然后文件的内容随便写一个`hello world!`
* 进入`blog-test`的`Settings`，找到`GitHub Pages`项，然后在`source`子选项里选择`master`分支
* 执行上述操作后，在`GitHub Pages`处会出现提示`Your site is ready to be published at https://qw8880000.github.io/blog-test/.`（该地址只是示例，不同的账户不一样），说明成功了
* 接下来，浏览器中使用`https://qw8880000.github.io/blog-test/public`访问，如果浏览器显示`hello world`说明配置成功

说到这里想必你已经明白了，github为我们提供了一个域名`https://<账号名>.github.io/<仓库名>`，并且帮我们托管了该仓库的文件。如果把`hexo`生成的`public`目录的内容放在这里，那么静态博客就算托管完成了，可以使用域名进行访问了。

# 更多

* [hexo](https://hexo.io/zh-cn/)
* [hexo-theme-next](https://github.com/theme-next/hexo-theme-next)
* [github pages](https://pages.github.com/)

