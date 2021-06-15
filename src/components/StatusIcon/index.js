import React from 'react';
import readedIcon from "../../assets/img/readed.svg";
import notreaded from "../../assets/img/notreaded.svg";
import PropTypes from "prop-types";


const StatusIcon = (props) => props.isMe && (props.isReaded ?
    <img src={readedIcon} alt="checked icon" className={'message__icon-readed'}/> :
    <img src={notreaded} alt="not checked icon" className={'message__icon-readed'}/>)

StatusIcon.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
}


export default StatusIcon;