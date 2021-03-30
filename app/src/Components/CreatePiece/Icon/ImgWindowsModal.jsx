import React from "react";
import Box from "@material-ui/core/Box";
import {Close} from "../../Reuseables/Modals/Close";
import {useStyles as useMoreStyles} from "../../Reuseables/Modals/MuiGrid.jss";
import { useStyles } from "./ImgWindowsModal.jss";
import {Portal} from "@material-ui/core";

export function ImgWindowsModal({theme, children}) {
    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles({theme: theme});
    return (
        <Portal>
            <div className={classes.modal}>
                {/*<Box className={classes.x_close_flexbox}>*/}
                {/*    <Close theme={theme} className={classes2.close_icon} />*/}
                {/*</Box>*/}
                <Box className={classes.window}>
                    {children}
                </Box>
            </div>
        </Portal>
    );
}