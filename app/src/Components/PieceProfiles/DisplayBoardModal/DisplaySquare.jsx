import React from "react";
import {useStyles} from "./DisplaySquare.jss";
import {getSqrClassName} from "../../helpers/getSqrClassName";

export function DisplaySquare({rf, sqrType, children}) {
    const classes = useStyles({rf})
    return (
        <div className={classes[sqrType]}>
            {children}
        </div>
    )
}