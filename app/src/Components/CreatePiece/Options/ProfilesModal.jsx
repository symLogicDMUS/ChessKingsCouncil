import React from 'react'
import PieceProfiles from "../../PieceProfiles/PieceProfiles";
import {useStyles} from "./ProfilesModal.jss";


export function ProfilesModal({ screenCase, defs, load, prepareDelete }) {
    const classes = useStyles()
    return (
        <div className={classes.modal}>
            <div className={classes.top_bar} >
                <div className={classes.title} >
                    Created Pieces
                </div>
            </div>
            <PieceProfiles
                defs={defs}
                load={load}
                screenCase={screenCase}
                prepareDelete={prepareDelete}
                headerType="load-delete"
                title="Created Pieces"
                closeIcon={true}
                scaler={1}
            />
        </div>
    );
}