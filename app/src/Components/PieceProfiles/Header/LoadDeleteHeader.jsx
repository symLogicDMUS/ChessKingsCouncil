import React from "react";
import {MuiButton as Button} from "../../Reuseables/MuiButton";
import {fontSize} from "../../styles/fontSize.jss";
import { useStyles } from "./PieceHeader.jss";
import {button} from "./LoadDeleteHeader.jss";


export function LoadDeleteHeader({ key, load, prepareDelete, theme, style}) {
    const classes = useStyles({theme: theme, style: style, fontSize: fontSize});
    const pieceName = key;
    return (
        <div className={classes.header}>
            <div className={classes.piece_name}>{pieceName}</div>
            <Button
                style={button(fontSize)}
                theme={theme}
                onClick={() => load(pieceName)}
            >
                Load
            </Button>
            <Button
                style={button(fontSize)}
                theme={theme}
                onClick={() => prepareDelete(pieceName)}
            >
                Delete
            </Button>
        </div>
    );
}