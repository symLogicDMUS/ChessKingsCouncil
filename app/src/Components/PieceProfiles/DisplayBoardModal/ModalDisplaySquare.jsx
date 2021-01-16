import React from "react";
import {useStyles} from "../../Reuseables/Square.jss"
import {smallBoardFontSizeDesktop as fontSize} from "../../Reuseables/Board.jss";

export function ModalDisplaySquare({theme, sqrType, children}) {
    const classes = useStyles({fontSize, theme, type: 'normal'});
    return (
        <div className={classes[sqrType]}>
            {children}
        </div>
    )
}