import React from "react";
import { MyLoadButton } from "./MyLoadButton";
import { MyDeleteButton } from "./MyDeleteButton";
import "./ProfileHeader.scss";

export function ProfileHeader(pieceName, load, setPiece, togleConfirmDeleteModal) {
    return (
        <div className="my-pieces-profile-header">
            <div className="my-piece-name">{pieceName}</div>
            <div className="load-button-container">
                <MyLoadButton load={load} setPiece={setPiece} pieceName={pieceName} />
            </div>
            <div className="delete-button-container">
                <MyDeleteButton
                    togleConfirmDeleteModal={togleConfirmDeleteModal}
                    setPiece={setPiece}
                    pieceName={pieceName}
                />
            </div>
        </div>
    );
}
