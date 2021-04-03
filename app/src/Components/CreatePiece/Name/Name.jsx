import React from "react";
import {motion} from "framer-motion";
import {ClickAwayListener, Hidden, Portal, useMediaQuery} from '@material-ui/core'
import {MuiTextField as TextField} from "../../Reuseables/UserInput/MuiTextField";
import {useStyles as useMoreStyles} from "../CreatePiece.jss";
import {useStyles} from "./Name.jss";

export function Name({updateName, toggleMiniVariantTool, theme, defaultValue}) {
    const classes = useStyles({theme: theme})
    const classes2 = useMoreStyles({theme: theme})
    const isThin = useMediaQuery('(max-width: 960px)')

    const handleInput = (e) => {
        updateName(e.target.value)
    };

    const handleClickAway = () => {
        toggleMiniVariantTool("Name")
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
                            <motion.div drag className={classes.name_modal}>
                                <TextField
                                    theme={theme}
                                    fullWidth={true}
                                    label='Piece Name'
                                    autoComplete="off"
                                    autoFocus={true}
                                    variant="outlined"
                                    onChange={handleInput}
                                    defaultValue={defaultValue}
                                    size={isThin ? 'small' : 'medium'}
                                    rootClassName={classes.name}
                                    id="game-name"
                                />
                            </motion.div>
                        </ClickAwayListener>
                    </div>
                </Portal>
            </Hidden>
            <Hidden smDown>
                <TextField
                    theme={theme}
                    fullWidth={true}
                    label='Piece Name'
                    autoComplete="off"
                    autoFocus={true}
                    variant="outlined"
                    onChange={handleInput}
                    defaultValue={defaultValue}
                    size={isThin ? 'small' : 'medium'}
                    rootClassName={classes.name}
                    id="game-name"
                />
            </Hidden>
        </>

    );
}