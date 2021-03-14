import React from "react";
import Typography from "@material-ui/core/Typography";
import {help_text} from "../../Reuseables/NavBar/Help/HelpText.jss";
import {IncorrectNameEntryExamples} from "./IncorrectNameEntryExamples";
import {fontSize002} from "../../styles/fontSizes.jss";
import { useStyles } from "../../Reuseables/NavBar/SubTitle.jss";

export function InvalidNameExplanation(props) {
    const classes = useStyles({theme: props.theme, fontSize: props.fontSize});
    return <div>
        <Typography variant='h6' className={classes.sub_title}>
            Invalid Piece Name
        </Typography>
        <Typography style={help_text(props.fontSize, props.theme)}>
            Create a Piece to use in a custom game. You can not use the name of
            one of the 6 regular pieces: Bishop, Knight, Rook, Queen, King, or
            Pawn. The name cannot contain the characters . # $ [ ] . The name
            cannot be left blank.
        </Typography>
        <IncorrectNameEntryExamples theme={props.theme} fontSize={props.fontSize}/>
    </div>;
}