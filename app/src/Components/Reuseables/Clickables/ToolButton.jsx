import React, {useState} from "react";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import {AccordionDetails, Portal, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {icons} from "../../styles/icons/top/icons.jss";
import {fontSize002} from "../../styles/fontSizes.jss";
import {close_icon} from "../Modals/StandardModal.jss";
import {Close} from "../Modals/Close";
import {useStyles} from "./ToolButton.jss";
import Button from "@material-ui/core/Button";

export function ToolButton({theme, iconName, text, children}) {
    const [isToolWindow, setIsToolWindow] = useState(false);

    const classes = useStyles({theme});
    return (
        <>
            {isToolWindow ? (
                <Portal>
                    <motion.div className={classes.tool_window}>
                        <Box className={classes.tool_flexbox}>
                            {children}
                        </Box>
                    </motion.div>
                </Portal>
            ) : null}
            <IconButton
                className={classes.button}
                classes={{label: classes.label}}
                onClick={() => setIsToolWindow(true)}
            >
                <SvgIcon className={classes.icon}>
                    {icons[iconName]}
                </SvgIcon>
            </IconButton>
            {/*<Button*/}
            {/*    className={classes.button}*/}
            {/*    onClick={() => setIsToolWindow(true)}*/}
            {/*    startIcon={*/}
            {/*        <SvgIcon className={classes.icon}>*/}
            {/*            {icons[iconName]}*/}
            {/*        </SvgIcon>*/}
            {/*    }*/}
            {/*>*/}
            {/*    <Typography className={classes.text}>{text}</Typography>*/}
            {/*</Button>*/}
        </>
    );
}