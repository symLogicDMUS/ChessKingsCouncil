import React from "react";
import {v4 as uuidv4} from 'uuid';
import Typography from "@material-ui/core/Typography";
import {DeleteForever, Storage} from "@material-ui/icons";
import {MuiButton as Button} from "../Reuseables/MuiButton";
import {button} from "../PieceProfiles/Header/LoadDeleteHeader.jss";
import {help_text, help_title} from "../Reuseables/NavBar/HelpText.jss";
import {ProfileHelpText} from "../PieceProfiles/Help/ProfileHelpText";
import {fontSize002} from "../styles/fontSizes.jss";
import {HelpButtonReminder} from "../Reuseables/NavBar/HelpButtonReminder";

export const HelpTitle = (fontSize, theme) => (
    <Typography variant="h6" style={{...help_title(fontSize, theme)}}>
        Records of All the Pieces you Have Created
    </Typography>
)

export const HelpText = (fontSize, theme) => ([
    <Typography key={uuidv4()} paragraph={true} style={help_text(fontSize, theme)}>
        On this page you can:
        <ol type='a'>
            <li>
                View the ranges or offsets of the black or white version of any piece.
            </li>
            <li>
                Click the Load button to go to the Create Piece page with that piece and further edit it.
                <Button
                    theme={theme}
                    startIcon={<Storage style={{fontSize: fontSize002, width: '1em'}}/>}
                    style={{...button(theme), marginLeft: '1.2em'}}
                >
                    Load
                </Button>
            </li>
            <li>Delete the piece. Pieces that are deleted will not affect games in progress, but no new game can be
                started with that piece.
                <Button
                    theme={theme}
                    startIcon={<DeleteForever style={{fontSize: fontSize002, width: '1em'}}/>}
                    style={{...button(theme), marginLeft: '1.2em'}}
                >
                    Delete
                </Button>
            </li>
        </ol>
    </Typography>,
    <ProfileHelpText theme={theme}/>,
    <HelpButtonReminder fontSize={fontSize} theme={theme} />
]);