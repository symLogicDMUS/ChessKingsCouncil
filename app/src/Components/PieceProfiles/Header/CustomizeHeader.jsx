import React, {useMemo} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {PieceName} from "./PieceName";
import {SubDropdown} from "../../NewGame/Customize/SubDropdown";
import {SubButtonGroup} from "../../NewGame/Customize/SubButtonGroup";
import {MuiCheckbox} from "../../Reuseables/Clickables/MuiCheckbox";
import {useStyles as useMoreStyles} from "../Header/ProfileHeader.jss";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {SeeMore} from "../../Reuseables/UserInput/SeeMore";
import {useStyles} from "./CustomizeHeader.jss";

function CustomizeHeader({
    subs,
    promos,
    toggleSub,
    togglePromo,
    customPieceName,
    theme,
}) {
    const sm = useMediaQuery("(max-width: 600px)");
    const xs = useMediaQuery("(max-width: 376px");

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
                    <PieceName theme={theme}>
                        {customPieceName}
                    </PieceName>
                    <Box
                        className={clsx(classes.options_box, {
                            [classes.header_box_sm_screen]: true,
                            [classes.justify_between]: !sm,
                            [classes.justify_end]: sm,
                            [classes.align_center]: true,
                        })}
                    >
                        {sm ? (
                            <SeeMore theme={theme} edge={ xs ? 'end' : null}>
                                <MuiCheckbox
                                    checkmarkState={isCheckmark}
                                    rootClassName={classes.promo_checkbox}
                                    onClick={() => togglePromo(customPieceName)}
                                    theme={theme}
                                >
                                    Promotion
                                </MuiCheckbox>
                            </SeeMore>
                        ) : (
                            <MuiCheckbox
                                checkmarkState={isCheckmark}
                                rootClassName={classes.promo_checkbox}
                                onClick={() => togglePromo(customPieceName)}
                                theme={theme}
                            >
                                Promo
                            </MuiCheckbox>
                        )}
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
                            [classes.header_box_lg_screen]: true,
                        })}
                    >
                        <PieceName theme={theme}>
                            {customPieceName}
                        </PieceName>
                    </Box>
                    <Box
                        className={clsx(classes.options_box, {
                            [classes.header_box_lg_screen]: true,
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
                            [classes.header_box_lg_screen]: true,
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
export default CustomizeHeader;