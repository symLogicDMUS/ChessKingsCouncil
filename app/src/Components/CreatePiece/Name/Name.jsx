import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
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
                            <Box className={classes.window}>
                                <Box className={classes2.close_area}>
                                    <IconButton
                                        onClick={() => toggleMiniVariantTool("Name")}
                                        className={classes2.close}
                                    >
                                        <CloseIcon className={classes2.icon}/>
                                    </IconButton>
                                </Box>
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
                            </Box>
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