import React from "react";
import {HomeLink} from "./Components/HomeLink";
import {NewGameLink} from "./Components/NewGameLink";
import {LoadGameLink} from "./Components/LoadGameLink";
import {CreatePieceLink} from "./Components/CreatePieceLink";
import {ChessRulesLink} from "./Components/ChessRulesLink";
import {CouncilRulesLink} from "./Components/CouncilRulesLink";
import {MyPiecesLink} from "./Components/MyPiecesLink";
import {AuthorGithubLink} from "./Components/AuthorGithubLink";
import "./NavBar.css";

export function NavBar ({navBarPosLeft}) {

    return (
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