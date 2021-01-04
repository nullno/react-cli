/**
 * 路由管理 routes
 * view/page放入页面主结构集合
 * 自定义配置匹配参数 /page(.*?)\.jsx$/
 * 现在的React Router版本中已不需要路由配置，现在一切皆组件,这里只动态载入界面大结构框架
 * 呈现子路由方式通过this.props.Route嵌入父级的需要放的位置
 * 如果设置重定向 需使用Switch组件包裹
 */
import React from 'react'
import { Route,Switch,Redirect  }  from 'react-router-dom';


//获取@/view/page下页面组件
const Pageset = {}// get all page.jsx

const requireComponent = require.context('@/view/page',false,/\.jsx$/)

      requireComponent.keys().forEach((fileName) => {

         const componentConfig = requireComponent(fileName);

         const componentName = fileName.replace(/\./g, '').replace('jsx', '').replace(/\//g, '');
          
          Pageset[componentName] = componentConfig.default;
      })

console.log('路由页面',Pageset)

//路由表配置
const RoutesForm = [
                   {
                    path: '/notfound',
                    component:Pageset.notfound,
                    mate:{
                       title:'404'
                    }
                  },
                  {
                    path: '/',
                    component:Pageset.home,
                    mate:{
                       title:'主页'
                    }
                  },
                   {
                    path: '/page2',
                    component: Pageset.page2,
                    redirect:'/page2/page2-1',
                    mate:{
                       title:'page2'
                    },
                    children:[
                        { path: '/page2/page2-1',
                         component: Pageset['page2-1'],
                        },
                        { path: '/page2/page2-2',
                         component: Pageset['page2-2']
                        }

                     ],

                  },
                   {
                    path: '/page3/:id',
                    component: Pageset.page3,
                    mate:{
                       title:'page3'
                    },
                    auth:true
                  },
                 
                ];

//路由守卫（授权登录通过即渲染路由,切换标题登录态等）
/**
 * [checkRouteInfo description]
 * @param  {[Object]} route [路由信息]
 * @return {[Boolean]} pass  [通过状态]
 * @return {[component]}component [自定义组件]
 */
function checkRouteInfo (route){

     // route.mate.title && (document.title=route.mate.title); 
     if(route.auth){
        // return {pass:false,component:()=><Redirect to="/login"/>},
        return {pass:false,component:()=><div>需要登录</div>}
     }else{

       
       return {pass:true}
     }
     
} 



//解析路由表为路由页面组件<Route> ={route.path=='/'}
const analyzeRoutes=(_routes,root)=>{
        
    if(!_routes || _routes.length==0)return [];
      
     const temp_routes  = _routes.map((route,i)=>{
              return  <Route
                       key={i}
                       exact = {route.children?false:true}
                       path={route.path}
                       render={(routeInfo) => {     
                             const checkResult = checkRouteInfo(route);
                        
                             return checkResult.pass?
                                    <route.component 
                                     Route={()=><Switch>{analyzeRoutes(route.children,false).concat(route.redirect?<Redirect to={route.redirect} key={route.redirect}/>:null)}</Switch>} 
                                     $route={routeInfo} 
                                     mate={route.mate}
                                     />:<checkResult.component/>  
                           }
                       }
                       /> 
            
        })
         
       return temp_routes;
}

const PageRoutes =  ()=>{
               const  RootRoutes =  ()=>analyzeRoutes(RoutesForm,true)

              return <Switch>
                       {analyzeRoutes(RoutesForm,true)}
                       <Redirect to="/notfound" exact key="notfound"/>  
                     </Switch>
} 

export default PageRoutes;
