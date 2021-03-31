import React, {useEffect} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import "../Reuseables/Background/_backgrounds.scss";
import {useStyles as useMoreStyles} from "../Reuseables/Background/Background.jss";
import { useStyles } from "./MainMenuBody.jss";

export function MainMenuBody({theme}) {

    useEffect(() => {
        document.body.className = `${theme}-background`;
    }, [])

    const classes = useStyles()
    const classes2 = useMoreStyles({theme})

    return (
        <div className={classes.main_menu_body}>
            <Box className={clsx(classes.board_pattern_area, {
                [classes.row1]: true,
            })}>
                <img src={`/Images/Backgrounds/board-pattern-${theme}.svg`}
                     className={classes2.board_pattern}
                     alt="stylistic board pattern"
                />
                <img src={`/Images/Backgrounds/board-pattern-${theme}.svg`}
                     className={classes2.board_pattern}
                     alt="stylistic board pattern"
                />
            </Box>
            <Box className={classes.content}>
                <img
                    src={`/Images/titles/desktop/title-${theme}.svg`}
                    alt="home page text"
                    className={classes.site_title}
                />
                <Typography paragraph>
                    Welcome! Create your own game of chess with pieces that move how you decide! Start out by visiting
                    the Create Piece page where you will find everything you need. After you save your piece there,
                    visit the New Game page. Give the game a name so that you can save it if you want to, then choose
                    the Custom option. Your piece will start the game in place of a normal Chess piece, or be an option
                    for Pawns to be promoted to when they reach the back row.

                    There are a variety of sample images, pieces, and games, for new users. You can also play classic Chess.
                    For further help, choose the help option in the side drawer. I hope that you enjoy the site!
                </Typography>
            </Box>
            <Box className={classes.board_pattern_area}>
                <img src={`/Images/Backgrounds/board-pattern-${theme}.svg`}
                     className={classes2.board_pattern}
                     alt="stylistic board pattern"
                />
                <img src={`/Images/Backgrounds/board-pattern-${theme}.svg`}
                     className={classes2.board_pattern}
                     alt="stylistic board pattern"
                />
            </Box>
            <div className={classes.toolbar} />

        </div>
    );
}