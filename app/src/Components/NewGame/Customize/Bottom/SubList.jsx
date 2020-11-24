import React from "react";
import {useStyles} from "./SubList.jss";

export function SubList({className, screenCase, subs }) {
    const classes = useStyles()
    
    return (
        <div className={classes.subList}>
            <div className={classes.header}>
                Subs
            </div>
            <div className={classes.rookLabel}>
                Rook{" "}
            </div>
            <div className={classes.rookValue}>
                {subs["Rook"]}
            </div>
            <div className={classes.bishopLabel}>
                Bishop{" "}
            </div>
            <div className={classes.bishopValue}>
                {subs["Bishop"]}
            </div>
            <div className={classes.knightLabel}>
                Knight{" "}
            </div>
            <div className={classes.knightValue}>
                {subs["Knight"]}
            </div>
            <div className={classes.queenLabel}>
                Queen{" "}
            </div>
            <div className={classes.queenValue}>
                {subs["Queen"]}
            </div>
        </div>
    );
}
