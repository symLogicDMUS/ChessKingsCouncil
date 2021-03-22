import React from "react";
import {fontSize002} from "../styles/fontSizes.jss";
import Typography from "@material-ui/core/Typography";
import {DeleteForever, Storage} from "@material-ui/icons";
import {MuiButton as Button} from "../Reuseables/Clickables/MuiButton";
import {help_text} from "../Reuseables/NavBar/Help/HelpText.jss";
import {ProfileHelpText} from "../PieceProfiles/Help/ProfileHelpText";
import {HelpButtonReminder} from "../Reuseables/NavBar/Help/HelpButtonReminder";
import { useStyles } from "../PieceProfiles/Header/LoadDeleteHeader.jss";

function SavedPiecesHelpText(props) {
    const classes = useStyles({theme: props.theme});
    return <Typography paragraph={true} style={help_text(props.fontSize, props.theme)}>
        On this page you can:
        <ol type='a'>
            <li>
                View the ranges or offsets of the black or white version of any piece.
            </li>
            <li>
                Click the Load button to go to the Create Piece page with that piece and further edit it.
                <Button
                    theme={props.theme}
                    startIcon={<Storage className={classes.icon}/>}
                    classProp={classes.button}
                    addedClassProp={props.classes.load_button}
                >
                    Load
                </Button>
            </li>
            <li>Delete the piece. Pieces that are deleted will not affect games in progress, but no new game can be
                started with that piece.
                <Button
                    theme={props.theme}
                    classProp={classes.button}
                    addedClassProp={props.classes.delete_button}
                    startIcon={<DeleteForever className={classes.button}/>}
                >
                    Delete
                </Button>
            </li>
        </ol>
    </Typography>;
}

export const HelpText = (fontSize, theme) => ([
    <SavedPiecesHelpText key={'saved-pieces-help-text'} fontSize={fontSize} theme={theme}/>,
    <ProfileHelpText fontSize={fontSize} theme={theme}/>,
    <HelpButtonReminder fontSize={fontSize} theme={theme} />
]);