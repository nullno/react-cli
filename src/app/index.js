/**
 * 界面管理 AppView
 */

import React from 'react'

import  { HashRouter as Router}  from 'react-router-dom';

import resetcss from '@/skin/css/reset.css' 
//使用ant design
import { ConfigProvider  } from 'antd'

// import antdcss from 'antd/dist/antd.min.css'

import zhCN from 'antd/lib/locale/zh_CN'




import Navigation from '@/view/navigation'

import Routes from '@/app/routes'

import Test_png from '@/skin/img/test.png'

const AppView =()=><Router>
                       <ConfigProvider locale={zhCN}>
				      <img src={Test_png} className="bananer"/>
				      <Routes/>
					  <Navigation></Navigation>
					   </ConfigProvider>
				   </Router>


export default AppView;