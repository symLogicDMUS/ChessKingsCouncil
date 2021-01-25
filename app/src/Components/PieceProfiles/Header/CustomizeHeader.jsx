import React, { useEffect, useReducer } from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import SvgIcon from "@material-ui/core/SvgIcon";
import BlockIcon from "@material-ui/icons/Block";
import Typography from "@material-ui/core/Typography";
import { MuiCheckbox } from "../../Reuseables/MuiCheckbox";
import { themes } from "../../styles/themes.jss";
import { icons } from "../../styles/icons/top/icons.jss";
import IconButton from "@material-ui/core/IconButton";
import { reducer } from "./CustomizeHeader.red";
import { text } from "./PieceHeader.jss";
import {checkbox_root, checkbox_style, checkbox_text, useStyles} from "./CustomizeHeader.jss";

export function CustomizeHeader({
    pieceName,
    isCheckmark,
    newReplacement,
    newReplaced,
    toggleSub,
    togglePromo,
    screenCase,
    theme,
}) {
    let [state, dispatch] = useReducer(reducer, {
        subSelection: null,
        colors: {
            Queen: "none",
            Rook: "none",
            Bishop: "none",
            Knight: "none",
            noSymbol: themes[theme].text,
        },
    });

    const classes = useStyles({ theme: theme });

    useEffect(() => {
        /** If sub just made and this piece not the sub and the piece being subbed for is what this piece was previously
         * subbing for,than this piece has no sub.
         * */
        if (
            newReplacement !== null &&
            pieceName !== newReplacement &&
            newReplaced === state.subSelection
        ) {
            dispatch({ type: "no-sub", theme: theme });
        } else if (newReplaced !== null && newReplacement === pieceName) {
        /**If a sub just made and this piece is the sub set it's state to piece it's subbing for*/
            dispatch({ type: "sub", theme: theme, newReplaced: newReplaced });
        }
    }, [newReplacement, newReplaced]);

    return (
        <>
            <div className={classes.header}>
                <Box className={classes.box} style={{ marginRight: (screenCase === 'desktop') ? "1.55em" : 0 }}>
                    <Typography
                        className={classes.piece_name}
                        variant="h6"
                        noWrap
                    >
                        {pieceName}
                    </Typography>
                </Box>
                <Box className={classes.box} style={{ marginRight: (screenCase === 'desktop') ? "1.5em" : 0 }}>
                    <MuiCheckbox
                        onClick={() => togglePromo(pieceName)}
                        checkmarkState={isCheckmark}
                        style={checkbox_style()}
                        rootStyle={checkbox_root(theme)}
                        checkboxStyle={{
                            transform:
                                screenCase === 'mobile' ?
                                'translate(-0.35em, 0)' :
                                'none'
                        }}
                        theme={theme}
                    >
                        <MediaQuery minDeviceHeight={768}>Promotion</MediaQuery>
                        <MediaQuery maxDeviceHeight={767}>Promo</MediaQuery>
                    </MuiCheckbox>
                </Box>
                <Box  className={classes.box} style={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <IconButton
                        onClick={() => {
                            toggleSub(null, state.subSelection)
                            dispatch({type: "no-sub", theme: theme})
                        }}
                        className={classes.no_sub_button}
                    >
                        <BlockIcon
                            className={classes.no_sub_icon}
                            style={{
                                color: state.colors.noSymbol,
                            }}
                        />
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(pieceName, "Queen")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={classes.sub_icon}>
                            {icons.queen_outline(
                                themes[theme].outline,
                                state.colors.Queen
                            )}
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(pieceName, "Rook")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={classes.sub_icon}>
                            {icons.rook_outline(
                                themes[theme].outline,
                                state.colors.Rook
                            )}
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(pieceName, "Knight")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={classes.sub_icon}>
                            {icons.knight_outline(
                                themes[theme].outline,
                                state.colors.Knight
                            )}
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(pieceName, "Bishop")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={classes.sub_icon}>
                            {icons.bishop_outline(
                                themes[theme].outline,
                                state.colors.Bishop
                            )}
                        </SvgIcon>
                    </IconButton>
                </Box>
            </div>
        </>
    );
}
