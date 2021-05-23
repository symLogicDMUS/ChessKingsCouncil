import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { TextField } from "@material-ui/core";
import { useStyles as useMoreStyles } from
        "../../Reuseables/MiniVariantTool/ToolWindow.jss";
import { useStyles } from "./Name.jss";

/*Note: if want to add close button or drag indicator back in use TopArea.jsx  */

function NameModal(props) {
    const {pieceName, updateName, theme} = props;

    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    const variants = {
        initial: {
            scale: 0,
            left: 'calc(50vw + 6px)',
        },
        animate: {
            scale: 1,
            left: 0,
            top: 48,
            y: 0,
        },
        exit: {
            scale: 0,
            left: 'calc(50vw + 6px)',
            y: -16,
        },
    };


    const handleInput = (e) => {
        updateName(e.target.value);
    };

    return (
        <motion.div
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            transition={{ duration: 0.7 }}
            className={clsx(classes2.window, {
                [classes2.border1]: true,
                [classes.name_window]: true,
            })}
            drag
        >
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
    );
}

export default NameModal;
