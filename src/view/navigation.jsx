/**
 * 导航
 */
import React from 'react'

import { NavLink } from 'react-router-dom';

import navCss from '@/skin/css/nav.less'

import {  Row, Col  } from 'antd'

// import {NumberOutlined,PhoneOutlined,PaperClipOutlined} from '@ant-design/icons'

import NumberOutlined from '@ant-design/icons/NumberOutlined'
import PhoneOutlined from '@ant-design/icons/PhoneOutlined'
import PaperClipOutlined from '@ant-design/icons/PaperClipOutlined'

export default class Navigation extends React.Component{

  constructor(props){
         super(props)

      	 this.state={
      	 	   a:123
      	 }


  }

  render(){
        // console.log(location);

  	  return <Row className={navCss.nav}>
               <Col span={8}><NavLink to="/" exact activeClassName={navCss.actived}><NumberOutlined className={navCss.anticon}/> <span>Home</span> </NavLink> </Col>
               <Col span={8}><NavLink to="/page2"  activeClassName={navCss.actived}><PhoneOutlined className={navCss.anticon}/><span>Page2</span> </NavLink> </Col>
               <Col span={8}><NavLink to="/page3/666"  activeClassName={navCss.actived}><PaperClipOutlined className={navCss.anticon}/><span>Page3</span> </NavLink> </Col>
            </Row>
            
  	        
  }

 

}
