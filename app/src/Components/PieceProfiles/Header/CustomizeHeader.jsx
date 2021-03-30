import React, { useMemo } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import { Typography } from "@material-ui/core";
import { SubDropdown } from "../../NewGame/Customize/SubDropdown";
import { SubButtonGroup } from "../../NewGame/Customize/SubButtonGroup";
import { MuiCheckbox } from "../../Reuseables/Clickables/MuiCheckbox";
import { useStyles as useMoreStyles } from "../Header/ProfileHeader.jss";
import { useStyles } from "./CustomizeHeader.jss";

export function CustomizeHeader({
    subs,
    promos,
    toggleSub,
    togglePromo,
    customPieceName,
    theme,
}) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });

    const getIsPromo = () => {
        return promos.includes(customPieceName);
    };
    const isCheckmark = useMemo(() => getIsPromo(), [promos.length]);

    const getStandardPieceThatSubbingFor = () => {
        for (const standardPieceName of Object.keys(subs)) {
            if (subs[standardPieceName] === customPieceName) {
                return standardPieceName;
            }
        }
        return null;
    };
    const standardPieceThatSubbingFor = getStandardPieceThatSubbingFor();

    return (
        <>
            <div
                className={clsx(classes.header, {
                    [classes2.header]: classes2.header,
                })}
            >
                <MediaQuery maxWidth={960}>
                    <Typography
                        noWrap
                        variant="h6"
                        className={classes2.piece_name}
                    >
                        {customPieceName}
                    </Typography>
                    <Box
                        className={clsx(classes.options_box, {
                            [classes.header_box_thin_screen]: true,
                            [classes.justify_between]: true,
                            [classes.align_center]: true,
                        })}
                    >
                        <MuiCheckbox
                            checkmarkState={isCheckmark}
                            rootClassName={classes.promo_checkbox}
                            onClick={() => togglePromo(customPieceName)}
                            theme={theme}
                        >
                            Promo
                        </MuiCheckbox>
                        <SubDropdown
                            standardPieceThatSubbingFor={
                                standardPieceThatSubbingFor
                            }
                            customPieceName={customPieceName}
                            toggleSub={toggleSub}
                            theme={theme}
                        />
                    </Box>
                </MediaQuery>
                <MediaQuery minWidth={960}>
                    <Box
                        className={clsx(classes.options_box, {
                            [classes.header_box_wide_screen]: true,
                        })}
                    >
                        <Typography
                            noWrap
                            variant="h6"
                            className={classes2.piece_name}
                        >
                            {customPieceName}
                        </Typography>
                    </Box>
                    <Box
                        className={clsx(classes.options_box, {
                            [classes.header_box_wide_screen]: true,
                        })}
                    >
                        <MuiCheckbox
                            checkmarkState={isCheckmark}
                            rootClassName={classes.promo_checkbox}
                            onClick={() => togglePromo(customPieceName)}
                            variant='subtitle1'
                            theme={theme}
                        >
                            Promotion
                        </MuiCheckbox>
                    </Box>
                    <Box
                        className={clsx(classes.options_box, {
                            [classes.header_box_wide_screen]: true,
                            [classes.justify_between]: true,
                        })}
                    >
                        <SubButtonGroup
                            theme={theme}
                            rook={subs.Rook}
                            queen={subs.Queen}
                            knight={subs.Knight}
                            bishop={subs.Bishop}
                            customPieceName={customPieceName}
                            standardPieceThatSubbingFor={
                                standardPieceThatSubbingFor
                            }
                            onQueenClick={() => toggleSub(customPieceName, "Queen")}
                            onRookClick={() => toggleSub(customPieceName, "Rook")}
                            onKnightClick={() =>
                                toggleSub(customPieceName, "Knight")
                            }
                            onBishopClick={() =>
                                toggleSub(customPieceName, "Bishop")
                            }
                            onNoSymbolClick={() => {
                                if (standardPieceThatSubbingFor) {
                                    toggleSub(null, standardPieceThatSubbingFor);
                                }
                            }}
                        />
                    </Box>
                </MediaQuery>
            </div>
        </>
    );
}
