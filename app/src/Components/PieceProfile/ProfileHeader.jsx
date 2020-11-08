import React from "react";
import { ProfileButton } from "./ProfileButton";
import "./ProfileHeader.scss";

export function ProfileHeader(pieceName, load, prepareDelete) {
    return (
        <div className="my-pieces-profile-header">
            <div className="my-piece-name">{pieceName}</div>
            <div className="load-button-container">
                <ProfileButton buttonType="load" buttonText="Load" clickMethod={load} pieceName={pieceName} />
            </div>
            <div className="delete-button-container">
                <ProfileButton
                    buttonType="delete"
                    buttonText="Delete"
                    clickMethod={prepareDelete}
                    pieceName={pieceName}
                />
            </div>
        </div>
    );
}
