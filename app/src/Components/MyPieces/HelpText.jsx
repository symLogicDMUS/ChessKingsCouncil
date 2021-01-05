import React from "react";
import {v4 as uuidv4} from 'uuid';
import {Add} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {help_title, help_text} from "../Reuseables/NavBar/HelpText.jss";

export const HelpTitle = (fontSize, theme) => (
    <Typography variant="h6" style={{...help_title(fontSize, theme)}}>
        Records of All the Pieces you Have Created
    </Typography>
)

export const HelpText = (fontSize, theme) => ([
    <Typography key={uuidv4()} paragraph={true} style={help_text(fontSize, theme)}>
        On this page you can:
        <ol type='a'>
            <li>View the ranges or offsets of the black or white version of any piece. Click the <span
                style={{display: 'inline'}}><Add/></span> Icon at the top of the span or offset list to view an image of
                a board with only that piece, and its span or offset squares highlighted.
            </li>
            <li>Click the Load button to go to the Piece Creation page with that piece and further edit it.</li>
            <li>Delete the piece. Pieces that are deleted will not affect games in progress, but no new game can be
                started with that piece.
            </li>
        </ol>
    </Typography>,
]);