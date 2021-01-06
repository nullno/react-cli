import React,{useState,useRef,useEffect,useContext,useMemo} from 'react'


import Ha from './Ha'

import Ha2 from './Ha2'

import Ha3 from './Ha3'

const _default = {
	     width:'100px',
	     lineHeight:'32px',
	     border:0,
	     backgroundColor:'#4687F2',
	     color:'#fff',
	     WebkitTapHighlightColor:'rgba(0, 0, 0, 0)',
	     outline:'none',
	     display:'block',
	     borderRadius:'5px'
}

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const BoxStyle={background:'#fff',boxShadow:'0 0 5px #ccc',width:'95%',margin:'10px auto',padding:'10px',borderRadius:'5px'}





const ThemeContext = React.createContext();


// 创建公共容器，子组件可方便接受数据
const MyContext = React.createContext();




function Change(val){

         setContent(()=>{
  
         	  return val==5?'button123':false; 
  
         })

}


const ButtonItems=(props)=>{

		       const [content,setContent] = useState('hi')

		       const [num,setNumber] = useState(0)

                
               
               const  myBotton =useRef(null)



		       const ref = useRef({a:5});//存储数据

		       const  inputEl = useRef(null)//创建一个ref

		       const getChildSomething = useRef(null);

		       const childRef = useRef(null);
		      
                 // 卸载组件执行   
		        useEffect(()=>{
		           	   return()=>{
		           	   	console.log('unmount')
		           	   }
		         },[])
                   
                useEffect((e)=>{
		    
		           	 // console.log(myBotton.current);
		         })   

                
	             let num_once =  useMemo(()=>{
	             
                           return num;
	               },[content])

	              let num_memo =  useMemo(()=>{

                           return  num;
	               },[num])
	             
                     /*
                      <MyContext.Provider value={content}>
                          <Ha  option={setContent}/>
                     </MyContext.Provider>*/
	     return   <div ref={myBotton}>
 
	               <div style={BoxStyle}>   


	                 <h1>父组件：</h1>
						   <h2>content:{content} </h2>
						  <h2>num:{num_memo} </h2>
						  <h2>num(只执行一次):{num_once} </h2>
						  
		                 <input ref={inputEl} value={content} onChange={(el)=>{
		                 	 // setContent(el.target.value)
		                 	  setContent(inputEl.current.value)
		                 }}/>
						 
						 <div style={{display:'flex',justifyContent:'space-between',margin:'10px 0'}}>
						 	
						 	 <button style={_default} onClick={()=>setContent('')}>重置(content)</button>

							  <button style={_default} onClick={()=>setNumber(num+5)}>setNumber</button>
							   

							 <button style={_default} onClick={()=>{
							 	getChildSomething.current.InputElFocus()

							 	console.log('ha3:',childRef);
							 }}>
	                             获取组件
							 </button>
						 </div>
						
	                   <div style={BoxStyle}>
		                    <h2>子组件1(num)：</h2>
	                        <Ha content={num_memo}  option={setNumber} getChild={getChildSomething}/>
                        </div>


                        <div style={BoxStyle}>   
	                        <h2>子组件2(content)：</h2>
	                        <Ha2 content={content}  option={setContent}/>
                        </div> 


                        <div style={BoxStyle}>    
	                         <h2>子组件3：</h2>
	                         <Ha3 ref={childRef}/> 
                         </div>  

				       </div>


	              </div>  
}

export default (props)=>{

	  return <ThemeContext.Provider value={themes.light}>
	              <ButtonItems/>
			     
	        </ThemeContext.Provider>
}
