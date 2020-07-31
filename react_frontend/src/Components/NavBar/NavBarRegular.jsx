import React from "react";
import {HomeLink} from "./ComponentsRegular/HomeLink";
import {NewGameLink} from "./ComponentsRegular/NewGameLink";
import {LoadGameLink} from "./ComponentsRegular/LoadGameLink";
import {CreatePieceLink} from "./ComponentsRegular/CreatePieceLink";
import {ChessRulesLink} from "./ComponentsRegular/ChessRulesLink";
import {CouncilRulesLink} from "./ComponentsRegular/CouncilRulesLink";
import {MyPiecesLink} from "./ComponentsRegular/MyPiecesLink";
import {AuthorGithubLink} from "./ComponentsRegular/AuthorGithubLink";
import "./NavBarRegular.css";

export function NavBar ({navBarPosTop, navBarPosLeft, backgroundColor, iconColor, iconColorHover, backgroundColorSelected, border}) {
    
    return ( 
        <div className="nav-bar-regular" style={{top: navBarPosTop, left: navBarPosLeft}}>
            <HomeLink backgroundColor={backgroundColor} iconColor={iconColor} iconColorHover={iconColorHover} backgroundColorSelected={backgroundColorSelected} border={border} />
            <NewGameLink backgroundColor={backgroundColor} iconColor={iconColor} iconColorHover={iconColorHover} backgroundColorSelected={backgroundColorSelected} border={border}  />
            <LoadGameLink backgroundColor={backgroundColor} iconColor={iconColor} iconColorHover={iconColorHover} backgroundColorSelected={backgroundColorSelected} border={border}  />
            <CreatePieceLink backgroundColor={backgroundColor} iconColor={iconColor} iconColorHover={iconColorHover} backgroundColorSelected={backgroundColorSelected} border={border}  />
            <ChessRulesLink backgroundColor={backgroundColor} iconColor={iconColor} iconColorHover={iconColorHover} backgroundColorSelected={backgroundColorSelected} border={border}  />
            <CouncilRulesLink backgroundColor={backgroundColor} iconColor={iconColor} iconColorHover={iconColorHover} backgroundColorSelected={backgroundColorSelected} border={border}  />
            <MyPiecesLink backgroundColor={backgroundColor} iconColor={iconColor} iconColorHover={iconColorHover} backgroundColorSelected={backgroundColorSelected} border={border}  />
            <AuthorGithubLink backgroundColor={backgroundColor} iconColor={iconColor} iconColorHover={iconColorHover} backgroundColorSelected={backgroundColorSelected} border={border}  />
        </div>
    )
}