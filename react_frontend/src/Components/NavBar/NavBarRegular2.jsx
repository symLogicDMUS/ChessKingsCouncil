import React from "react";
import {HomeLink} from "./ComponentsRegular2/HomeLink";
import {NewGameLink} from "./ComponentsRegular2/NewGameLink";
import {LoadGameLink} from "./ComponentsRegular2/LoadGameLink";
import {CreatePieceLink} from "./ComponentsRegular2/CreatePieceLink";
import {ChessRulesLink} from "./ComponentsRegular2/ChessRulesLink";
import {CouncilRulesLink} from "./ComponentsRegular2/CouncilRulesLink";
import {MyPiecesLink} from "./ComponentsRegular2/MyPiecesLink";
import {AuthorGithubLink} from "./ComponentsRegular2/AuthorGithubLink";
import "./NavBarRegular2.css";

export function NavBar ({currentPage, togleHelpModal, setHelpText, navBarPosTop, navBarPosLeft, backgroundColor, iconColor, backgroundColorSelected, border}) {

    return (
        <div className="nav-bar-regular2" style={{top: navBarPosTop, left: navBarPosLeft}}>
            <HomeLink backgroundColor={backgroundColor} iconColor={iconColor} backgroundColorSelected={backgroundColorSelected}  border={border}/>
            <NewGameLink currentPage={currentPage} togleHelpModal={togleHelpModal} setHelpText={setHelpText}
                         backgroundColor={backgroundColor} iconColor={iconColor} backgroundColorSelected={backgroundColorSelected} border={border}  />
            <LoadGameLink currentPage={currentPage} togleHelpModal={togleHelpModal} setHelpText={setHelpText}
                          backgroundColor={backgroundColor} iconColor={iconColor} backgroundColorSelected={backgroundColorSelected}  border={border} />
            <CreatePieceLink currentPage={currentPage} togleHelpModal={togleHelpModal} setHelpText={setHelpText}
                             backgroundColor={backgroundColor} iconColor={iconColor} backgroundColorSelected={backgroundColorSelected}  border={border} />
            <ChessRulesLink backgroundColor={backgroundColor} iconColor={iconColor} backgroundColorSelected={backgroundColorSelected}  border={border} />
            <CouncilRulesLink currentPage={currentPage} togleHelpModal={togleHelpModal} setHelpText={setHelpText}
                              backgroundColor={backgroundColor} iconColor={iconColor} backgroundColorSelected={backgroundColorSelected} border={border}  />
            <MyPiecesLink currentPage={currentPage} togleHelpModal={togleHelpModal} setHelpText={setHelpText}
                          backgroundColor={backgroundColor} iconColor={iconColor} backgroundColorSelected={backgroundColorSelected}  border={border} />
            <AuthorGithubLink backgroundColor={backgroundColor} iconColor={iconColor} backgroundColorSelected={backgroundColorSelected} border={border}  />
        </div>
    )
}