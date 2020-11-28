import React from 'react';
import {useStyles} from "./TextMessage.jss";

export function TextMessage({text, fontFamily, fontSize}) {

    const classes = useStyles({text, fontFamily, fontSize});

    return (
        <div className={classes.modal}>
            <div className={classes.text_message}>
                {text}
            </div>
        </div>
    );
}