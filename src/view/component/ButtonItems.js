import React,{useState,useRef,useEffect,useContext} from 'react'

const _default = {
	     width:'100px',
	     lineHeight:'32px',
	     border:0,
	     backgroundColor:'#3AA0DD',
	     color:'#fff',
	     WebkitTapHighlightColor:'rgba(0, 0, 0, 0)',
	     outline:'none',
}


function useClickStatus(){
   
    let [clickStatus,setClick] = useState(null);

      useEffect(()=>{
	 	console.log('clickStatus update');
      },[clickStatus])

      return clickStatus;

}
     const ThemeContext = React.createContext();   

export default (props)=>{

               console.log(props);

               const theme = useContext(ThemeContext)

               console.log(theme);

		       const [name,setName] = useState('button1')

		       const [name2,setName2] = useState('button2')
		      
		       const clickStatus = useClickStatus(1)
		         
		        
		        useEffect(()=>{
			 	// console.log(name);
		       	},[name])

		        useEffect(()=>{
		       	console.log('456');
		       	return()=>{
		       		console.log('123');
		       	}
		       	},[name2])
		       
		        function a(name){
					console.log();
					setName(name)
		}
		       

	     return   <div>
		              <p>click status {clickStatus}</p>
				       <button style={_default} onClick={()=>{a('button123')}}>{name}</button>

				       <button style={_default} onClick={()=>{setName2(name2+'55')}}>{name2}</button>
	              </div>  
}