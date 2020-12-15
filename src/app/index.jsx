/**
 * 界面管理 AppView
 */

import React from 'react'

import  { HashRouter as Router}  from 'react-router-dom';

import commcss from '@/skin/css/comm.css' 

import Navigation from '@/view/navigation'

import Routes from '@/app/routes'

//这样写法有点难受  <Redirect to="/notfound" exact key="notfound"/>
// const Hi = React.createElement('div',{a:123,style:{color:'red'}},'hi re','123','15151')

//采用jsx 写法 安装babel loader 	  <div className="bananer"></div><Routes/>


import Imgset from '@/app/imgset'

const AppView =()=><Router>
				      <img src={Imgset['test_png']} className="bananer"/>
				      <Routes/>
					  <Navigation></Navigation>
				   </Router>


export default AppView;