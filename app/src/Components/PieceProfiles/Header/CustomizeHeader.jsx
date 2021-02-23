import React, {useMemo} from "react";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import BlockIcon from "@material-ui/icons/Block";
import Typography from "@material-ui/core/Typography";
import {MuiCheckbox} from "../../Reuseables/MuiCheckbox";
import {icons} from "../../styles/icons/top/icons.jss";
import IconButton from "@material-ui/core/IconButton";
import {themes} from "../../styles/themes.jss";
import {
    checkbox_root,
    checkbox_gen,
    checkbox,
    iconButtonsStyle,
    useStyles
} from "./CustomizeHeader.jss";


export const CustomizeHeader = ({
                                    subs,
                                    promos,
                                    toggleSub,
                                    togglePromo,
                                    pieceName,
                                    screenCase,
                                    theme,
                                }) => {
    const classes = useStyles({theme: theme});

    const getColors = () => {
        const colors = {Queen: "", Rook: "", Bishop: "", Knight: ""};
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
                >
                    <Typography
                        className={classes.piece_name}
                        variant="h6"
                        noWrap
                    >
                        {pieceName}
                    </Typography>
                </Box>
                <Box className={classes.box} >
                    <MuiCheckbox
                        checkmarkState={isCheckmark}
                        onClick={() => togglePromo(pieceName)}
                        rootStyle={checkbox_root(screenCase)}
                        checkboxStyle={checkbox(screenCase)}
                        style={checkbox_gen(screenCase)}
                        theme={theme}
                    >
                        {screenCase === 'mobile' ? (
                            <Typography classes={{root: classes.checkbox_text}}>Promo</Typography>
                        ) : (
                            <Typography classes={{root: classes.checkbox_text}}>Promotion</Typography>
                        )}
                    </MuiCheckbox>
                </Box>
                <Box
                    className={classes.box}
                    style={iconButtonsStyle()}
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
