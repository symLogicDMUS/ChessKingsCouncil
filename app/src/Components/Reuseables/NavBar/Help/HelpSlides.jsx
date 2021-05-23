import React from "react";
import {HelpTitle} from "./HelpTitle";
import {HelpSlide} from "./HelpSlide";
import {RangeAnalysisExample} from "../../../GameRoot/Help/RangeAnalysisExample";
import {GameTypesExplained} from "./Extra/GameTypesExplained";
import {PlayerTypesExplained} from "./Extra/PlayerTypesExplained";
import {NamingAPieceExplained} from "../../../CreatePiece/Help/NamingAPieceExplained";
import {ImageUploadExplanation} from "../../../CreatePiece/Help/ImageUploadExplanation";
import {OptionsToolExplanation} from "../../../CreatePiece/Help/OptionsToolExplanation";
import {LocationToolExplanation} from "../../../CreatePiece/Help/LocationToolExplanation";
import {OffsetsAndSpansExplanation} from "../../../CreatePiece/Help/OffsetsAndSpansExplanation";
import {MakingYourPieceAnOptionForPawnsToPromoteTo} from "./Extra/MakingYourPieceAnOptionForPawnsToPromoteTo";
import {LoadingAndDeletingPiecesHelp} from "../../../MyPieces/Help/LoadingAndDeletingPiecesHelp";
import {SubbingYourPiecesForRegularOnes} from "./Extra/SubbingYourPiecesForRegularOnes";
import {PieceProfilesHelp} from "../../../PieceProfiles/Help/PieceProfilesHelp";
import {GameNameText} from "../../../NewGame/GameOptions/Help/GameNameText";
import {PlayingGameHelp} from "../../../GameRoot/Help/PlayingGameHelp";
import {useStyles} from "./HelpSlides.jss";
import {GameImageGridExplained} from "../../../LoadGame/GameSnapshot/GameImageGridExplained";
import {GameplayText} from "../../../GameRoot/Help/GameplayText";

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
            {helpItem === "game name" ? (
                <HelpSlide
                    onClose={() => setHelpItem(null)}
                    initialState={{ pos: 0, numSlides: 4 }}
                    title={
                        <HelpTitle theme={theme}>
                            Giving your game a name
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    {<GameNameText key='new-game-help' theme={theme}/>}
                </HelpSlide>
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
                            range analysis board
                        </HelpTitle>
                    }
                >
                    <RangeAnalysisExample theme={theme} />
                </HelpSlide>
            ) : null}
            {helpItem === "naming a piece" ? (
                <HelpSlide
                    theme={theme}
                    onClose={() => setHelpItem(null)}
                    title={
                        <HelpTitle theme={theme}>
                            Naming a Piece and Invalid Names
                        </HelpTitle>
                    }
                >
                    <NamingAPieceExplained key='invalid-name-explanation' theme={theme}/>
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
                    <LocationToolExplanation theme={theme} />
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
            {helpItem === "loading and deleting pieces" ? (
                <HelpSlide
                    onClose={() => setHelpItem(null)}
                    initialState={{ pos: 0, numSlides: 3 }}
                    title={
                        <HelpTitle theme={theme}>
                            Saved Pieces
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    <LoadingAndDeletingPiecesHelp theme={theme}/>
                </HelpSlide>
            ) : null}
            {helpItem === "make your piece a pawn promotion option" ? (
                    <HelpSlide
                        onClose={() => setHelpItem(null)}
                        initialState={{ pos: 0, numSlides: 3 }}
                        title={
                            <HelpTitle theme={theme}>
                                Saved Pieces
                            </HelpTitle>
                        }
                        theme={theme}
                    >
                        <MakingYourPieceAnOptionForPawnsToPromoteTo theme={theme} onClose={() => setHelpItem(null)} />
                    </HelpSlide>
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
            {helpItem === "playing the game" ? (
                <HelpSlide
                    onClose={() => setHelpItem(null)}
                    initialState={{ pos: 0, numSlides: 2 }}
                    title={
                        <HelpTitle theme={theme}>
                            Playing a Game
                        </HelpTitle>
                    }
                    theme={theme}
                >
                    <GameplayText theme={theme}/>
                </HelpSlide>
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
            {helpItem === "game image grid" ? (
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
                    <GameImageGridExplained theme={theme} />
                </HelpSlide>
            ) : null}
        </div>
    );
}