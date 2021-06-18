import React from 'react';
import PropTypes from 'prop-types'
import './time.scss'
import Moment from "react-moment";

const Time = ({date}) =>{
    const calendarStrings = {
    lastDay : '[вчера в ]LT',
    sameDay : 'LT',
    lastWeek : 'dd',
    sameElse : 'DD.MM.YY'
};

    return <Moment calendar={calendarStrings}
            className={'message__date'}>{date}</Moment>
}

Time.propTypes = {
    date: PropTypes.string
}

export default Time;