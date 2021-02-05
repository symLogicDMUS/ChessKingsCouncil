import React from "react";
import Typography from "@material-ui/core/Typography";
import {help_text} from "../../Reuseables/NavBar/HelpText.jss";
import {fontSize002} from "../../styles/fontSizes.jss";
import {Option} from "../Options/Option";
import { useStyles } from "../../Reuseables/SubTitle.jss";

export function OptionsToolExplanation(props) {
    const classes = useStyles({theme: props.theme, fontSize: fontSize002});
    return <div>
        <Typography variant='h6' className={classes.sub_title}>Options</Typography>
        <Typography paragraph style={help_text(props.fontSize, props.theme)}>
            <ul>
                <li>
                    <i>Load:</i> Opens a list of previously created pieces. You
                    also have the option to delete them. The Load option is so
                    that you can do the same things as the 'My Pieces' page
                    without losing your unsaved work.
                    <br/>
                    <br/>
                    <Option iconType="load" theme={props.theme}/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <i>Save</i>: Saves the piece. You can now add the piece as a
                    Pawn promotion option or a substitute for a regular piece,
                    when starting a new game. The piece can't be saved if the
                    name or image icons are blank.
                    <br/>
                    <br/>
                    <Option iconType="save" theme={props.theme}/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <i>Reset</i>: If you loaded a previously created piece than
                    this will reset the piece's profile to the last time you
                    saved it. If you're editing a new piece, the Reset option is
                    the same as the Erase option.
                    <br/>
                    <br/>
                    <Option iconType="reset" theme={props.theme}/>
                    <br/>
                    <br/>
                </li>
                <li>
                    <i>Erase:</i> The Erase option removes all ranges and makes
                    the name and image icons blank.
                    <br/>
                    <br/>
                    <Option iconType="erase" theme={props.theme}/>
                    <br/>
                    <br/>
                </li>
            </ul>
        </Typography>
    </div>;
}