import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Typography } from "@material-ui/core";
import { help_text, help_title } from "../Reuseables/NavBar/HelpText.jss";

export const HelpTitle = (fontSize, theme) => (
    <Typography variant="h6" style={{ ...help_title(fontSize, theme) }}>
        Gameplay
    </Typography>
);

export const HelpText = (fontSize, theme) => [
    <Typography
        key={uuidv4()}
        paragraph={true}
        style={help_text(fontSize, theme)}
    >
        The Range display tool is a mini board that updates along with the game.
        Click any square on the mini board containing a piece, and the squares
        where that piece can move if it's that piece's color's turn are
        highlighted. This is useful for viewing where your opponent can move, as
        well as recalling the ranges of pieces you created. You can saved the
        game with a different name than what you first entered and the version
        under the old name will still be available.
    </Typography>,
];
