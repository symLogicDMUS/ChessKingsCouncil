import React from "react";
import {Option} from "./Option";
import {useStyles} from "./Options.jss";

export function Options({save, toggleLoadModal, reset, eraseRange}) {
    const classes = useStyles()
    return (
        <>
            <div className={classes.options_tool}>
                <div className={classes.title}>Options</div>
                <Option
                    className={classes.load_option}
                    clickMethod={toggleLoadModal}
                    icon={'load'}
                />
                <Option
                    className={classes.save_option}
                    clickMethod={save}
                    icon={'save'}
                />
                <Option
                    className={classes.reset_option}
                    clickMethod={reset}
                    icon={'reset'}
                />
                <Option
                    className={classes.erase_option}
                    clickMethod={eraseRange}
                    icon={'erase'}
                />
            </div>
        </>
    );
}

