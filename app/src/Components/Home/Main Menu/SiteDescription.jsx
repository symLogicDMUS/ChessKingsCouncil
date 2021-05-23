import React from "react";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./SiteDescription.jss";

export function SiteDescription({theme}) {
    const classes = useStyles({theme});

    return <Typography paragraph className={classes.paragraph}>
        Welcome! Create your own game of Chess with pieces that move how you decide! Start out by visiting
        the <Link to='/CreatePiece'>Create Piece page</Link>. After you save your piece there, visit the New Game page
        and choose the Custom option under game types. Your piece can start the game in place of a normal Chess piece,
        or be an option for Pawns to be promoted to when they reach the back row. You can also play classic Chess. There
        are a variety of sample images, pieces, and games, for new users. There are cool themes like NBA basketball,
        Star Wars, and MechWarrior. For further help, choose the help option in the side drawer. I hope that you enjoy
        the site!
    </Typography>;
}