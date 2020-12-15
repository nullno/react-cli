/**
 * page3
 */
import React from 'react'


class Page3 extends React.Component{


render(){

	let _router=this.props.$route
  // console.log(_router.match.params);

	return <div style={{background:'blue',minHeight:'200px'}}> 
              <h1>Page3</h1>
                {this.props.Route}
	       </div>
}

}

export default Page3