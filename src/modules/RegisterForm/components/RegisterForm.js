import React from 'react';
import {Block, Button} from "../../../components";
import {Form, Input} from "antd";
import {Link} from 'react-router-dom'
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';

const RegisterForm = () => {
    const success = false
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    return (
        <section className={'auth'}>
            <div className="auth__content">
                <div className="auth__top">
                    <h1>Регистрация</h1>
                    <p>Для входа в чат,вам нужно зарегистрироваться</p>
                </div>
                <Block>
                    {success ?
                        <div className={'auth__success_block'}>
                            <div>
                                <InfoCircleTwoTone style={{ fontSize: '50px'}} />
                            </div>
                            <h2>Подтвердите свой аккаунт</h2>
                            <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
                        </div>
                        :
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Пожалуйста,введите ваш email',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<MailOutlined className="site-form-item-icon"/>}
                                    placeholder="Email"
                                    size={'large'}/>
                            </Form.Item>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Пожалуйста,введите ваше имя',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon"/>}
                                    type="text"
                                    placeholder="Ваше имя"
                                    size={'large'}
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Пожалуйста,введите пароль!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Введите пароль"
                                    size={'large'}
                                />
                            </Form.Item>

                            <Form.Item
                                name="confirmPassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Пожалуйста,повторите пароль!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Повторите пароль"
                                    size={'large'}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>


                            <Link className={'auth_register_link'} to={'/login'}>Войти в аккаунт</Link>

                        </Form>}

                </Block>
            </div>

        </section>
    )
}

export default RegisterForm;