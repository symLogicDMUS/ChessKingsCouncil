import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {ThemeContext} from "../../../Context/ThemeContext";
import {useStyles} from "./SiteDescription.jss";
import {Undo} from "@material-ui/icons";
import clsx from "clsx";

export function SiteDescription({theme}) {
    const {themes, themeDispatch} = useContext(ThemeContext);

    const [resetDefaults, setResetDefaults] = useState(false);

    const classes = useStyles({theme});

    const createPieceLink = <Link to='/CreatePiece' className={classes.text_link}>Create Piece page</Link>;

    const starWars = <Button
        className={
            classes.inline_button
        }
        onClick={() => {
            setThemes({
                newGame: 'star_wars',
                loadGame: 'star_wars',
                createPiece: 'star_wars',
                customize: 'star_wars',
                gameRoot: 'star_wars',
                myPieces: 'star_wars',
                councilRules: 'star_wars',
                home: 'star_wars',
            })
            setResetDefaults(true)
        }}
    >
        Star Wars
    </Button>;

    const NBA = <Button
        className={
            classes.inline_button
        }
        onClick={() => {
            setThemes({
                newGame: 'NBA',
                loadGame: 'NBA',
                createPiece: 'NBA',
                customize: 'NBA',
                gameRoot: 'NBA',
                myPieces: 'NBA',
                councilRules: 'NBA',
                home: 'NBA',
            })
            setResetDefaults(true)
        }}
    >
        NBA Basketball
    </Button>;

    const mechWarrior = <Button
        className={
            classes.inline_button
        }
        onClick={() => {
            setThemes({
                newGame: 'mechwarrior_a_team',
                loadGame: 'mechwarrior_a_team',
                createPiece: 'mechwarrior_a_team',
                customize: 'mechwarrior_a_team',
                gameRoot: 'mechwarrior_a_team',
                myPieces: 'mechwarrior_a_team',
                councilRules: 'mechwarrior_a_team',
                home: 'mechwarrior_a_team',
            })
            setResetDefaults(true)
        }}
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
            setThemes({
                newGame: 'tan',
                loadGame: 'tan',
                createPiece: 'dark',
                customize: 'dark',
                gameRoot: 'dark',
                myPieces: 'dark',
                councilRules: 'tan',
                home: 'tan',
            })
            setResetDefaults(false)
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
        images, pieces, and games, for new users. There are cool themes like {starWars}, {NBA}, and {mechWarrior}. For
        further help, choose the help option in the side drawer. I hope that you enjoy the site! {resetDefaults && resetTheme}
    </Typography>;
}