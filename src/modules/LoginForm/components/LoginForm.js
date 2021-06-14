import React from 'react';
import {Block, Button} from "../../../components";
import {Form, Input} from "antd";
import {Link} from 'react-router-dom'
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import {validateField} from "../../../utils/helpers/index";

const RegisterForm = (props) => {
    const success = false
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
        isSubmitting
    } = props;

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
                        onFinish={onFinish}
                        onSubmit={handleSubmit}
                    >
                        <Form.Item validateStatus={validateField('email', touched, errors)}
                                   help={touched.email && errors.email && errors.email}
                        >
                            <Input
                                prefix={<MailOutlined className="site-form-item-icon"/>}
                                placeholder="E-Mail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                name="email"
                                size={'large'}/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            validateStatus={validateField('password', touched, errors)}
                            help={touched.password && errors.password && errors.password}
                        >
                            <Input
                                name={'password'}
                                placeholder="Введите пароль"
                                type="password"
                                size={'large'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button disabled={!isValid || !dirty || isSubmitting} type="primary"
                                    onClick={handleSubmit} htmlType="submit"
                                    className="login-form-button">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>


                        <Link className={'auth_register_link'} to={'/register'}>Зарегистрироваться</Link>

                    </Form>

                </Block>
            </div>

        </section>
    )
}

export default RegisterForm;