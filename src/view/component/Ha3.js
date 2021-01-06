import React,{useState,useMemo,forwardRef,useImperativeHandle} from 'react'


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

export default forwardRef((props,myref)=>{
       
      const [content,setContent] = useState(0);

       const [sendNum,setSendNum] = useState(0);
        
        //num变化发送myref的值
        useImperativeHandle(myref,()=>({
        	name:'laowei',
        	content
        }),[sendNum]) 
        
        //num变化发送myref的值
        const content_memo = useMemo(()=>content,[sendNum])

	return <div>
	        {/*<h1 ref={myref}>15151</h1>*/}
	         <h1>content_memo:{content_memo}</h1>
	         <h1>content:{content}</h1>
             <h1>sendNum:{sendNum.toString()}</h1>

              <div style={{display:'flex',justifyContent:'space-around',margin:'10px 0'}}>
			          <button style={_default}  onClick={()=>setContent(content+1)}>增加</button>
			          <button style={_default}  onClick={()=>setSendNum(sendNum+1)}>发送</button>
	          </div>
	       </div>


})