import React,{useContext} from 'react'

import {MyContext} from '@/view/component/Reducer'

const BoxStyle={background:'#fff',boxShadow:'0 0 5px #ccc',width:'95%',margin:'10px auto',padding:'10px',borderRadius:'5px',textAlign:'left'}
const _default = {
	     width:'100px',
	     lineHeight:'32px',
	     border:0,
	     backgroundColor:'#4687F2',
	     color:'#fff',
	     WebkitTapHighlightColor:'rgba(0, 0, 0, 0)',
	     outline:'none',
	     display:'block',
	     borderRadius:'5px',
}

export default ()=>{
 
 const {state,dispatch} = useContext(MyContext)
    
    return <div style={BoxStyle}>
		       
		       <h2>name:{state.name} </h2>
		        <h2> age:{state.age}</h2>
	            <div style={{display:'flex',justifyContent:'space-between',margin:'10px 0'}}>
			       <button style={_default} onClick={()=>dispatch({type:'setname',content:'nullno.com'})}>changeName</button>
			         <button style={_default} onClick={()=>dispatch({type:'setage',content:'27'})}>changeAge</button>
			     </div>
		    </div>

}