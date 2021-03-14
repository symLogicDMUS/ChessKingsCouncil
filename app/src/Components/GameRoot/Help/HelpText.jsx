import React from "react";
import { Typography } from "@material-ui/core";
import {GameInfoExample} from "./GameInfoExample";
import {SaveResignExample} from "./SaveResignExample";
import { help_text } from "../../Reuseables/NavBar/Help/HelpText.jss";
import {HelpButtonReminder} from "../../Reuseables/NavBar/Help/HelpButtonReminder";

export const HelpText = (fontSize, theme) => [
    <Typography
        paragraph={true}
        key={'game-play-help'}
        style={help_text(fontSize, theme)}
    >
        <p>
            Gameplay is mostly pretty self-explanatory if you have played chess
            before. Remember there is a link to the rules of chess on the home
            page.
        </p>
        <p>
            The game name, type (Standard, Custom or Council), and player type
            (white, black or test) are listed in the sidebar on desktop and the
            bottom accordion on mobile.
        </p>
        <GameInfoExample theme={theme} />
        <p>
            Games are not saved automatically. Any moves including resigning the
            game, don't take effect until the saved button is pressed.
        </p>
        <SaveResignExample theme={theme} />
        <p>
            If you save the game with a different name, than another copy of the
            game will still exist with the name you originally gave.
        </p>
        <p>
            The Range Display tool is a mini board that updates along with the
            game. Click any square on the mini board containing a piece, and the
            squares where that piece can move if it's that piece's color's turn
            are highlighted. This is useful for viewing where your opponent can
            move, as well as recalling the ranges of pieces you created. Clicking
            a piece will also open the profile for that piece in a new window.
            This feature can be turned off by unchecking the 'Show Profile' checkbox.
        </p>
        <p>
            You can saved the game with a different name than what you first entered and the version under the old name
            will still be available, if you saved it as well.
        </p>
    </Typography>,
    <HelpButtonReminder fontSize={fontSize} theme={theme} />
];
