# vue2单页面仿小米有品项目

### 当前项目为脚手架驱动的开发模式
```
npm run serve
```

### 打包放入后端使用
```
npm run build
```

### vue技术栈相关
```
vue-reouter 单页面应用的核心，代码文件在src的router中管理。
axios在vue的mounted生命钩子中使用，请求后端带回数据进行解析并展示到页面。
vuex 管理用户的登录状态，处理整个网站中各个组件对用户信息显示的需求，使用模块化处理用户状态管理。
vue自定义事件使用：全局事件总线===>购物车页面兄弟组件间状态通信。
其他：遍布整个项目的props,computed...vue基础功能。
```

### node.js  使用express框架，作为该前端项目请求后端
```
https://github.com/XinYu12450/node.js-Express-WebPorject.git
```
