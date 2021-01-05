import React from "react";
import {v4 as uuidv4} from 'uuid';
import Typography from "@material-ui/core/Typography";
import { help_text, help_title } from "../Reuseables/NavBar/HelpText.jss";

export const HelpTitle = (fontSize, theme) => (
    <Typography variant="h6" style={{ ...help_title(fontSize, theme) }}>
        Loading a Previously Saved Game
    </Typography>
);

export const HelpText = (fontSize, theme) => [
    <Typography
        key={uuidv4()}
        paragraph={true}
        style={help_text(fontSize, theme)}
    >
        <p>
            Currently, all game Categories (Standard, Custom, and Council) are
            grouped together in 1 dropdown menu. In the future, saved games will
            be displayed in a grid of images of each game's current board.
        </p>
        <p>
            Each game contains its own record of the pieces included in it,
            which dosn't change even if the universal record of those pieces are
            modified/deleted after.
        </p>
    </Typography>,
];
