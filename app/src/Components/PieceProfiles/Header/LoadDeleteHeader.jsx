import React from "react";
import {MuiButton as Button} from "../../Reuseables/MuiButton";
import {fontSize} from "../../styles/fontSize.jss";
import {button, useStyles} from "./LoadDeleteHeader.jss";


export function LoadDeleteHeader({ pieceName, load, prepareDelete, theme, style}) {
    const classes = useStyles({theme: theme, style: style, fontSize: fontSize});
    return (
        <div className={classes.header}>
            <div className={classes.piece_name}>{pieceName}</div>
            <Button
                theme={theme}
                style={button(fontSize)}
                onClick={() => load(pieceName)}
            >
                Load
            </Button>
            <Button
                theme={theme}
                style={button(fontSize)}
                onClick={() => prepareDelete(pieceName)}
            >
                Delete
            </Button>
        </div>
    );
}