import React from "react";
import {HelpTitle} from "./HelpTitle";
import {HelpSlide} from "./HelpSlide";
import {HelpSlideshow} from "./HelpSlideshow";
import {UsingRangeDisplay} from "./Extra/UsingRangeDisplay";
import {GameTypesExplained} from "./Extra/GameTypesExplained";
import {PlayerTypesExplained} from "./Extra/PlayerTypesExplained";
import {LoadGameHelp} from "../../../LoadGame/LoadGameHelp";
import {SavedPiecesHelp} from "../../../MyPieces/Help/SavedPiecesHelp";
import {GameRootHelp} from "../../../GameRoot/Help/GameRootHelp";
import {NewGameHelp} from "../../../NewGame/GameOptions/NewGameHelp";
import {CreatePieceHelp} from "../../../CreatePiece/Help/CreatePieceHelp";
import {NewGameHelpText} from "../../../NewGame/Customize/Help/NewGameHelpText";
import {InvalidNameExplanation} from "../../../CreatePiece/Help/InvalidNameExplanation";
import {ImageUploadExplanation} from "../../../CreatePiece/Help/ImageUploadExplanation";
import {OptionsToolExplanation} from "../../../CreatePiece/Help/OptionsToolExplanation";
import {LocationToolExplanation} from "../../../CreatePiece/Help/LocationToolExplanation";
import {OffsetsAndSpansExplanation} from "../../../CreatePiece/Help/OffsetsAndSpansExplanation";
import {MakingYourPieceAnOptionForPawnsToPromoteTo} from "./Extra/MakingYourPieceAnOptionForPawnsToPromoteTo";
import {SubbingYourPiecesForRegularOnes} from "./Extra/SubbingYourPiecesForRegularOnes";
import {PieceProfilesHelp} from "../../../PieceProfiles/Help/PieceProfilesHelp";
import {useStyles} from "./HelpSlides.jss";

const PuttingThePieceICreatedIntoAGame = React.lazy(() => import('./Extra/PuttingThePieceICreatedIntoAGame'));

export function HelpSlides({ helpItem, setHelpItem, theme }) {
    const classes = useStyles({ theme });

    return (
        <div className={classes.help_items}>
            {helpItem === "putting created piece into a game" ? (
                <PuttingThePieceICreatedIntoAGame
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle theme={theme}>
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
                        <HelpTitle theme={theme}>
                            Starting a New Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {NewGameHelp(theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "game types" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle theme={theme}>
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
                        <HelpTitle theme={theme}>
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
                        <HelpTitle theme={theme}>
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
                        <HelpTitle theme={theme}>
                            Loading a Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {LoadGameHelp(theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "Create Piece (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{ pos: 0, numSlides: 6 }}
                    title={
                        <HelpTitle theme={theme}>
                            Creating a Piece
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {CreatePieceHelp(theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "invalid pieces names" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle theme={theme}>
                            Invalid Pieces Names
                        </HelpTitle>
                    }
                >
                    <InvalidNameExplanation key='invalid-name-explanation' theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "uploading images for your piece" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle theme={theme}>
                            Uploading/Choosing Images for Your Piece
                        </HelpTitle>
                    }
                >
                    <ImageUploadExplanation key='invalid-upload-explanation' theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "offsets and spans explained" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle theme={theme}>
                            offsets and spans explained
                        </HelpTitle>
                    }
                >
                    <OffsetsAndSpansExplanation key='offsets-and-spans-explanation' theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "location of the piece on the board when creating it" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle theme={theme}>
                            location of the piece on the board when creating it
                        </HelpTitle>
                    }
                >
                    <LocationToolExplanation theme={theme}/>
                </HelpSlide>
            ) : null}

            {helpItem === "create piece page options" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                        >
                            Create Piece Page Options (Load, Save, Reset, and Erase)
                        </HelpTitle>
                    }
                >
                    <OptionsToolExplanation theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "Saved Pieces (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{ pos: 0, numSlides: 3 }}
                    title={
                        <HelpTitle theme={theme}>
                            Saved Pieces
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {SavedPiecesHelp(theme)}
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
                        <HelpTitle theme={theme}>
                            Playing a Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {GameRootHelp(theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "Customize (all)" ? (
                <HelpSlideshow
                    onClose={() => setHelpItem(null)}
                    initialState={{ pos: 0, numSlides: 3 }}
                    title={
                        <HelpTitle theme={theme}>
                            Customizing a New Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {NewGameHelpText(theme)}
                </HelpSlideshow>
            ) : null}
            {helpItem === "piece profiles" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle
                            theme={theme}
                        >
                            Piece Profiles
                        </HelpTitle>
                    }
                >
                    <PieceProfilesHelp theme={theme} />
                </HelpSlide>
            ) : null}
        </div>
    );
}