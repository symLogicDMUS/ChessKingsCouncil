import React from "react";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import { originTransform } from "../AppBar/Content/ThreeItemAppBarContent.jss";
import { styles } from "./MuiMenuWithCaption.jss";

export const MuiMenuWithCaption = withStyles(styles)((props) => (
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
