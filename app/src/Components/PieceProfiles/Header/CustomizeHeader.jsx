import React, { useMemo } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import { Typography } from "@material-ui/core";
import { SubDropdown } from "./SubDropdown";
import { SubButtonGroup } from "./SubButtonGroup";
import { MuiCheckbox } from "../../Reuseables/Clickables/MuiCheckbox";
import { useStyles as useMoreStyles } from "../Header/ProfileHeader.jss";
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
                <Box className={classes.box}>
                    <Typography
                        className={classes2.piece_name}
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
                        textClassProp={classes.checkbox_text}
                        classProp={classes.checkbox_gen}
                        theme={theme}
                    >
                        {screenCase === "thin" ? (
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
                <MediaQuery maxWidth={960}>
                    <SubDropdown
                        standardPieceThatSubbingFor={
                            standardPieceThatSubbingFor
                        }
                        customPieceName={customPieceName}
                        toggleSub={toggleSub}
                        theme={theme}
                    />
                </MediaQuery>
                <MediaQuery minWidth={960}>
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
                </MediaQuery>
            </div>
        </>
    );
};
