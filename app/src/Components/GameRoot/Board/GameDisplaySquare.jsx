import React from "react";
import {fontSize} from "../../styles/fontSize.jss";
import {binaryBoard} from "../../helpers/binaryBoard";
import {useStyles} from "../../Reuseables/Square.jss";

export function GameDisplaySquare({rf, theme}) {
    const classes = useStyles({fontSize: fontSize, theme: theme})
    return <div className={binaryBoard[rf] ? classes.light_normal : classes.dark_normal}/>;
}