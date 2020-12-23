import React from "react";
import {smallBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "../../Reuseables/Square.jss"

export function ModalDisplaySquare({theme, sqrType, children}) {
    const classes = useStyles({fontSize, theme});
    return (
        <div className={classes[sqrType]}>
            {children}
        </div>
    )
}