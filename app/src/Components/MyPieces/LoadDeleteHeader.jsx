import React from "react";
import {ProfileButton} from "../PieceProfiles/ProfileButton";
import {styles} from "./LoadDeleteHeader.jss";

export function LoadDeleteHeader({pieceName, load, prepareDelete}) {

    const classes = useStyles()

    return (
        <div className={classes.header}>
            <div className={classes.piece_name}>{pieceName}</div>
            <ProfileButton buttonType="load" buttonText="Load" clickMethod={load} pieceName={pieceName}/>
            <ProfileButton
                buttonType="delete"
                buttonText="Delete"
                clickMethod={prepareDelete}
                pieceName={pieceName}
            />
        </div>
    );
}
