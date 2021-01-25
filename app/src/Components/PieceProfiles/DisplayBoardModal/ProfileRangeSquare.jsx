import React from "react";
import {fontSize0040} from "../../styles/fontSizes.jss";
import {useStyles} from "../../Reuseables/Square.jss";
import { useStyles as profileStyles } from "./ProfileRangeSquare.jss";

export function ProfileRangeSquare({theme, sqrType, isModal, children}) {
    const classes = isModal ?
        useStyles({fontSize0048: fontSize0040, theme, type: 'normal'})
        : profileStyles({theme})
    return (
        <div className={classes[sqrType]}>
            {children}
        </div>
    )
}