import React from "react";
import {fontSize0040} from "../../styles/fontSizes.jss";
import {useStyles} from "../../Reuseables/Square.jss"

export function ModalDisplaySquare({theme, sqrType, children}) {
    const classes = useStyles({fontSize0048: fontSize0040, theme, type: 'normal'});
    return (
        <div className={classes[sqrType]}>
            {children}
        </div>
    )
}