import React, {useEffect} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import "../Reuseables/Background/_backgrounds.scss";
import {useStyles as useMoreStyles}
        from "../Reuseables/Background/Background.jss";
import { useStyles } from "./MainMenuBody.jss";

export function MainMenuBody({theme}) {

    useEffect(() => {
        document.body.className = `${theme}-background`;
    }, [])

    const classes = useStyles({theme: theme})
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
                <Typography paragraph className={classes.paragraph}>
                    Welcome! Create your own game of Chess with pieces that move how you decide! Start out by visiting
                    the Create Piece page. After you save your piece there, visit the New Game page and choose the Custom
                    option under game types. Your piece can start the game in place of a normal Chess piece, or be an
                    option for Pawns to be promoted to when they reach the back row.

                    There are a also a variety of sample images, pieces, and games, for new users. You can also play
                    classic Chess. For further help, choose the help option in the side drawer. I hope that you enjoy the site!
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