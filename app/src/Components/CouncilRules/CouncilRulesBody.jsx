import React, {useEffect} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import "../Reuseables/Background/_backgrounds.scss";
import {useStyles as useMoreStyles}
    from "../Reuseables/Background/Background.jss";
import { useStyles } from "./CouncilRulesBody.jss";

export function CouncilRulesBody({theme}) {

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
                    src={`/Images/CouncilRules/title.svg`}
                    className={classes.page_title}
                    alt="Council Rules"
                />
                <Typography paragraph className={classes.paragraph}>
                    Council of Kings is 1 of 3 options to play on the
                    site, along with custom and standard Chess. Council
                    of Kings is Chess where Pawns can be promoted to
                    Kings when they reach the back row. The following
                    explains the rules of Council of Kings:
                    <ul>
                        <li>
                            Kings can be captured like any other piece
                            but this isn't required.
                        </li>
                        <li>
                            To win the game you must checkmate the other
                            player or capture all of their Kings and
                            Pawns.
                        </li>
                        <li>
                            Checkmate in Council of Kings only occurs
                            when no move can be made to save any king.
                        </li>
                        <li>
                            You cannot pin pieces: No piece needs to
                            prevent any King from being put in check.
                        </li>
                        <li>
                            If 1 or more Kings are already in check, the
                            player must make a move that saves one of
                            the Kings.
                        </li>
                    </ul>
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