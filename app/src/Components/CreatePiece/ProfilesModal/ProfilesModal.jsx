import React from "react";
import { PieceProfiles } from "../../PieceProfiles/PieceProfiles";
import {styleObjects} from "./ProfilesModalStyle";
import "./_ProfilesModal.scss";

export function ProfilesModal({ screenCase, defs, load, togleLoadModal, prepareDelete }) {
    return (
        <div className="profiles-modal">
            <div className="profiles-modal-top-bar" style={styleObjects[screenCase]["topBar"]()}>
                <div className="profiles-modal-title" style={styleObjects[screenCase]["title"]()}>
                    Created Pieces
                </div>
            </div>
            <PieceProfiles
                defs={defs}
                load={load}
                screenCase={screenCase}
                togleLoadModal={togleLoadModal}
                prepareDelete={prepareDelete}
                headerType="load-delete"
                title="Created Pieces"
                closeIcon={true}
                scaler={1}
            />
        </div>
    );
}
