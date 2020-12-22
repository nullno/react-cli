/**
 * 二级页面 page2-1
 */
import React from 'react'


import { Button  } from 'antd';
// DatePicker,,TimePicker


class Page21 extends React.Component{


		render(){
		  // console.log('page2-1',this.props.$route);  

			return <div style={{background:'green',minHeight:'200px'}}> 
		              <h1>这个是二级页面page2-1 </h1>
		              <div className="ant-widget">
		              
		              	
                             <Button type="primary" style={{ marginLeft: 8 }}>
						      确定
						    </Button>
		              </div>
                            
		              {this.props.Route}
			       </div>
		}

}

export default Page21