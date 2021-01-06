
import React,{useContext,useMemo} from 'react';

// import MyContext from 'createContext 组件'

export default (props)=>{
     
     // 使用createContext
     //  let content = useContext(MyContext)
        function nc(val){
            	 console.log('content 变化');
            	 return val;
            }

     let content = props.content
     const setContent = props.option;

     let newContent = nc(content); //不管什么值改变都会执行


	 return <div>
	       <input value={newContent}  onChange={(el)=>{
                 setContent(el.target.value)
	          }}/>
	        
	           
	          </div>;
}