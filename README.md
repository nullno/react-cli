# react 脚手架

方便进行react web 项目开发 

开发目录结构：
└── src
    ├── index.html (html模板)
    ├── main.js (主入口)
    ├── skin (皮肤文件，图片,样式 字体...)
    ├── app (主程管理)
        └── api.js (接口集合)
        └── imgset.js (图片集合)
        └── routes.jsx (路由集合)
        └── index.jsx (界面管理)
    ├── view (视图组件)
        └── page (路由页面)
        └── 其他组件
    

### 使用

```
 npm run dev 开发环境

 npm run beta 打包测试环境

 npm run pro 打包正式环境

 ```   


### @ant-design/icons 打包过大问题，无法按需加载

   使用 `import 图标名字 from '@ant-design/icons/图标名字'`
 