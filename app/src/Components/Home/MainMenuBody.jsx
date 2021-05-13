import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Box from "@material-ui/core/Box";
import "../styles/Background/_backgrounds.scss";
import Typography from "@material-ui/core/Typography";
import {BoardPatternRow} from "../styles/Background/BoardPatternRow";
import { useStyles } from "./MainMenuBody.jss";

export function MainMenuBody({theme}) {

    useEffect(() => {
        document.body.className = `${theme}-background`;
    }, [])

    const classes = useStyles({theme: theme})

    return (
        <div className={classes.main_menu_body}>
            <BoardPatternRow theme={theme} className={classes.row1} />
            <Box className={classes.content}>
                <img
                    src={`/Images/text/app title/title-${theme}.svg`}
                    alt="home page text"
                    className={classes.site_title}
                />
                <Typography paragraph className={classes.paragraph}>
                    Welcome! Create your own game of Chess with pieces that move how you decide! Start out by visiting
                    the <Link to='/CreatePiece'>Create Piece page</Link>. After you save your piece there, visit the New Game page and choose the Custom
                    option under game types. Your piece can start the game in place of a normal Chess piece, or be an
                    option for Pawns to be promoted to when they reach the back row.

                    There are a also a variety of sample images, pieces, and games, for new users. You can also play
                    classic Chess. For further help, choose the help option in the side drawer. I hope that you enjoy the site!
                </Typography>
            </Box>
            <BoardPatternRow theme={theme} className={classes.row2} />
        </div>
    );
}