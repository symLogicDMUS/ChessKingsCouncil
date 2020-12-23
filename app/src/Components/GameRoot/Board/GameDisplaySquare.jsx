import React from "react";
import {binaryBoard} from "../../helpers/binaryBoard";
import {largeBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "../../Reuseables/Square.jss";

export function GameDisplaySquare({rf, theme}) {
    const classes = useStyles({fontSize: fontSize, theme: theme})
    return <div className={binaryBoard[rf] ? classes.light_normal : classes.dark_normal}/>;
}