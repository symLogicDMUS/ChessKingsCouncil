import React, { memo, useMemo } from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import SvgIcon from "@material-ui/core/SvgIcon";
import BlockIcon from "@material-ui/icons/Block";
import Typography from "@material-ui/core/Typography";
import { MuiCheckbox } from "../../Reuseables/MuiCheckbox";
import { icons } from "../../styles/icons/top/icons.jss";
import IconButton from "@material-ui/core/IconButton";
import {
    checkbox_root,
    checkbox_style,
    useStyles,
} from "./CustomizeHeader.jss";
import { themes } from "../../styles/themes.jss";

export const CustomizeHeader = ({
    subs,
    promos,
    toggleSub,
    togglePromo,
    pieceName,
    screenCase,
    theme,
}) => {
    const classes = useStyles({ theme: theme });

    const getColors = () => {
        const colors = { Queen: "", Rook: "", Bishop: "", Knight: "" };
        for (const standardPieceName of Object.keys(subs)) {
            if (subs[standardPieceName] === pieceName) {
                colors[standardPieceName] = themes[theme].text;
            } else {
                colors[standardPieceName] = 'none';
            }
        }
        return colors;
    };
    const colors = useMemo(() => getColors(), [subs]);

    const getIsPromo = () => {
        return promos.includes(pieceName);
    };
    const isCheckmark = useMemo(() => getIsPromo(), [promos]);

    const getSelectedSub = () => {
        for (const standardPieceName of Object.keys(colors)) {
            if (colors[standardPieceName] === themes[theme].text) {
                return standardPieceName;
            }
        }
        return null;
    };

    return (
        <>
            <div className={classes.header}>
                <Box
                    className={classes.box}
                    style={{
                        marginRight: screenCase === "desktop" ? "1.55em" : 0,
                    }}
                >
                    <Typography
                        className={classes.piece_name}
                        variant="h6"
                        noWrap
                    >
                        {pieceName}
                    </Typography>
                </Box>
                <Box
                    className={classes.box}
                    style={{
                        marginRight: screenCase === "desktop" ? "1.5em" : 0,
                    }}
                >
                    <MuiCheckbox
                        onClick={() => togglePromo(pieceName)}
                        checkmarkState={isCheckmark}
                        style={checkbox_style()}
                        rootStyle={checkbox_root(theme)}
                        checkboxStyle={{
                            transform:
                                screenCase === "mobile"
                                    ? "translate(-0.35em, 0)"
                                    : "none",
                        }}
                        theme={theme}
                    >
                        <MediaQuery minDeviceHeight={768}>Promotion</MediaQuery>
                        <MediaQuery maxDeviceHeight={767}>Promo</MediaQuery>
                    </MuiCheckbox>
                </Box>
                <Box
                    className={classes.box}
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <IconButton
                        onClick={() => {
                            const selectedSub = getSelectedSub();
                            if (selectedSub) {
                                toggleSub(null, selectedSub);
                            }
                        }}
                        className={classes.no_sub_button}
                    >
                        <BlockIcon
                            className={classes.no_sub_icon}
                            style={{
                                color: getSelectedSub() ? themes[theme].outline : themes[theme].text,
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
                                colors.Queen
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
                                colors.Rook
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
                                colors.Knight,
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
                                colors.Bishop
                            )}
                        </SvgIcon>
                    </IconButton>
                </Box>
            </div>
        </>
    );
};
