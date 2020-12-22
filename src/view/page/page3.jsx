/**
 * page3
 */
import React from 'react'


import { Progress } from 'antd';

class Page3 extends React.Component{


render(){

	let _router=this.props.$route
  // console.log(_router.match.params);

	return <div style={{background:'#fff',minHeight:'200px',margin:'10px'}}> 
              <h1>Page3</h1>
               <div>
               	<Progress percent={30} />
				    <Progress percent={50} status="active" />
				    <Progress percent={70} status="exception" />
				    <Progress percent={100} />
				    <Progress percent={50} showInfo={false} />
               </div>
	       </div>
}

}

export default Page3