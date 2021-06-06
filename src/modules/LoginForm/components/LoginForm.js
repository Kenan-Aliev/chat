import React from 'react';
import {Block, Button} from "../../../components";
import {Form, Input} from "antd";
import {Link} from 'react-router-dom'
import {UserOutlined, LockOutlined} from '@ant-design/icons';

const LoginForm = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    return (
        <section className={'auth'}>
            <div className="auth__content">
                <div className="auth__top">
                    <h1>Войти в аккаунт</h1>
                    <p>Пожалуйста,войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"
                                   size={'large'}/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                                size={'large'}
                            />
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>


                        <Link className={'auth_register_link'} to={'register'}>Зарегистрироваться</Link>

                    </Form>

                </Block>
            </div>

        </section>
    )
}

export default LoginForm;