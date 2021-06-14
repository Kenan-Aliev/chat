import React from 'react';
import PropTypes from 'prop-types'
import './message.scss'
import Moment from 'react-moment'
import 'moment/locale/ru'
import classNames from 'classnames'
import readedIcon from '../../assets/img/readed.svg'
import notreaded from '../../assets/img/notreaded.svg'

const Message = (props) => {
    return (
        <div className={classNames('message', {
            "message--isme": props.isMe,
            'message--isTyping': props.isTyping,
            'message--image': props.attachments?.length === 1
        })}>
            <div className="message__content">
                {props.isMe && (props.isReaded ?
                    <img src={readedIcon} alt="checked icon" className={'message__icon-readed'}/> :
                    <img src={notreaded} alt="not checked icon" className={'message__icon-readed'}/>)}
                <div className="message__avatar">
                    <img
                        src={props.avatar}
                        alt={`Avatar ${props.user.fullname}`}/>
                </div>
                <div className="message__info">
                    <div>
                        {(props.text || props.isTyping) &&
                        <div className="message__bubble">
                            {props.text && <p className={'message__text'}>{props.text}</p>}
                            {props.isTyping &&
                            <div className="message__typing">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>}
                        </div>}
                        <div className="message__attachments">
                            {props.attachments?.length > 0 && props.attachments.map((item) => {
                                return <div className="message__attachments-item" key={item.url}>
                                    <img src={item.url} alt={item.filename}/>
                                </div>
                            })}

                        </div>
                        {props.date && <Moment fromNow locale={'ru'} className={'message__date'}>{props.date}</Moment>}
                    </div>

                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {
        fullname: "Кенан Алиев"
    }
}
Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool
}

export default Message;