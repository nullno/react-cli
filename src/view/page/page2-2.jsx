/**
 * 二级页面 page2-1
 */
import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd';

class Page22 extends React.Component{

		render(){
		  // console.log('page2-2',this.props.$route);
		  

				const layout = {
				  labelCol: { span: 8 },
				  wrapperCol: { span: 16 },
				};
				const tailLayout = {
				  wrapperCol: { offset: 8, span: 16 },
				};

				const MyFrom = () => {
				  const onFinish = values => {
				    console.log('Success:', values);
				  };

				  const onFinishFailed = errorInfo => {
				    console.log('Failed:', errorInfo);
				  };

	           return (<Form
  					      {...layout}
					      name="basic"
					      initialValues={{ remember: true }}
					      onFinish={onFinish}
					      onFinishFailed={onFinishFailed}
					      
					    >
					      <Form.Item
					        label="账户"
					        name="username"
					        rules={[{ required: true, message: 'Please input your username!' }]}
					      >
					        <Input />
					      </Form.Item>

					      <Form.Item
					        label="密码"
					        name="password"
					        rules={[{ required: true, message: 'Please input your password!' }]}
					      >
					        <Input.Password />
					      </Form.Item>

					      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
					        <Checkbox>Remember me</Checkbox>
					      </Form.Item>

					      <Form.Item {...tailLayout}>
					        <Button type="primary" htmlType="submit">
					          Submit
					        </Button>
					      </Form.Item>
					    </Form>)
					  }
				
			return <div className="myfrom" style={{width:'400px',borderRadius:'5px',margin:'0 auto', background:'#fff',padding:'10px'}}> <MyFrom /></div>
		}

}

export default Page22