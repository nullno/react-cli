/**
 * 二级页面 page2-1
 */
import React from 'react'

import {Reducer} from '@/view/component/Reducer'

import Te from '@/view/component/Te'
import Te2 from '@/view/component/Te2'

class Page22 extends React.Component{

		render(){
		 
			return <Reducer> 
                    
	                     <Te />
	                     <Te2 />
			       </Reducer>
		}

}

export default Page22