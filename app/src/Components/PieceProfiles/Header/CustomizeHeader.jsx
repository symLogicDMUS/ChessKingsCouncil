import React, { useMemo } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import BlockIcon from "@material-ui/icons/Block";
import Typography from "@material-ui/core/Typography";
import { MuiCheckbox } from "../../Reuseables/Clickables/MuiCheckbox";
import { icons } from "../../styles/icons/top/icons.jss";
import IconButton from "@material-ui/core/IconButton";
import { themes } from "../../styles/themes.jss";
import { useStyles } from "./CustomizeHeader.jss";

export const CustomizeHeader = ({
    subs,
    promos,
    toggleSub,
    togglePromo,
    customPieceName,
    screenCase,
    theme,
}) => {
    const classes = useStyles({ theme: theme });

    const getIsPromo = () => {
        return promos.includes(customPieceName);
    }; const isCheckmark = useMemo(() => getIsPromo(), [promos.length]);

    const getStandardPieceThatSubbingFor = () => {
        for (const standardPieceName of Object.keys(subs)) {
            if (subs[standardPieceName] === customPieceName) {
                return standardPieceName;
            }
        }
        return null;
    }; const standardPieceThatSubbingFor = useMemo(() => getStandardPieceThatSubbingFor(), [Object.keys(subs).length])

    return (
        <>
            <div className={classes.header}>
                <Box className={classes.box}>
                    <Typography
                        className={classes.piece_name}
                        variant="h6"
                        noWrap
                    >
                        {customPieceName}
                    </Typography>
                </Box>
                <Box className={classes.box}>
                    <MuiCheckbox
                        checkmarkState={isCheckmark}
                        onClick={() => togglePromo(customPieceName)}
                        rootClassProp={classes.checkbox_root}
                        addedClassProp={classes.checkbox}
                        classProp={classes.checkbox_gen}
                        theme={theme}
                    >
                        {screenCase === "mobile" ? (
                            <Typography
                                classes={{ root: classes.checkbox_text }}
                            >
                                Promo
                            </Typography>
                        ) : (
                            <Typography
                                classes={{ root: classes.checkbox_text }}
                            >
                                Promotion
                            </Typography>
                        )}
                    </MuiCheckbox>
                </Box>
                <Box
                    className={clsx(classes.box, {
                        [classes.icon_button_style]: true,
                    })}
                >
                    <IconButton
                        onClick={() => {
                            if (standardPieceThatSubbingFor) {
                                // set the sub for this standard piece to null
                                toggleSub(null, standardPieceThatSubbingFor);
                            }
                        }}
                        className={classes.no_sub_button}
                    >
                        <BlockIcon
                            className={clsx(classes.no_sub_icon, {
                                [classes.selected]: standardPieceThatSubbingFor,
                                [classes.unselected]: ! standardPieceThatSubbingFor,
                            })}
                        />
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(customPieceName, "Queen")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={clsx(classes.sub_icon, {
                                [classes.selected]: subs.Queen === customPieceName,
                                [classes.unselected]: subs.Queen !== customPieceName,
                        })}>
                            {icons.queen_outline(
                                themes[theme].outline,
                            )}
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(customPieceName, "Rook")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={clsx(classes.sub_icon, {
                            [classes.selected]: subs.Rook === customPieceName,
                            [classes.unselected]: subs.Rook !== customPieceName,
                        })}>
                            {icons.rook_outline(
                                themes[theme].outline,
                            )}
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(customPieceName, "Knight")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={clsx(classes.sub_icon, {
                            [classes.selected]: subs.Knight === customPieceName,
                            [classes.unselected]: subs.Knight !== customPieceName,
                        })}>
                            {icons.knight_outline(
                                themes[theme].outline,
                            )}
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        onClick={() => toggleSub(customPieceName, "Bishop")}
                        className={classes.sub_button}
                    >
                        <SvgIcon className={clsx(classes.sub_icon, {
                            [classes.selected]: subs.Bishop === customPieceName,
                            [classes.unselected]: subs.Bishop !== customPieceName,
                        })}>
                            {icons.bishop_outline(
                                themes[theme].outline,
                            )}
                        </SvgIcon>
                    </IconButton>
                </Box>
            </div>
        </>
    );
};
