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
               
               const [pool,setPool] = useState({})
                
               
               const  myBotton =useRef(null)

		       const ref = useRef({a:5});//存储数据

		       const  inputEl1 = useRef(null),//创建一个ref

		              inputEl2 = useRef(null);//创建一个ref

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

                
                 //pool变化执行 受子组件3影响
	             let num_once =  useMemo(()=>{
                           return num;
	               },[pool])


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
						 <input ref={inputEl1} value={content} onChange={(el)=>{
		                 	 // setContent(el.target.value)
		                 	  setContent(inputEl1.current.value)
		                 }}/>
						 
						 <h2>num_memo:{num_memo} </h2>
						 <input ref={inputEl2} value={num} onChange={(el)=>{
		                 	 // setContent(el.target.value)
		                 	  setNumber(inputEl2.current.value)
		                 }}/>

						  <h2>num_once(点击):{num_once} </h2>
						  
		              
						
						 <div style={{display:'flex',justifyContent:'space-between',margin:'10px 0'}}>
						 	
						 	 <button style={_default} onClick={()=>{
						 	 	setContent('')
						 	    setNumber('')
						 	    setPool('')
						 	 }}>重置</button>

							 <button style={_default} onClick={()=>{
							 	getChildSomething.current.InputElFocus()
                                  
							 	console.log('ha3:',childRef);

							 	setPool(childRef.current)
							 }}>
	                             获取组件
							 </button>
						 </div>

						 <div style={{background:'#ccc',padding:'5px'}}>
						 	来自子组件useImperativeHandle:<p style={{color:'green'}}>{JSON.stringify(pool)}</p> 
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
