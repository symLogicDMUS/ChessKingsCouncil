import React from "react";
import { CreatedPieceCheckBox } from "./CreatedPieceCheckBox";
import "./ProfileHeader.scss";

export function ProfileHeader(pieceName, select, selectedPiece) {
    return (
        <div className="profile-header">
            <div className="created-piece-name">{pieceName}</div>
            <CreatedPieceCheckBox pieceName={pieceName} select={select} selectedPiece={selectedPiece} />
        </div>
    );
}
