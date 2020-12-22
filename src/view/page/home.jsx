/**
 * 首页
 */

import React from 'react'


import indexCssObj from '@/skin/css/index.less'

import { List,message, Avatar, Spin,Button,Empty   } from 'antd'

// import {LoadingOutlined} from '@ant-design/icons';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined'


// import * as API from '@/app/api.js'

import { GetMusicName } from '@/app/api.js'

const antIcon = <LoadingOutlined style={{ fontSize: 24}} spin />;



export default class Home extends React.Component{
	  

	  constructor(props){
           super()
       
	       this.a=5;
	       this.b=6
	       this.state ={
	          name:{
	          	title:'等待接受数据改变...'
	          },
	          list:[],
	          loading: false,
              hasMore: true,
	       }
	  }  
      
      componentDidMount(){

      	 this.GetMusicName()

      }
      componentWillUnmount(){
      	console.log('un');
      }

	  render(){
         {/* let childItems =  this.state.list.map((item,index)=><li className={indexCssObj['ltem']} 
	          	    key={index}
	          	    onClick={()=>this.changeTitle(item.name)}>
	          	    <img src={item.album.artist.img1v1Url} />

	          	    <span>{item.name}</span>
	          	    </li>
	          	);
	            */}
        
	         
            const MusicList =  <List

					            dataSource={this.state.list}
					            renderItem={item => (
					              <List.Item key={item.id}  onClick={()=>this.changeTitle(item.name)}>
					                <List.Item.Meta
					                  avatar={
					                    <Avatar src={item.album.artist.img1v1Url} />
					                  }
					                  title={<a href="#">{item.name}</a>}
					                  description="test description"
					                />
					                <div>Content</div>
					              </List.Item>
					            )}
					          >
					            {/*加载状态 没有节点会显示空数据 */}
							   {this.state.loading && (
							     <div className={indexCssObj['loading-container']}>
							       <Spin indicator={antIcon}  tip="加载中..." style={{color:'rgba(0,0,0,.45)'}}/>
							     </div>
							   )}
							   
					          </List>
           
	      return <div>
	                 <h1>Page1</h1>
				      <h2>{this.state.name.title}</h2>
				      <div className={indexCssObj.list}> 
				       {MusicList}
				      </div>
				 </div>
	  }

     
     changeTitle(item){
     	  let name = this.state.name;
              name.title = item;
          	  this.setState({name})	
     }

     GetMusicName(){
     	    this.setState({loading:true},function(){

     	    	GetMusicName({keywords:'视频'}).then(res=>{
				 // console.log(res)
                  let list = this.state.list;

                      list = res;

				   this.setState({list,loading:false,});
				

					}).catch(err=>{
						console.log(err)
					})
     	    });

     	    
     }

}