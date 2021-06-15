import React from 'react';
import PropTypes from 'prop-types'
import './time.scss'
import Moment from "react-moment";

const Time = ({date}) => <Moment fromNow locale={'ru'} className={'message__date'}>{date}</Moment>

Time.propTypes = {
    date: PropTypes.string
}

export default Time;