import React, { useEffect, useReducer, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { MuiCheckbox } from "../../Reuseables/MuiCheckbox";
import { themes } from "../../styles/themes.jss";
import SvgIcon from "@material-ui/core/SvgIcon";
import BlockIcon from "@material-ui/icons/Block";
import { icons } from "../../styles/icons/top/icons.jss";
import { fontSizeAlt2 as fontSize } from "../../styles/fontSize.jss";
import {
    promo_checkbox,
    checkbox_root,
    sub_buttons,
    useStyles,
    checkbox_circle,
} from "./CustomizeHeader.jss";
import IconButton from "@material-ui/core/IconButton";

export function reducer(state, action) {
    switch (action.type) {
        case "sub":
            const newColors = {queen: '', rook: '', bishop: '', knight: ''}
            for (let piece of Object.keys(newColors)) {
                if (action.newReplaced === piece) {
                    newColors[piece] = themes[action.theme].text;
                }
                else {
                    newColors[piece] = themes[action.theme].outline;
                }
            }
            return newColors;
        case "not-sub":
            return {
                queen: themes[action.theme].outline,
                rook: themes[action.theme].outline,
                bishop: themes[action.theme].outline,
                knight: themes[action.theme].outline,
            };
        default:
            throw new Error();
    }
}

export function CustomizeHeader({
    pieceName,
    isCheckmark,
    newReplacement,
    newReplaced,
    toggleSub,
    togglePromo,
    theme,
}) {
    let [subSelection, setSubSelection] = useState(null);

    let [colors, dispatch] = useReducer(reducer, {
        queen: themes[theme].outline,
        rook: themes[theme].outline,
        bishop: themes[theme].outline,
        knight: themes[theme].outline,
    });

    const classes = useStyles({ theme: theme, fontSize: fontSize });


    useEffect(() => {
        /** If sub just made and this piece not the sub and the piece being subbed for is what this piece was previously
         * subbing for,than this piece has no sub.
         * */
        if (
            newReplacement !== null &&
            pieceName !== newReplacement &&
            newReplaced === subSelection
        ) {
            dispatch({type: 'no-sub', theme: theme})
            setSubSelection(null);
        }
        /**If a sub just made and this piece is the sub set it's state to piece it's subbing for*/
        else if (newReplaced !== null && newReplacement === pieceName) {
            dispatch({type: 'sub', theme: theme, newReplaced: newReplaced})
            setSubSelection(newReplaced);
        }
    }, [newReplacement, newReplaced]);

    return (
        <>
            <div className={classes.header}>
                <Typography className={classes.header_text} variant="h6" noWrap>
                    {pieceName}
                </Typography>
                <Box className={classes.box}>
                    <MuiCheckbox
                        onClick={() => togglePromo(pieceName)}
                        checkmarkState={isCheckmark}
                        rootStyle={checkbox_root(fontSize)}
                        circleStyle={checkbox_circle(fontSize)}
                        style={promo_checkbox(fontSize, theme)}
                        theme={theme}
                    >
                        Promotion
                    </MuiCheckbox>
                </Box>
                <Box style={sub_buttons(fontSize)}>
                    <IconButton>
                        <BlockIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(pieceName, "Queen")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={classes.sub_icon}>
                            {icons.queen_outline(colors.queen)}
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(pieceName, "Rook")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={classes.sub_icon}>
                            {icons.rook_outline(colors.rook)}
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(pieceName, "Knight")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={classes.sub_icon}>
                            {icons.knight_outline(colors.knight)}
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(pieceName, "Bishop")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={classes.sub_icon}>
                            {icons.bishop_outline(colors.bishop)}
                        </SvgIcon>
                    </IconButton>
                </Box>
            </div>
        </>
    );
}
