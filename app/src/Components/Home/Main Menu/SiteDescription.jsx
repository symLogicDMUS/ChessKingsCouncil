import clsx from "clsx";
import React from "react";
import {useState} from "react";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {Undo} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {ThemeContext} from "../../../Context/ThemeContext";
import {useStyles} from "./SiteDescription.jss";

export function SiteDescription({theme}) {
    const {themes, themeDispatch} = useContext(ThemeContext);

    const classes = useStyles({theme});

    const createPieceLink = <Link to='/CreatePiece' className={classes.text_link}>Create Piece page</Link>;

    const starWars = <Button
        className={
            classes.inline_button
        }
        onClick={() => {
            themeDispatch({type: "set-unified-theme", theme: "star_wars"})
        }}
    >
        Star Wars
    </Button>;

    const NBA = <Button
        className={
            classes.inline_button
        }
        onClick={() => {
            themeDispatch({type: "set-unified-theme", theme: "NBA"})
        }}
    >
        NBA Basketball
    </Button>;

    const mechWarrior = <Button
        className={
            classes.inline_button
        }
        onClick={() =>
            themeDispatch({
                type: "set-unified-theme", theme: "mechwarrior_a_team"})
        }
    >
        MechWarrior
    </Button>;

    const resetTheme = <Button
        className={
            clsx(classes.inline_button, {
                [classes.reset_theme]: true
            })
        }
        onClick={() => {
            themeDispatch({type: "reset-default-themes"})
        }}
        startIcon={<Undo />}
    >
        reset default themes
    </Button>;

    return <Typography paragraph className={classes.paragraph}>
        Welcome! Create your own game of Chess with pieces that move how you decide! Start out by visiting
        the {createPieceLink}. After you save your piece there, visit the New Game page and choose the Custom option
        under game types. Your piece can start the game in place of a normal Chess piece, or be an option for Pawns to
        be promoted to when they reach the back row. You can also play classic Chess. There are a variety of sample
        images, pieces, and games, for new users. There are cool themes like {starWars}, {NBA} and {mechWarrior} that you can
        access through the Settings option in the side drawer. For further help, choose the help option in the side drawer.
        I hope that you enjoy the site!
    </Typography>;
}