import React from "react";
import Typography from "@material-ui/core/Typography";
import {IncorrectNameEntryExamples} from "./IncorrectNameEntryExamples";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import { useStyles } from "../../Reuseables/NavBar/SubTitle.jss";

export function InvalidNameExplanation(props) {
    const classes = useStyles({theme: props.theme});
    const classes2 = useMoreStyles({theme: props.theme})
    return <div>
        <Typography paragraph className={classes2.text}>You can not use the name of one of the 6 regular pieces:{" "}
            <div className={classes2.emphasis}> Bishop, Knight, Rook, Queen, King, or Pawn</div>, as the name of a piece
            you're creating. The name cannot cannot contain the characters{"  "}<div className={classes2.emphasis}>. # $ [ ]</div>{"  "}
            The name field cannot be left blank.
        </Typography>
        <IncorrectNameEntryExamples theme={props.theme}/>
    </div>;
}