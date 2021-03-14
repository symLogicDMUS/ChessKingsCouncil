import React from "react";
import {HelpTitle} from "./HelpTitle";
import {HelpSlideshow} from "./HelpSlideshow";
import {fontSize0026} from "../../../styles/fontSizes.jss";
import {HelpText as LoadGameHelp} from "../../../LoadGame/HelpText";
import {HelpText as SavedPiecesHelp} from "../../../MyPieces/HelpText";
import {HelpText as GameRootHelp} from "../../../GameRoot/Help/HelpText";
import {HelpText as NewGameHelp} from "../../../NewGame/GameOptions/HelpText";
import {HelpText as CreatePieceHelp} from "../../../CreatePiece/Help/HelpText";
import {HelpText as CustomizeHelp} from "../../../NewGame/Customize/Help/HelpText";
import { fontSizes, useStyles } from "./HelpItems.jss";

export function HelpItems({helpItem, setHelpItem, screenCase, theme}) {
    const classes = useStyles({theme});

    return (
        <div className={classes.help_items}>
            {helpItem === "New Game (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{pos: 0, numSlides: 4}}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            Starting a New Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {NewGameHelp(fontSizes[screenCase], theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "Load Game (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{pos: 0, numSlides: 2}}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            Loading a Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {LoadGameHelp(fontSizes[screenCase], theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "Create Piece (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{pos: 0, numSlides: 6}}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            Creating a Piece
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {CreatePieceHelp(fontSizes[screenCase], theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "Saved Pieces (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{pos: 0, numSlides: 3}}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            Saved Pieces
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {SavedPiecesHelp(fontSizes[screenCase], theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "GameRoot (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{pos: 0, numSlides: 2}}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            Playing a Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {GameRootHelp(fontSizes[screenCase], theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "Customize (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{pos: 0, numSlides: 3}}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            Customizing a New Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {CustomizeHelp(fontSizes[screenCase], theme)}
                </HelpSlideshow>
            ) : null}
        </div>
    );
}