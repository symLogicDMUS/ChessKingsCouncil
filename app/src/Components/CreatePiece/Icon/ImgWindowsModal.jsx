import React from "react";
import Box from "@material-ui/core/Box";
import {ClickAwayListener, Portal} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {useStyles as useMoreStyles} from "../CreatePiece.jss";
import {useStyles} from "./ImgWindowsModal.jss";

export function ImgWindowsModal({theme, toggleMiniVariantTool, children}) {
    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles({theme: theme})

    const handleClickAway = () => {
        console.log('clicked')
        toggleMiniVariantTool("Icon")
    };

    return (
        <Portal>
            <div className={classes2.modal}>
                {/*<ClickAwayListener*/}
                {/*    onClickAway={handleClickAway}*/}
                {/*    mouseEvent="onMouseDown"*/}
                {/*    touchEvent="onTouchStart"*/}
                {/*>*/}
                    <Box className={classes.window}>
                        <Box className={classes2.x_close_flexbox}>
                            <IconButton
                                onClick={() => toggleMiniVariantTool("Icon")}
                                className={classes2.close}
                            >
                                <CloseIcon className={classes2.icon}/>
                            </IconButton>
                        </Box>
                        <Box className={classes.window_area}>{children}</Box>
                    </Box>
                {/*</ClickAwayListener>*/}
            </div>
        </Portal>
    );
}