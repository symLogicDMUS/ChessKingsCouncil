import React from "react";
import { ProfileButton } from "./ProfileButton";
import "./LoadDeleteHeader.scss";

export function LoadDeleteHeader({pieceName, load, prepareDelete, pieceProfilesStyle}) {
    return (
        <div className="load-save-profile-header">
            <div className="load-save-profile-name">{pieceName}</div>
            <ProfileButton buttonType="load" buttonText="Load" clickMethod={load} pieceName={pieceName} />
            <ProfileButton
                buttonType="delete"
                buttonText="Delete"
                clickMethod={prepareDelete}
                pieceName={pieceName}
            />
        </div>
    );
}
