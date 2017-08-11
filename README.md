# 前言
这个仓库自己用来练习git，gulp，sass等技能，简单模仿天猫首页的菜单，通过这个比较实际的小demo来熟悉每个技能。
# 项目运行
    npm install
### 还可以使用cnpm更快地安装
    $ npm install -g cnpm --registry=https://registry.npm.taobao.org
    然后使用
    cnpm install
### 接下来执行glup操作
    gulp styles (编译css文件)
### 打开项目
    直接打开index.html

# 截图演示
  ![](./screenshot/demonstration.gif "演示图片")

# 项目结构
```
.
├── ./caomei    //caomei icon
│   ├── ./caomei/fonts
│   │   ├── ./caomei/fonts/strawberryicon.eot
│   │   ├── ./caomei/fonts/strawberryicon.svg
│   │   ├── ./caomei/fonts/strawberryicon.ttf
│   │   └── ./caomei/fonts/strawberryicon.woff
│   ├── ./caomei/Read Me.txt
│   ├── ./caomei/selection.json
│   └── ./caomei/style.css
├── ./css   //css file
│   ├── ./css/_app.scss  //main css
│   ├── ./css/_base.scss 
│   ├── ./css/_color.scss
│   ├── ./css/_mixin.scss
│   ├── ./css/_normalize.scss
│   ├── ./css/style.scss
│   └── ./css/_variable.scss
├── ./data
│   └── ./data/data.js  //data
├── ./gulpfile.js
├── ./images   // all of image
│   ├── ./images/10.jpg
│   ├── ./images/11.jpg
│   ├── ./images/12.jpg
│   ├── ./images/13.jpg
│   ├── ./images/14.jpg
│   ├── ./images/15.jpg
│   ├── ./images/16.jpg
│   ├── ./images/17.jpg
│   ├── ./images/1.jpg
│   ├── ./images/2.jpg
│   ├── ./images/3.jpg
│   ├── ./images/4.jpg
│   ├── ./images/5.jpg
│   ├── ./images/6.jpg
│   ├── ./images/7.jpg
│   ├── ./images/8.jpg
│   └── ./images/9.jpg
├── ./index.html
├── ./js
│   ├── ./js/art-template.js
│   └── ./js/user.js
├── ./package.json
├── ./README.md
└── ./screenshot
    └── ./screenshot/demonstration.gif

```

