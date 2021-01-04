/**
 * 二级页面 page2-1
 */
import React from 'react'


import { Button  } from 'antd';
// DatePicker,,TimePicker

import MyButton from '@/view/component/Button'


class Page21 extends React.Component{


		render(){
		  // console.log('page2-1',this.props.$route);  

			return <div style={{background:'green',minHeight:'200px'}}> 
		              <h1>这个是二级页面page2-1 </h1>
		              <div className="ant-widget">
		              
		              	
                             <Button type="primary" style={{ marginLeft: 8 }}>
						      确定
						    </Button>

						     <MyButton name="button123" o={{a:1,b:2}}></MyButton>
		              </div>
                            
		              <this.props.Route/>
			       </div>
		}

}

export default Page21