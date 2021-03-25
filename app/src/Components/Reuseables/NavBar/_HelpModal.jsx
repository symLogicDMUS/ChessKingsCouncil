import React, { useState } from "react";
import { Portal } from "@material-ui/core";
import { ListItem } from "../ScrollTable/ListItem";
import ScrollTable from "../ScrollTable/ScrollTable";
import {fontSize002, fontSize0026, fontSizeW0045} from "../../styles/fontSizes.jss";
import { HelpText as CreatePieceHelp } from "../../CreatePiece/Help/HelpText";
import { HelpText as NewGameHelp } from "../../NewGame/GameOptions/HelpText";
import { HelpText as LoadGameHelp } from "../../LoadGame/HelpText";
import { HelpText as SavedPiecesHelp } from "../../MyPieces/HelpText";
import { HelpText as GameRootHelp } from "../../GameRoot/Help/HelpText";
import { HelpText as CustomizeHelp } from "../../NewGame/Customize/Help/HelpText";
import { useStyles } from "./Help/HelpModal.jss";
import { HelpSlideshow } from "./Help/HelpSlideshow";
import {HelpTitle} from "./Help/HelpTitle";
import {buttonStyle, listStyle, rowStyle} from "./Help/HelpTable.jss";

const fontSizes = {
    wide: fontSize002,
    thin: fontSizeW0045,
};

export function HelpModal({ theme, screenCase }) {
    const [pageName, setPageName] = useState(null);

    const classes = useStyles({ theme });

    return (
        <>
            <Portal>
                {pageName === "New Game" ? (
                    <div className={classes.help_content}>
                        <HelpSlideshow
                            onClose={() => setPageName(null)}
                            initialState={{ pos: 0, numSlides: 4 }}
                            title={<HelpTitle theme={theme} fontSize={fontSize0026}>Starting a New Game</HelpTitle>}
                            theme={theme}
                        >
                            {NewGameHelp(fontSizes[screenCase], theme)}
                        </HelpSlideshow>
                    </div>
                ) : null}
                {pageName === "Load Game" ? (
                    <div className={classes.help_content}>
                        <HelpSlideshow
                            onClose={() => setPageName(null)}
                            initialState={{ pos: 0, numSlides: 2 }}
                            title={<HelpTitle theme={theme} fontSize={fontSize0026}>Loading a Game</HelpTitle>}
                            theme={theme}
                        >
                            {LoadGameHelp(fontSizes[screenCase], theme)}
                        </HelpSlideshow>
                    </div>
                ) : null}
                {pageName === "Create Piece" ? (
                    <div className={classes.help_content}>
                        <HelpSlideshow
                            onClose={() => setPageName(null)}
                            initialState={{ pos: 0, numSlides: 6 }}
                            title={<HelpTitle theme={theme} fontSize={fontSize0026}>Creating a Piece</HelpTitle>}
                            theme={theme}
                        >
                            {CreatePieceHelp(fontSizes[screenCase], theme)}
                        </HelpSlideshow>
                    </div>
                ) : null}
                {pageName === "Saved Pieces" ? (
                    <div className={classes.help_content}>
                        <HelpSlideshow
                            onClose={() => setPageName(null)}
                            initialState={{ pos: 0, numSlides: 3 }}
                            title={<HelpTitle theme={theme} fontSize={fontSize0026}>Saved Pieces</HelpTitle>}
                            theme={theme}
                        >
                            {SavedPiecesHelp(fontSizes[screenCase], theme)}
                        </HelpSlideshow>
                    </div>
                ) : null}
                {pageName === "GameRoot" ? (
                    <div className={classes.help_content}>
                        <HelpSlideshow
                            onClose={() => setPageName(null)}
                            initialState={{ pos: 0, numSlides: 2 }}
                            title={<HelpTitle theme={theme} fontSize={fontSize0026}>Playing a Game</HelpTitle>}
                            theme={theme}
                        >
                            {GameRootHelp(fontSizes[screenCase], theme)}
                        </HelpSlideshow>
                    </div>
                ) : null}
                {pageName === "Customize" ? (
                    <div className={classes.help_content}>
                        <HelpSlideshow
                            onClose={() => setPageName(null)}
                            initialState={{ pos: 0, numSlides: 3 }}
                            title={<HelpTitle theme={theme} fontSize={fontSize0026}>Customizing a New Game</HelpTitle>}
                            theme={theme}
                        >
                            {CustomizeHelp(fontSizes[screenCase], theme)}
                        </HelpSlideshow>
                    </div>
                ) : null}
            </Portal>
            <div className={classes.help_table}>
                <ScrollTable
                    listItems={[
                        <ListItem
                            theme={theme}
                            onClick={() => setPageName("New Game")}
                        >
                            New Game
                        </ListItem>,
                        <ListItem
                            theme={theme}
                            onClick={() => setPageName("Load Game")}
                        >
                            Loading a Game
                        </ListItem>,
                        <ListItem
                            theme={theme}
                            onClick={() => setPageName("Create Piece")}
                        >
                            Creating a Piece
                        </ListItem>,
                        <ListItem
                            theme={theme}
                            onClick={() => setPageName("Saved Pieces")}
                        >
                            Loading/Deleting a Piece
                        </ListItem>,
                        <ListItem
                            theme={theme}
                            onClick={() => setPageName("GameRoot")}
                        >
                            Playing a Game
                        </ListItem>,
                        <ListItem
                            theme={theme}
                            onClick={() => setPageName("Customize")}
                        >
                            Creating a Custom Game
                        </ListItem>,
                    ]}
                    numRows={6}
                    theme={theme}
                    style={listStyle()}
                    rowStyle={rowStyle()}
                    buttonStyle={buttonStyle()}
                />
            </div>
        </>
    );
}
