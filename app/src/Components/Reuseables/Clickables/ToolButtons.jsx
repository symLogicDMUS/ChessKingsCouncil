import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./ToolButtons.jss";
import {Portal} from "@material-ui/core";
import {motion} from "framer-motion";
import {Close} from "../Modals/Close";
import {close_icon} from "../Modals/StandardModal.jss";
import {fontSize002} from "../../styles/fontSizes.jss";

export function ToolButtons({theme, style, children}) {
    // const [isToolWindow, setIsToolWindow] = useState(false);

    const classes = useStyles({theme: theme, style: style});
    return (
        <>
            <Box className={classes.tool_buttons}>
                {children}
            </Box>
        </>
    );
}