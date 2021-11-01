import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: 924,
        height: 520,
        maxWidth: 345,
    },
    media: {
        height: 520,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    src="https://youtu.be/JMfDZIoA5xA"
                    title="Demo"
                    component="iframe"
                />
                <CardContent>
                    Welcome! Create your own game of Chess with pieces that move
                    how you decide! Start out by visiting the Create Piece page.
                    After you save your piece there, visit the New Game page and
                    choose the Custom option under game types. Your piece can
                    start the game in place of a normal Chess piece, or be an
                    option for Pawns to be promoted to when they reach the back
                    row. You can also play classic Chess. There are a variety of
                    sample images, pieces, and games, for new users. There are
                    cool themes like Star Wars, NBA and MechWarrior that you can
                    access through the Settings option in the side drawer. For
                    further help, choose the help option in the side drawer. I
                    hope that you enjoy the site!
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
