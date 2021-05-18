import React from "react";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {PageTitle} from "../Reuseables/AppBar/PageTitle";
import { useStyles } from "./MenuFab.jss";

export function MenuFab(props) {
    const {theme, onClick, ...other} = props;

    const classes = useStyles({theme});

    return <div className={classes.root}>
        <IconButton
            onClick={onClick}
            edge={"start"}
            {...other}
        >
            <MenuIcon />
        </IconButton>
        <PageTitle theme={theme}>New Game</PageTitle>
    </div>;
}