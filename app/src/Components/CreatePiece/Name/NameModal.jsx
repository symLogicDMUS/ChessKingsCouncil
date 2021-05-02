import React from "react";
import clsx from "clsx";
import {motion} from "framer-motion";
import { TextField } from "@material-ui/core";
import { DragIndicator } from "@material-ui/icons";
import { CloseTool } from "../../Reuseables/Modals/CloseTool";
import { useStyles as useMoreStyles } from "../CreatePieceToolbar.jss";
import { useStyles } from "./Name.jss";

function NameModal({
    pieceName,
    updateName,
    updateParent,
    variants,
    drag,
    theme,
    onAnimationComplete,
}) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    const handleInput = (e) => {
        updateName(e.target.value);
    };

    return (
        <div className={classes2.modal}>
            <motion.div
                variants={variants}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                transition={{ duration: 0.7 }}
                className={clsx(classes2.window, {
                    [classes.name_window]: true,
                })}
                onAnimationComplete={onAnimationComplete}
                drag={drag}
            >
                <span className={classes2.top_area}>
                    <DragIndicator
                        className={clsx(classes2.icon, {
                            [classes2.drag_icon]: true,
                        })}
                    />
                    <CloseTool
                        name="Name"
                        updateParent={updateParent}
                        className={classes2.close_button}
                        iconClassName={clsx(classes2.icon, {
                            [classes2.close_icon]: true,
                        })}
                        theme={theme}
                    />
                </span>
                <TextField
                    theme={theme}
                    fullWidth={true}
                    label="Piece Name"
                    autoComplete="off"
                    autoFocus={true}
                    variant="outlined"
                    onChange={handleInput}
                    defaultValue={pieceName}
                    className={classes.name}
                    size={"small"}
                    id="game-name"
                />
            </motion.div>
        </div>
    );
}

export default NameModal;
