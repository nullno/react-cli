import  React,{createContext,useReducer} from 'react'


export const MyContext = createContext();

const reducer =(state,action)=>{

       switch(action.type){

       	 case 'setname':
             return {
             	...state,
             	name:action.content
             }
       	 break;
       	   	 case 'setage':
             return {
             	...state,
             	age:+state.age+1
             }
       	 break;
       	 default:
       	 return state;

       }
}

const data ={name:'nullno',age:'18'}

export const Reducer =(props)=>{

	 let [state,dispatch] = useReducer(reducer,data);


	return <MyContext.Provider value={{state,dispatch}}>
	              <div style={{background:'#ccc',padding:'5px'}}>
						 	来自子组件useImperativeHandle:<p style={{color:'green'}}>{JSON.stringify(state)}</p> 
			      </div> 
                {props.children}
	        </MyContext.Provider>
}

