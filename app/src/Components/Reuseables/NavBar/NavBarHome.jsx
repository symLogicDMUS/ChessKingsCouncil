import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Adjuster} from "../AppBar/Adjuster";
import {Typography} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../../styles/icons/top/icons.jss";
import {NavBarButtonAlt} from "./NavBarButtonAlt";
import {useStyles as useMoreStyles} from "./NavBarButtonAlt.jss";
import { useStyles } from "./NavBarHome.jss";

export function NavBarHome({toggleAboutPage, theme, className}) {
    const classes = useStyles({theme});
    const classes2 = useMoreStyles({theme});

    return (
        <div className={
            clsx(classes.navBarAlt, {
                [className]: className,
            })}
        >
            <Adjuster height={48} width='100%' />
            <Box className={classes2.nav_bar_button} onClick={toggleAboutPage}>
                <SvgIcon className={classes2.icon}>
                    {icons.home}
                </SvgIcon>
                <Typography className={classes2.text} variant='button'>Home</Typography>
            </Box>
            <NavBarButtonAlt path="/NewGame" isLocalLink={true} theme={theme} pageIcon={'new-game'}>
                New Game
            </NavBarButtonAlt>
            <NavBarButtonAlt path="/LoadGame" isLocalLink={true} theme={theme} pageIcon={'load-game'}>
                Load Game
            </NavBarButtonAlt>
            <NavBarButtonAlt path="/CreatePiece" isLocalLink={true} theme={theme} pageIcon={'create-piece'}>
                Create Piece
            </NavBarButtonAlt>
            <NavBarButtonAlt path="/MyPieces" isLocalLink={true} theme={theme} pageIcon={'my-pieces'}>
                Saved Pieces
            </NavBarButtonAlt>
            <NavBarButtonAlt path="https://www.chess.com/learn-how-to-play-chess" isLocalLink={false} pageIcon={'chess-rules'} theme={theme}>
                Chess Rules
            </NavBarButtonAlt>
            <NavBarButtonAlt path="/CouncilRules" isLocalLink={true} pageIcon={'council-rules'} theme={theme}>
                Council Rules
            </NavBarButtonAlt>
            <NavBarButtonAlt path="https://github.com/symLogicDMUS" isLocalLink={false} pageIcon={'author-github'} theme={theme}>
                Author's GitHub
            </NavBarButtonAlt>
        </div>
    );
}