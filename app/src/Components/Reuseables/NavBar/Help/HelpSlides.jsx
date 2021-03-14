import React from "react";
import {HelpTitle} from "./HelpTitle";
import {HelpSlide} from "./HelpSlide";
import {HelpSlideshow} from "./HelpSlideshow";
import {fontSize0026} from "../../../styles/fontSizes.jss";
import {UsingRangeDisplay} from "./Extra/UsingRangeDisplay";
import {GameTypesExplained} from "./Extra/GameTypesExplained";
import {PlayerTypesExplained} from "./Extra/PlayerTypesExplained";
import {HelpText as LoadGameHelp} from "../../../LoadGame/HelpText";
import {HelpText as SavedPiecesHelp} from "../../../MyPieces/HelpText";
import {HelpText as GameRootHelp} from "../../../GameRoot/Help/HelpText";
import {HelpText as NewGameHelp} from "../../../NewGame/GameOptions/HelpText";
import {HelpText as CreatePieceHelp} from "../../../CreatePiece/Help/HelpText";
import {HelpText as CustomizeHelp} from "../../../NewGame/Customize/Help/HelpText";
import {InvalidNameExplanation} from "../../../CreatePiece/Help/InvalidNameExplanation";
import {ImageUploadExplanation} from "../../../CreatePiece/Help/ImageUploadExplanation";
import {OptionsToolExplanation} from "../../../CreatePiece/Help/OptionsToolExplanation";
import {LocationToolExplanation} from "../../../CreatePiece/Help/LocationToolExplanation";
import {PuttingThePieceICreatedIntoAGame} from "./Extra/PuttingThePieceICreatedIntoAGame";
import {OffsetsAndSpansExplanation} from "../../../CreatePiece/Help/OffsetsAndSpansExplanation";
import {MakingYourPieceAnOptionForPawnsToPromoteTo} from "./Extra/MakingYourPieceAnOptionForPawnsToPromoteTo";
import {SubbingYourPiecesForRegularOnes} from "./Extra/SubbingYourPiecesForRegularOnes";
import {ProfileHelpText} from "../../../PieceProfiles/Help/ProfileHelpText";
import {fontSizes, useStyles} from "./HelpSlides.jss";

export function HelpSlides({ helpItem, setHelpItem, screenCase, theme }) {
    const classes = useStyles({ theme });

    return (
        <div className={classes.help_items}>
            {helpItem === "putting created piece into a game" ? (
                <PuttingThePieceICreatedIntoAGame
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle theme={theme} fontSize={fontSize0026}>
                            Putting the Piece I Created Into a Game
                        </HelpTitle>
                    }
                />
            ) : null}
            {helpItem === "New Game (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{ pos: 0, numSlides: 4 }}
                    title={
                        <HelpTitle theme={theme} fontSize={fontSize0026}>
                            Starting a New Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {NewGameHelp(fontSizes[screenCase], theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "game types" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            game types
                        </HelpTitle>
                    }
                >
                    <GameTypesExplained theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "player types" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            player types
                        </HelpTitle>
                    }
                >
                    <PlayerTypesExplained theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "range display" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            range display
                        </HelpTitle>
                    }
                >
                    <UsingRangeDisplay theme={theme} />
                </HelpSlide>
            ) : null}
            {helpItem === "Load Game (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{ pos: 0, numSlides: 2 }}
                    title={
                        <HelpTitle theme={theme} fontSize={fontSize0026}>
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
                    initialState={{ pos: 0, numSlides: 6 }}
                    title={
                        <HelpTitle theme={theme} fontSize={fontSize0026}>
                            Creating a Piece
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {CreatePieceHelp(fontSizes[screenCase], theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "invalid pieces names" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            Invalid Pieces Names
                        </HelpTitle>
                    }
                >
                    <InvalidNameExplanation key='invalid-name-explanation' fontSize={fontSize0026} theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "uploading images for your piece" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            Uploading/Choosing Images for Your Piece
                        </HelpTitle>
                    }
                >
                    <ImageUploadExplanation key='invalid-upload-explanation' fontSize={fontSize0026} theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "offsets and spans explained" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            offsets and spans explained
                        </HelpTitle>
                    }
                >
                    <OffsetsAndSpansExplanation key='offsets-and-spans-explanation' fontSize={fontSize0026} theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "location of the piece on the board when creating it" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            location of the piece on the board when creating it
                        </HelpTitle>
                    }
                >
                    <LocationToolExplanation fontSize={fontSize0026} theme={theme}/>
                </HelpSlide>
            ) : null}

            {helpItem === "create piece page options" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            Create Piece Page Options (Load, Save, Reset, and Erase)
                        </HelpTitle>
                    }
                >
                    <OptionsToolExplanation fontSize={fontSize0026} theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "Saved Pieces (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{ pos: 0, numSlides: 3 }}
                    title={
                        <HelpTitle theme={theme} fontSize={fontSize0026}>
                            Saved Pieces
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {SavedPiecesHelp(fontSizes[screenCase], theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "make your piece a pawn promotion option" ? (
                <MakingYourPieceAnOptionForPawnsToPromoteTo theme={theme} onClose={() => setHelpItem(null)} />
            ) : null}
            {helpItem === "subbing your pieces for regular ones" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            subbing your pieces for regular ones
                        </HelpTitle>
                    }
                >
                    <SubbingYourPiecesForRegularOnes theme={theme} />
                </HelpSlide>
            ) : null}
            {helpItem === "GameRoot (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{ pos: 0, numSlides: 2 }}
                    title={
                        <HelpTitle theme={theme} fontSize={fontSize0026}>
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
                    initialState={{ pos: 0, numSlides: 3 }}
                    title={
                        <HelpTitle theme={theme} fontSize={fontSize0026}>
                            Customizing a New Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {CustomizeHelp(fontSizes[screenCase], theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "piece profiles" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                            fontSize={fontSize0026}
                        >
                            Piece Profiles
                        </HelpTitle>
                    }
                >
                    <ProfileHelpText fontSize={fontSize0026} theme={theme} />
                </HelpSlide>
            ) : null}
        </div>
    );
}