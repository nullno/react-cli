/**
 * 导航
 */
import React from 'react'

import { NavLink } from 'react-router-dom';

import navCss from '@/skin/css/nav.less'

export default class Navigation extends React.Component{

  constructor(props){
         super(props)

      	 this.state={
      	 	 a:123
      	 }
  }

  render(){
    

                   
  	  return <ul className={navCss.nav}>
		              <li><NavLink to="/" exact activeClassName={navCss.on}>Home</NavLink> </li>
		              <li><NavLink to="/page2"   activeClassName={navCss.on}>Page2</NavLink> </li>
                  <li><NavLink to="/page3/456"  activeClassName={navCss.on}>Page3</NavLink> </li>
	  	        </ul>
  	        
  }

 

}
