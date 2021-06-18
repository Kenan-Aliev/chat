import React from 'react';
import './Dialogs.scss'
import DialogItem from "../DialogItem";

const Dialogs = (props) => {
    return (
        <div>
            {props.dialogs.map((dialog) => {
                return <DialogItem key={dialog.user._id}
                                   message={dialog}
                                   unReaded={0}
                                   userId={props.userId}
                />
            })}
        </div>
    );
};

export default Dialogs;