import React from "react";
import clsx from "clsx";
import { Adjuster } from "../AppBar/Adjuster";
import { NavBarButtonAlt } from "./NavBarButtonAlt";
import { useStyles } from "./NavBarHome.jss";

export function NavBarHome({ theme, className }) {
    const classes = useStyles({ theme });

    return (
        <div
            className={clsx(classes.navBarAlt, {
                [className]: className,
            })}
        >
            <Adjuster height={48} width="100%" />

            <NavBarButtonAlt
                path="/NewGame"
                isLocalLink={true}
                theme={theme}
                pageIcon={"new-game"}
            >
                New Game
            </NavBarButtonAlt>
            <NavBarButtonAlt
                path="/LoadGame"
                isLocalLink={true}
                theme={theme}
                pageIcon={"load-game"}
            >
                Load Game
            </NavBarButtonAlt>
            <NavBarButtonAlt
                path="/CreatePiece"
                isLocalLink={true}
                theme={theme}
                pageIcon={"create-piece"}
            >
                Create Piece
            </NavBarButtonAlt>
            <NavBarButtonAlt
                path="/MyPieces"
                isLocalLink={true}
                theme={theme}
                pageIcon={"my-pieces"}
            >
                Saved Pieces
            </NavBarButtonAlt>
            <NavBarButtonAlt
                path="https://www.chess.com/learn-how-to-play-chess"
                isLocalLink={false}
                pageIcon={"chess-rules"}
                theme={theme}
            >
                Chess Rules
            </NavBarButtonAlt>
            <NavBarButtonAlt
                path="/CouncilRules"
                isLocalLink={true}
                pageIcon={"council-rules"}
                theme={theme}
            >
                Council Rules
            </NavBarButtonAlt>
            <NavBarButtonAlt
                path="https://github.com/symLogicDMUS"
                isLocalLink={false}
                pageIcon={"author-github"}
                theme={theme}
            >
                Author's GitHub
            </NavBarButtonAlt>
        </div>
    );
}