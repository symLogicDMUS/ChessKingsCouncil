import clsx from "clsx";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import BlockIcon from "@material-ui/icons/Block";
import SvgIcon from "@material-ui/core/SvgIcon";
import { themes } from "../../styles/themes/themes.jss";
import { icons } from "../../styles/icons/top/icons.jss";
import { useStyles } from "./SubButtonGroup.jss";

export function SubButtonGroup({
    theme,
    rook,
    queen,
    bishop,
    knight,
    onRookClick,
    onQueenClick,
    onBishopClick,
    onKnightClick,
    onNoSymbolClick,
    customPieceName,
    standardPieceThatSubbingFor,
}) {
    const classes = useStyles({ theme: theme });

    return (
        <div className={classes.root}>
            <IconButton
                onClick={onNoSymbolClick}
                className={classes.sub_button}
            >
                <BlockIcon
                    className={clsx(classes.sub_icon, {
                        [classes.selected]: !standardPieceThatSubbingFor,
                        [classes.no_sub_unselected]:
                            standardPieceThatSubbingFor,
                    })}
                />
            </IconButton>
            <IconButton onClick={onQueenClick} className={classes.sub_button}>
                <SvgIcon
                    className={clsx(classes.sub_icon, {
                        [classes.selected]: queen === customPieceName,
                        [classes.unselected]: queen !== customPieceName,
                    })}
                >
                    {icons.queen_outline(themes[theme].outline)}
                </SvgIcon>
            </IconButton>
            <IconButton onClick={onRookClick} className={classes.sub_button}>
                <SvgIcon
                    className={clsx(classes.sub_icon, {
                        [classes.selected]: rook === customPieceName,
                        [classes.unselected]: rook !== customPieceName,
                    })}
                >
                    {icons.rook_outline(themes[theme].outline)}
                </SvgIcon>
            </IconButton>
            <IconButton onClick={onKnightClick} className={classes.sub_button}>
                <SvgIcon
                    className={clsx(classes.sub_icon, {
                        [classes.selected]: knight === customPieceName,
                        [classes.unselected]: knight !== customPieceName,
                    })}
                >
                    {icons.knight_outline(themes[theme].outline)}
                </SvgIcon>
            </IconButton>
            <IconButton onClick={onBishopClick} className={classes.sub_button}>
                <SvgIcon
                    className={clsx(classes.sub_icon, {
                        [classes.selected]: bishop === customPieceName,
                        [classes.unselected]: bishop !== customPieceName,
                    })}
                >
                    {icons.bishop_outline(themes[theme].outline)}
                </SvgIcon>
            </IconButton>
        </div>
    );
}
/*




 */
