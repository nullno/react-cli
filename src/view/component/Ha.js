
import React,{useEffect,useRef,useMemo} from 'react';


export default ({content,option,getChild})=>{
            
           const inputEl = useRef();
                    
              getChild.current = {
              	  InputElFocus:function(){
              	  	   inputEl.current.focus()
              	  	   inputEl.current.value='已获取焦点'
              	  }
              };
 
            //使用memo 后 不改变content 值，不再调用 nc 方法 可与ha2对比
            let newContent = useMemo(()=>{
            	console.log('num 变化');
            	 return content
            },[content]);//只有name 改变时才执行
            

	 return <div>
	          <input  ref={inputEl} value={newContent}  onChange={(el)=>{
                  if(!/\D/.test(event.data) || event.data==null){
                  	   option(el.target.value)
		             	
		             }
	          }}
            
	          />
	          <h2>{newContent}</h2>

	          </div>;
}