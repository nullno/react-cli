/**
 * 首页
 */

import React from 'react'


import indexCssObj from '@/skin/css/index.less'

// import * as API from '@/app/api.js'

import { GetMusicName } from '@/app/api.js'

export default class Home extends React.Component{
	  

	  constructor(props){
           super()
       
	       this.a=5;
	       this.b=6
	       this.state ={
	          name:{
	          	title:'等待接受数据改变...'
	          },
	          list:[]
	       }
	  }  
      
  

      componentDidMount(){
          this.GetMusicName()
      	
      }

	  render(){
	 
            	
          let childItems =  this.state.list.map((item,index)=>
          	<li className={indexCssObj['ltem']} 
          	    key={index}
          	    onClick={()=>this.changeTitle(item.name)}>
          	    <img src={item.album.artist.img1v1Url} />

          	    <span>{item.name}</span>
          	    </li>
          	);
            
           
	      return <div>
	                 <h1>Page1</h1>
				      <h2>{this.state.name.title}</h2>
				      <ul className={indexCssObj.list}>{childItems}</ul>
				 </div>
	  }
     
     changeTitle(item){
     	  let name = this.state.name;
              name.title = item;
          	  this.setState({name})	
     }

     GetMusicName(){
     	    GetMusicName({keywords:'视频'}).then(res=>{
				 // console.log(res)
                  let list = this.state.list;

                      list = res;

				   this.setState({list})
			}).catch(err=>{
				console.log(err)
			})
     }

}