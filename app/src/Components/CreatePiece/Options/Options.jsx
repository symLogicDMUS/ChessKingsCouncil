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
                    normal="/Images/load-piece/load-piece-a9a9a9.svg"
                    highlighted="/Images/load-piece/load-piece-72e2ff.svg"
                    clickMethod={toggleLoadModal}
                    alt="on click opens list of pieces to load"
                />
                <Option
                    className={classes.save_option}
                    normal="/Images/save/save-a9a9a9.svg"
                    highlighted="/Images/save/save-72e2ff.svg"
                    clickMethod={save}
                    alt="on click saves piece if right criteria are met"
                />
                <Option
                    className={classes.reset_option}
                    normal="/Images/reset-range/reset-range-a9a9a9.svg"
                    highlighted="/Images/reset-range/reset-range-72e2ff.svg"
                    clickMethod={reset}
                    alt="on click resets the to last save or blank if not saved"
                />
                <Option
                    className={classes.erase_option}
                    normal="/Images/erase-range/erase-range-a9a9a9.svg"
                    highlighted="/Images/erase-range/erase-range-72e2ff.svg"
                    clickMethod={eraseRange}
                    alt="on click erases everything"
                />
            </div>
        </>
    );
}

