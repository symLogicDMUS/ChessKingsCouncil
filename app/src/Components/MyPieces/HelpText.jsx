import React from "react";
import Typography from "@material-ui/core/Typography";
import {DeleteForever, Storage} from "@material-ui/icons";
import {MuiButton as Button} from "../Reuseables/Clickables/MuiButton";
import {button} from "../PieceProfiles/Header/LoadDeleteHeader.jss";
import {help_text} from "../Reuseables/NavBar/Help/HelpText.jss";
import {ProfileHelpText} from "../PieceProfiles/Help/ProfileHelpText";
import {HelpButtonReminder} from "../Reuseables/NavBar/Help/HelpButtonReminder";
import {fontSize002} from "../styles/fontSizes.jss";

export const HelpText = (fontSize, theme) => ([
    <Typography key={'saved-pieces-help-text'} paragraph={true} style={help_text(fontSize, theme)}>
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
    <ProfileHelpText fontSize={fontSize} theme={theme}/>,
    <HelpButtonReminder fontSize={fontSize} theme={theme} />
]);