import React from 'react';
import './auth.scss'
import {Route} from 'react-router-dom'

import {LoginForm,RegisterForm} from '../../modules/index'

const Auth = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    return (
        <section className={'auth'}>
            <div className="auth__content">
                <Route exact path={['/', '/login']} component={LoginForm}/>
                <Route exact path={'/register'} component={RegisterForm}/>
            </div>
        </section>
    );
};

export default Auth;