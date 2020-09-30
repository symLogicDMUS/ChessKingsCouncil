import React from "react";
import "./SubList.css";

export function SubList({subs}) {

    return (
        <>
            <div className="new-game-subs-header">Subs</div>
            <div className="new-game-rook-label">Rook </div>
            <div className="new-game-rook-value">{subs["Rook"]}</div>
            <div className="new-game-bishop-label">Bishop </div>
            <div className="new-game-bishop-value">{subs["Bishop"]}</div>
            <div className="new-game-knight-label">Knight </div>
            <div className="new-game-knight-value">{subs["Knight"]}</div>
            <div className="new-game-queen-label">Queen </div>
            <div className="new-game-queen-value">{subs["Queen"]}</div>        
        </> 
    )

}