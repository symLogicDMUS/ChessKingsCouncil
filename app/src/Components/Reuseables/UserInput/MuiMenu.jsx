import React from "react";
import Menu from "@material-ui/core/Menu";
import {withStyles} from "@material-ui/core/styles";
import {originTransform} from "../AppBar/ThreeItemAppBar.jss";
import {styles} from "./MuiMenu.jss";

export const MuiMenu = withStyles(styles)((props) => (
    <Menu
        keepMounted
        elevation={0}
        anchorOrigin={originTransform}
        transformOrigin={originTransform}
        {...props}
    >
        {props.children}
    </Menu>
));