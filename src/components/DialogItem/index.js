import React from 'react';
import classNames from 'classnames'
import './dialogItem.scss'
import {Time, StatusIcon} from "../index";


const DialogItem = (props) => {
    return (
        <div className={classNames('dialogs__item', {"dialogs__item-online": props.user.isOnline})}>
            <div className="dialogs__item-avatar">
                {/*<img src={props.user.avatar} alt={`${props.user.fullname} avatar`}/>*/}
                <img
                    src="https://sun9-41.userapi.com/impg/uYT1TNjBEPCrfd5UzGXiQtFUlv0FmJS0dgydOg/xxyw8iK0lF4.jpg?size=810x1080&quality=96&sign=94bb5d479c7d31af42c89f2dbbe53ecb&type=album"
                    alt=""/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    {/*<b>{props.user.fullname}</b>*/}
                    <b>Jack the Ripper</b>
                    <Time date={new Date()}/>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Как дела чертила,давно не виделись?цйаупцкре)</p>
                    <StatusIcon isMe={true} isReaded={true}/>
                    {props.unReaded > 0 &&
                    <div className="dialogs__item-info-bottom-count">{props.unReaded > 9 ? "+9" : props.unReaded}</div>}

                </div>
            </div>
        </div>
    );
};

export default DialogItem;