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

      useEffect((s)=>{
	 	console.log('useClickStatus update');
      },[clickStatus])

      return clickStatus;

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



const ThemeContext = React.createContext(themes.light);
     	

const ButtonItems=(props)=>{

               console.log(props);

                console.log(window.JSON.stringify({a:1}));
                console.log(window.JSON);
               
               const theme = useContext(ThemeContext)

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
		       
	       
	
		   function objToString(obj){    
		       
		        return window.JSON.stringify(obj);
            }
	     return   <div>
	              <p>click status {clickStatus}</p>
			       <button style={_default} onClick={()=>setName('button123')}>{name}</button>

			       <button style={_default} onClick={()=>{setName2(name2+'55')}}>{name2}</button>
			       <p> { objToString(theme) }</p>
              </div>  
}

export default (props)=>{
        

      

	  return <ThemeContext.Provider value={themes.dark}>
	              
	              <ButtonItems props={props}/>
			     
	        </ThemeContext.Provider>
}
