import React from "react";
import {HomeLink} from "./ComponentsSmall/HomeLink";
import {NewGameLink} from "./ComponentsSmall/NewGameLink";
import {LoadGameLink} from "./ComponentsSmall/LoadGameLink";
import {CreatePieceLink} from "./ComponentsSmall/CreatePieceLink";
import {ChessRulesLink} from "./ComponentsSmall/ChessRulesLink";
import {CouncilRulesLink} from "./ComponentsSmall/CouncilRulesLink";
import {MyPiecesLink} from "./ComponentsSmall/MyPiecesLink";
import {AuthorGithubLink} from "./ComponentsSmall/AuthorGithubLink";
import "./NavBarSmall.css";

export function NavBar({navBarPosLeft}) {
    return(
        <div className="nav-bar-small" style={{left:navBarPosLeft}}>
            <HomeLink />
            <NewGameLink />
            <LoadGameLink />
            <CreatePieceLink />
            <ChessRulesLink />
            <CouncilRulesLink />
            <MyPiecesLink />
            <AuthorGithubLink />
        </div>
    )
}