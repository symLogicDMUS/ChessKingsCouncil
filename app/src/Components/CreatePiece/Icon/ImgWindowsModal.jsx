import React from "react";
import Box from "@material-ui/core/Box";
import {Close} from "../../Reuseables/Modals/Close";
import {useStyles as useMoreStyles} from "../../Reuseables/Modals/MuiGrid.jss";
import { useStyles } from "./ImgWindowsModal.jss";

export function ImgWindowsModal({theme, children}) {
    const classes = useStyles({theme});
    const classes2 = useMoreStyles({theme});
    return (
        <div className={classes.modal}>
            <Box className={classes.x_close_flexbox}>
                <Close classProp={classes2.close_icon} />
            </Box>
            <Box className={classes.window}>
                {children}
            </Box>
        </div>
    );
}