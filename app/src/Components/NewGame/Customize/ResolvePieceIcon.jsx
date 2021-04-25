import React from "react";
import clsx from "clsx";
import {themes} from "../../styles/themes/themes.jss";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../../styles/icons/top/icons.jss";
import {useStyles} from "./ResolvePieceIcon.jss";
import BlockIcon from "@material-ui/icons/Block";

export function ResolvePieceIcon ({pieceName, theme}) {
    const classes = useStyles({theme});

    const getSymbol = (pieceName) => {
        switch (pieceName) {
            case "Queen":
                return (
                    <SvgIcon className={classes.piece_icon}>
                        {icons.queen_outline(themes[theme].outline)}
                    </SvgIcon>
                )
            case "Rook":
                return (
                    <SvgIcon className={classes.piece_icon}>
                        {icons.rook_outline(themes[theme].outline)}
                    </SvgIcon>
                )
            case "Knight":
                return (
                    <SvgIcon className={classes.piece_icon}>
                        {icons.knight_outline(themes[theme].outline)}
                    </SvgIcon>
                )
            case "Bishop":
                return (
                    <SvgIcon className={classes.piece_icon}>
                        {icons.bishop_outline(themes[theme].outline)}
                    </SvgIcon>
                )
            default:
                return (
                    <BlockIcon className={classes.piece_icon} />
                )
        }
    };

    return <>{getSymbol(pieceName)}</>
}