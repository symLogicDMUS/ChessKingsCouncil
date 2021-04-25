import React from "react";
import Box from "@material-ui/core/Box";
import { themes } from "../../styles/themes/themes.jss";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { icons } from "../../styles/icons/top/icons.jss";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/SubTitle.jss";
import { useStyles as useEvenMoreStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import { useStyles } from "./OptionsToolExplanation.jss";
import clsx from "clsx";
import { SeeExampleButton } from "../../Reuseables/NavBar/Help/SeeExampleButton";

export function OptionsToolExplanation(props) {
    const classes = useStyles({ theme: props.theme });
    const classes2 = useMoreStyles({ theme: props.theme });
    const classes3 = useEvenMoreStyles({ theme: props.theme });

    return (
        <div>
            <Typography className={classes3.text} paragraph>
                On large screens, the{" "}
                <div className={classes3.emphasis}>Options</div> are
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"Images/gif/wide/options.png"}
                    smSrc={"Images/gif/wide/options.png"}
                >
                    at the bottom of the right hand side content
                </SeeExampleButton>
                .
            </Typography>
            <Typography paragraph>
                <Typography className={classes.option_area} paragraph>
                    <Box className={classes.option}>
                        <SvgIcon className={classes.icon}>
                            {icons.load(themes[props.theme].text)}
                        </SvgIcon>
                    </Box>
                    <Typography className={classes.paragraph}>
                        <div className={classes3.emphasis}>Load:</div>
                        Opens a list of previously created pieces. You also have
                        the option to delete them. The Load option is so that
                        you can do the same things as the 'Saved Pieces' page
                        without losing your unsaved work. On smaller screens,{" "}
                        <SeeExampleButton
                            isText={true}
                            theme={props.theme}
                            lgSrc={"Images/gif/thin/load icon.png"}
                            smSrc={"Images/gif/thin/load icon.png"}
                        >
                            the load icon
                        </SeeExampleButton>{" "}
                        is a filled in cylinder:
                        <SvgIcon
                            className={clsx(classes3.icon, {
                                [classes.icon_margin]: true,
                            })}
                        >
                            {icons.load_alt}
                        </SvgIcon>
                    </Typography>
                </Typography>
                <Typography className={classes.option_area} paragraph>
                    <SvgIcon className={classes.icon}>
                        {icons.save(themes[props.theme].text)}
                    </SvgIcon>
                    <Typography className={classes.paragraph}>
                        <div className={classes3.emphasis}>Save</div>: Saves the
                        piece. You can now add the piece as a Pawn promotion
                        option or a substitute for a regular piece, when
                        starting a new game. The piece can't be saved if the
                        name or image icons are blank.{" "}
                        <SeeExampleButton
                            isText={true}
                            theme={props.theme}
                            lgSrc={"Images/gif/thin/save icon.png"}
                            smSrc={"Images/gif/thin/save icon.png"}
                        >
                            The save icon
                        </SeeExampleButton>
                        looks a little difference on smaller screens:{" "}
                        <SvgIcon
                            className={clsx(classes3.icon, {
                                [classes.icon_margin]: true,
                            })}
                        >
                            {icons.save_alt}
                        </SvgIcon>
                    </Typography>
                </Typography>
                <Typography className={classes.option_area} paragraph>
                    <SvgIcon className={classes.icon}>
                        {icons.reset(themes[props.theme].text)}
                    </SvgIcon>
                    <Typography className={classes.paragraph}>
                        <div className={classes3.emphasis}>Reset</div>: If you
                        loaded a previously created piece than this will reset
                        the piece's profile to the last time you saved it. If
                        you're editing a new piece, the Reset option is the same
                        as the Erase option. On smaller screens,
                        <SeeExampleButton
                            isText={true}
                            theme={props.theme}
                            lgSrc={"Images/gif/thin/reset icon.png"}
                            smSrc={"Images/gif/thin/reset icon.png"}
                        >
                            the reset icon
                        </SeeExampleButton>{" "}
                        is the curved arrow:{" "}
                        <SvgIcon
                            className={clsx(classes3.icon, {
                                [classes.icon_margin]: true,
                            })}
                        >
                            {icons.reset_alt}
                        </SvgIcon>
                    </Typography>
                </Typography>
                <Typography className={classes.option_area} paragraph>
                    <SvgIcon className={classes.icon}>
                        {icons.erase(themes[props.theme].text)}
                    </SvgIcon>
                    <Typography className={classes.paragraph}>
                        <div className={classes3.emphasis}>Erase:</div>
                        The Erase option removes all ranges and makes the name
                        and image icons blank. On smaller screens,{" "}
                        <SeeExampleButton
                            isText={true}
                            theme={props.theme}
                            lgSrc={"Images/gif/thin/erase icon.png"}
                            smSrc={"Images/gif/thin/erase icon.png"}
                        >
                            the erase icon
                        </SeeExampleButton>{" "}
                        is the backspace symbol:
                        <SvgIcon
                            className={clsx(classes3.icon, {
                                [classes.icon_margin]: true,
                            })}
                        >
                            {icons.erase_alt}
                        </SvgIcon>
                    </Typography>
                </Typography>
            </Typography>
        </div>
    );
}
