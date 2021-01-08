/**
 * page2
 */
import React from 'react'
import { NavLink,Switch } from 'react-router-dom';



class Page2 extends React.Component{

  constructor(props){
  	super(props)
  }
  

  render(){
        
      const Routes = this.props.Route
	// const {match,location} = this.props.$route
 //  console.log('Page2',location);

	return <div style={{minHeight:'200px',paddingBottom:'100px',textAlign:'center'}}> 
              <h1>Page2</h1>
              <div style={{display:'flex',justifyContent:'space-around',background:'#000'}}>
               <NavLink to="/page2/page2-1" style={{color:'#fff'}} activeStyle={{color:'red'}}>page2-1</NavLink>
               <NavLink to="/page2/page2-2" style={{color:'#fff'}} activeStyle={{color:'red'}}>page2-2</NavLink>
              </div> 
               <Routes/>
               
        
	       </div>
   }

}

export default Page2