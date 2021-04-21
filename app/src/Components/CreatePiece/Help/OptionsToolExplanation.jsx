import React from "react";
import {IconButton} from "@material-ui/core";
import {themes} from "../../styles/themes.jss";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import {icons} from "../../styles/icons/top/icons.jss";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/SubTitle.jss";
import {useStyles as useEvenMoreStyles} from "../../Reuseables/NavBar/Help/HelpText.jss";
import { useStyles } from "./OptionsToolExplanation.jss";

export function OptionsToolExplanation(props) {
    const classes = useStyles({theme: props.theme});
    const classes2 = useMoreStyles({theme: props.theme});
    const classes3 = useEvenMoreStyles({theme: props.theme});

    return <div>
        <Typography variant='h6' className={classes2.sub_title}>Options</Typography>
        <Typography paragraph>
                <Typography className={classes3.text} paragraph>
                    <SvgIcon className={classes.option}>
                        {icons.load(themes[props.theme].text)}
                    </SvgIcon>
                    <div className={classes3.emphasis}>Load:</div> Opens a list of previously created pieces. You
                    also have the option to delete them. The Load option is so
                    that you can do the same things as the 'Saved Pieces' page
                    without losing your unsaved work.
                </Typography>
                <Typography className={classes3.text} paragraph>
                    <SvgIcon className={classes.option}>
                        {icons.save(themes[props.theme].text)}
                    </SvgIcon>
                    <div className={classes3.emphasis}>Save</div>: Saves the piece. You can now add the piece as a
                    Pawn promotion option or a substitute for a regular piece,
                    when starting a new game. The piece can't be saved if the
                    name or image icons are blank.
                </Typography>
                <Typography className={classes3.text} paragraph>
                    <SvgIcon className={classes.option}>
                        {icons.reset(themes[props.theme].text)}
                    </SvgIcon>
                    <div className={classes3.emphasis}>Reset</div>: If you loaded a previously created piece than
                    this will reset the piece's profile to the last time you
                    saved it. If you're editing a new piece, the Reset option is
                    the same as the Erase option.
                </Typography>
                <Typography className={classes3.text} paragraph>
                    <SvgIcon className={classes.option}>
                        {icons.erase(themes[props.theme].text)}
                    </SvgIcon>
                    <div className={classes3.emphasis}>Erase:</div> The Erase option removes all ranges and makes
                    the name and image icons blank.
                </Typography>
        </Typography>
    </div>;
}