import React from "react";
import {useStyles} from "./DisplaySquare.jss";
import {getRangeSqrClass} from "../../Reuseables/BoardMixins.jss";

export function DisplaySquare({rf, sqrType, children}) {
    const classes = useStyles({rf})
    return (
        <div className={classes[sqrType]}>
            {children}
        </div>
    )
}