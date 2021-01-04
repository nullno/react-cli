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






const ThemeContext = React.createContext();



const ButtonItems=(props)=>{

               const theme = useContext(ThemeContext)

		       const [name,setName] = useState('button1')

		       const [name2,setName2] = useState('button2')
		      

	
	     return   <div>

				       <button style={_default} onClick={()=>setName('button123')}>{name}</button>

				       <button style={_default} onClick={()=>{setName2(name2+'55')}}>{name2}</button>

				       <button style={_default} onClick={()=>{setName2(name2+'55')}}>切换主题</button>
				       <p> { JSON.stringify(theme) }</p>
	              </div>  
}

export default (props)=>{
          

	  return <ThemeContext.Provider value={themes.light}>
	              <div>123456</div>
	              <ButtonItems props={props}/>
			     
	        </ThemeContext.Provider>
}
