import React from "react";
import Typography from "@material-ui/core/Typography";
import {IncorrectNameEntryExamples} from "./IncorrectNameEntryExamples";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import {SeeExampleButton} from "../../Reuseables/NavBar/Help/SeeExampleButton";
import {SvgIcon} from "@material-ui/core";
import {icons} from "../../styles/icons/top/icons.jss";

export function NamingAPieceExplained(props) {
    const classes2 = useMoreStyles({theme: props.theme})
    return <>
        <Typography className={classes2.text} paragraph>
            On larger screens, the text field for naming a piece is <SeeExampleButton
                isText={true}
                theme={props.theme}
                lgSrc={"Images/gif/wide/name.png"}
                smSrc={"Images/gif/wide/name.png"}
            >
                at the top of the right hand side content.
            </SeeExampleButton>
            On smaller screens, the name field is opened by clicking the <SeeExampleButton
                isText={true}
                theme={props.theme}
                lgSrc={"Images/gif/thin/name.png"}
                smSrc={"Images/gif/thin/name.png"}
            >
                terminal icon <SvgIcon className={classes2.icon}>{icons.name_tool}</SvgIcon> in the right hand side icon
                column
            </SeeExampleButton>.
        </Typography>
        <Typography paragraph className={classes2.text}>You cannot use the name of one of the 6 regular pieces:{" "}
            <div className={classes2.emphasis}> Bishop, Knight, Rook, Queen, King, or Pawn</div>, as the name of a piece
            you're creating. The name cannot cannot contain the characters{"  "}<div className={classes2.emphasis}>. # $ [ ]</div>{"  "}
            The name field cannot be left blank.
        </Typography>
        <IncorrectNameEntryExamples theme={props.theme}/>
    </>;
}