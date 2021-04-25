import React from "react";
import {useStyles} from "../../Reuseables/NavBar/Help/HelpText.jss";
import {Link, Typography} from "@material-ui/core";

export function GameplayText(props) {
    const classes = useStyles({theme: props.theme});
    return (
        <Typography className={classes.text}>
            Gameplay is mostly pretty self-explanatory if you have played chess
            before. Remember, there is a <Link href="https://www.chess.com/learn-how-to-play-chess" className={classes.link}>
            link to the rules of chess </Link> on the home page and in the navigation bar.
        </Typography>
    );
}