import React from "react";
import { Option } from "./Option";
import { useStyles } from "./Options.jss";

export function Options({ save, toggleLoadModal, reset, eraseRange }) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.options_tool}>
                <div className={classes.title}>Options</div>
                <Option clickMethod={toggleLoadModal} icon='load' />
                <Option clickMethod={save} icon='save' />
                <Option clickMethod={reset} icon='reset' />
                <Option clickMethod={eraseRange} icon='erase' />
            </div>
        </>
    );
}
