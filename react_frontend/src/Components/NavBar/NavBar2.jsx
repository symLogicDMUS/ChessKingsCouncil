import React from "react";
import {HomeLink} from "./Components2/HomeLink";
import {NewGameLink} from "./Components2/NewGameLink";
import {LoadGameLink} from "./Components2/LoadGameLink";
import {CreatePieceLink} from "./Components2/CreatePieceLink";
import {ChessRulesLink} from "./Components2/ChessRulesLink";
import {CouncilRulesLink} from "./Components2/CouncilRulesLink";
import {MyPiecesLink} from "./Components2/MyPiecesLink";
import {AuthorGithubLink} from "./Components2/AuthorGithubLink";
import "./NavBar2.css";

export function NavBar({navBarPosLeft}) {
        return(
            <div className="nav-bar" style={{left:navBarPosLeft}}>
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