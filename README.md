# react 脚手架

方便进行react web 项目开发，非管理端项目移除antd相关依赖包


### 开发目录结构
```text
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
 ```

### 使用

```
 npm run dev 开发环境

 npm run beta 打包测试环境

 npm run pro 打包正式环境

 ```   

### 路由嵌套
    在父级页面里需要的位置添加子路由
    如果设置redirect，也需要添加才可生效
    ```
          <this.props.Route />
    ```

### 路由嵌套
    在routes中可便捷添加路由渲染前状态
     ```
         function checkRouteInfo (route){

           if(route.auth){
              return {pass:false,component:()=><div>需要授权</div>}
           }else{
             return {pass:true}
           }

      } 
     ```  

### antd  @ant-design/icons 打包过大问题

    ```json 
     //.babelrc   
      {
        "presets":["env","stage-0","react"],
        "plugins":["transform-runtime",
                     
                   ["import", [{ "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]]
                   
                ]
     }
    ```   
    图标： 使用 `import 图标名字 from '@ant-design/icons/图标名字'`
  
 
### 开发移动端
    
    https://www.npmjs.com/package/hotcss

    ```html
    <meta name="hotcss" content="design-width=750">
    <script src="/path/to/hotcss.js"></script>
    <style>
    body {width:7.5rem;margin:0 auto;}
    </style> 
    ```
 
    setrem
    ```javascript
     (function (win, doc) {
      if (!win.addEventListener) return;
      var html = document.documentElement;
      function setFont() {
        var html = document.documentElement;
        var k = 750;//设计稿尺寸
        html.style.fontSize = html.clientWidth / k * 100 + "px";
      }
      setFont();
      setTimeout(function () {
        setFont();
      }, 300);
      doc.addEventListener('DOMContentLoaded', setFont, false);
      win.addEventListener('resize', setFont, false);
      win.addEventListener('load', setFont, false);
    })(window, document);
    ```

### 开发数据可视化项目
    
    https://antv.vision/zh    


### 问题
     
     JSON.stringify 报错->window.JSON.stringify 就正常 已解决（由于配置module.rules中的gif问题）


### 增加hook 演示的一些常用方法
