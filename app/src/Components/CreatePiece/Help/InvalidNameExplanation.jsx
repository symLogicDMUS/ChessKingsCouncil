import React from "react";
import Typography from "@material-ui/core/Typography";
import {IncorrectNameEntryExamples} from "./IncorrectNameEntryExamples";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import { useStyles } from "../../Reuseables/NavBar/SubTitle.jss";

export function InvalidNameExplanation(props) {
    const classes = useStyles({theme: props.theme});
    const classes2 = useMoreStyles({theme: props.theme})
    return <div>
        <Typography variant='h6' className={classes.sub_title}>
            Invalid Piece Name
        </Typography>
        <Typography paragraph className={classes2.text}>
            Create a Piece to use in a custom game. You can not use the name of
            one of the 6 regular pieces: Bishop, Knight, Rook, Queen, King, or
            Pawn. The name cannot contain the characters . # $ [ ] . The name
            cannot be left blank.
        </Typography>
        <IncorrectNameEntryExamples theme={props.theme}/>
    </div>;
}