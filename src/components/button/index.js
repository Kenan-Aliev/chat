import React from 'react';
import {Button as BaseButton} from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './button.scss'

const Button = (props) => {
    return (
        <BaseButton {...props}  className={classNames('button',props.className) }/>
)
}

Button.propTypes = {
    className : PropTypes.string,
    size:PropTypes.string
}
export default Button;