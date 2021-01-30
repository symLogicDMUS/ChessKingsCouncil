import React from "react";
import {v4 as uuidv4} from 'uuid';
import {Add, DeleteForever} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {help_title, help_text} from "../Reuseables/NavBar/HelpText.jss";
import {MuiButton as Button} from "../Reuseables/MuiButton";
import StorageIcon from "@material-ui/icons/Storage";
import {button} from "../PieceProfiles/Header/LoadDeleteHeader.jss";
import {fontSize002} from "../styles/fontSizes.jss";

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
            <li>Click the Load button to go to the Piece Creation page with that piece and further edit it.
                <Button
                    theme={theme}
                    startIcon={<StorageIcon />}
                    style={{...button(fontSize002, theme), marginLeft: '1.2em'}}
                >
                    Load
                </Button>
            </li>
            <li>Delete the piece. Pieces that are deleted will not affect games in progress, but no new game can be
                started with that piece.
                <Button
                    theme={theme}
                    startIcon={<DeleteForever />}
                    style={{...button(fontSize002, theme), marginLeft: '1.2em'}}
                >
                    Delete
                </Button>
            </li>
        </ol>
    </Typography>,
]);