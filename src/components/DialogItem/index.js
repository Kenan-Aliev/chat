import React from 'react';
import classNames from 'classnames'
import './dialogItem.scss'
import {Time, StatusIcon} from "../index";
import moment from 'react-moment'



const DialogItem = (props) => {
    return (
        <div className={classNames('dialogs__item', {"dialogs__item-online": props.message.user.isOnline})}>
            <div className="dialogs__item-avatar">
                {/*<img src={props.user.avatar} alt={`${props.user.fullname} avatar`}/>*/}
                <img
                    src={props.message.user.avatar}
                    alt=""/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    {/*<b>{props.user.fullname}</b>*/}
                    <b>{props.message.user.fullname}</b>
                    <Time date={props.message.created_at}/>

                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{props.message.text}</p>
                    <StatusIcon isMe={props.message.user._id === props.userId} isReaded={true}/>
                    {props.unReaded > 0 &&
                    <div className="dialogs__item-info-bottom-count">{props.unReaded > 9 ? "+9" : props.unReaded}</div>}

                </div>
            </div>
        </div>
    );
};

export default DialogItem;