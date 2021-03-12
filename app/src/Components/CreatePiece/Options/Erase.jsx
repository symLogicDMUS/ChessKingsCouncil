import React from "react";
import {Option} from "./Option";
import {useStyles} from "./Erase.jss"

export function Erase({erase, theme}) {
    const classes = useStyles();
    return (
        <div className={classes.erase}>
            <Option
                onClick={erase}
                iconType="erase"
                theme={theme}
                key='erase-option'
            />
        </div>
    );
}