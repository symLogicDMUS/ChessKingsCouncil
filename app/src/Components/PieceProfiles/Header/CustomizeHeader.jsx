import React, {useMemo} from "react";
import clsx from "clsx";
import MediaQuery from "react-responsive/src";
import Box from "@material-ui/core/Box";
import Select from '@material-ui/core/Select';
import {MenuItem, Typography} from "@material-ui/core";
import AdbIcon from "@material-ui/icons/Adb";
import BackupIcon from "@material-ui/icons/Backup";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {SubButtonGroup} from "./SubButtonGroup";
import {MuiCheckbox} from "../../Reuseables/Clickables/MuiCheckbox";
import {useStyles as useMoreStyles} from "../Header/ProfileHeader.jss";
import {useStyles} from "./CustomizeHeader.jss";
import {MuiDropdown} from "../../Reuseables/UserInput/MuiDropdown";

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
                <MediaQuery maxWidth={1040}>
                    <Box rootClassName={classes.sub_dropdown}>
                        <MuiDropdown>
                            <MenuItem  value="icon1"><AdbIcon /></MenuItem>,
                            <MenuItem  value="icon2"><BackupIcon /></MenuItem>,
                            <MenuItem value="icon3"><AddPhotoAlternateIcon /></MenuItem>
                        </MuiDropdown>
                    </Box>
                </MediaQuery>
                <MediaQuery minWidth={1040}>
                    <SubButtonGroup
                        theme={theme}
                        rook={subs.Rook}
                        queen={subs.Queen}
                        knight={subs.Knight}
                        bishop={subs.Bishop}
                        customPieceName={customPieceName}
                        standardPieceThatSubbingFor={standardPieceThatSubbingFor}
                        onQueenClick={() => toggleSub(customPieceName, "Queen")}
                        onRookClick={() => toggleSub(customPieceName, "Rook")}
                        onKnightClick={() => toggleSub(customPieceName, "Knight")}
                        onBishopClick={() => toggleSub(customPieceName, "Bishop")}
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

/*
                <MenuItem value="None">
                    <em>None</em>
                </MenuItem>,

 */
