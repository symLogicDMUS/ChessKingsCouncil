import React, { useState } from "react";
import { motion } from "framer-motion";
import {ClickAwayListener, Hidden, Portal, Slide, useMediaQuery,} from "@material-ui/core";
import { MuiTextField as TextField } from "../../Reuseables/UserInput/MuiTextField";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import { DragIndicator } from "@material-ui/icons";
import { useStyles } from "./Name.jss";

export function Name({
    updateName,
    toggleMiniVariantTool,
    theme,
    defaultValue,
}) {
    const [drag, setDrag] = useState(false);
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });
    const isThin = useMediaQuery("(max-width: 960px)");

    const handleInput = (e) => {
        updateName(e.target.value);
    };

    const handleClickAway = () => {
        toggleMiniVariantTool("Name");
    };

    return (
        <>
            <Hidden mdUp>
                <Portal>
                    <div className={classes2.modal}>
                        <ClickAwayListener
                            onClickAway={handleClickAway}
                            mouseEvent="onMouseDown"
                            touchEvent="onTouchStart"
                        >
                            <Slide
                                in={true}
                                mountOnEnter
                                unmountOnExit
                                direction="left"
                                onEnter={() => setDrag(true)}
                            >
                                <motion.div
                                    drag={drag}
                                    className={classes.name_modal}
                                >
                                    <span className={classes.top_area}>
                                        <DragIndicator
                                            className={classes.drag_icon}
                                        />
                                    </span>
                                    <div className={classes.content_area}>
                                        <TextField
                                            theme={theme}
                                            fullWidth={true}
                                            label="Piece Name"
                                            autoComplete="off"
                                            autoFocus={true}
                                            variant="outlined"
                                            onChange={handleInput}
                                            defaultValue={defaultValue}
                                            size={isThin ? "small" : "medium"}
                                            className={classes.name}
                                            id="game-name"
                                        />
                                    </div>
                                </motion.div>
                            </Slide>
                        </ClickAwayListener>
                    </div>
                </Portal>
            </Hidden>
            <Hidden smDown>
                <TextField
                    theme={theme}
                    fullWidth={true}
                    label="Piece Name"
                    autoComplete="off"
                    autoFocus={true}
                    variant="outlined"
                    onChange={handleInput}
                    defaultValue={defaultValue}
                    size={isThin ? "small" : "medium"}
                    className={classes.name}
                    id="game-name"
                />
            </Hidden>
        </>
    );
}
