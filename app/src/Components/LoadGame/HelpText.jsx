import React from "react";
import {v4 as uuidv4} from 'uuid';
import Typography from "@material-ui/core/Typography";
import {help_text} from "../Reuseables/NavBar/HelpText.jss";
import {HelpButtonReminder} from "../Reuseables/NavBar/HelpButtonReminder";

export const HelpText = (fontSize, theme) => ([
     <Typography
        key={uuidv4()}
        paragraph={true}
        style={help_text(fontSize, theme)}
    >
        <p>
            Each game has an image of the current position of the board, and the name under the image. You can turn the
            names on and off with the Show Names checkbox. Currently, all game Categories (Standard, Custom, and Council)
            are together in 1 group.
        </p>
        <p>
            Remember that there is a record of all created pieces,  for adding to new games, as well as each game's
            personal record of the pieces included in it. The game's person record of pieces doesn't change if any of
            those pieces in the record of all pieces, is modified/deleted after.
        </p>
    </Typography>,
    <HelpButtonReminder theme={theme} />
]);
