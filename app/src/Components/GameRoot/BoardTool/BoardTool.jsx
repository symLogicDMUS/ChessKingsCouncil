import React, {useMemo, useReducer, useState} from "react";
import MediaQuery from "react-responsive/src";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from
        "@material-ui/icons/CheckBoxOutlineBlank";
import {getBinaryBoarAllFalse} from
        "../../helpers/getBinaryBoardAllFalse";
import {getRangeBoardImgStrs} from
        "../../PieceProfiles/ProfileWB/getRangeBoardImgStrs";
import {MiniBoard} from "./MiniBoard";
import {reducer} from "./BoardTool.red";
import Checkbox from "@material-ui/core/Checkbox";
import {show_profiles_root, useStyles} from "./BoardTool.jss";
import {setNewRangeBoardImgStrs} from "./setNewRangeBoardImgStrs";

export function BoardTool({
    theme,
    board,
    screenCase,
    gameType,
    allRanges,
    pieceDefs,
    idDict,
    toggleSecondaryDrawer,
}) {
    const [state, dispatch] = useReducer(reducer, {
        rangeBoard: getBinaryBoarAllFalse(),
        selectedSqr: null,
    });

    const [showProfileOnClick, setShowProfileOnClick] = useState(true);

    const classes = useStyles({ theme: theme });

    const toggleShowProfileOnClick = () => {
        setShowProfileOnClick(!showProfileOnClick);
    };

    const defs = useMemo(() => setNewRangeBoardImgStrs(theme, gameType, idDict, pieceDefs), [pieceDefs, theme])

    return (
        <div className={classes.board_tool}>
            <MediaQuery minDeviceWidth={1040}>
                <Box className={classes.flex_header}>
                    <Typography className={classes.title}>
                        Range Display
                    </Typography>
                </Box>
            </MediaQuery>
            <MiniBoard
                theme={theme}
                screenCase={screenCase}
                gameType={gameType}
                board={board}
                idDict={idDict}
                pieceDefs={defs}
                allRanges={allRanges}
                parentDispatch={dispatch}
                rangeBoard={state.rangeBoard}
                selectedSqr={state.selectedSqr}
                toggleSecondaryDrawer={toggleSecondaryDrawer}
            />
            <Box className={classes.flex_header}>
                <MediaQuery maxDeviceWidth={1040}>
                    <Typography className={classes.checkbox_label} noWrap>
                        Profiles
                    </Typography>
                </MediaQuery>
                <MediaQuery minDeviceWidth={1040}>
                    <Typography className={classes.checkbox_label} noWrap>
                        Show Profiles
                    </Typography>
                </MediaQuery>
                <Checkbox
                    onClick={toggleShowProfileOnClick}
                    style={show_profiles_root(screenCase, theme)}
                    icon={
                        <CheckBoxOutlineBlankIcon
                            className={classes.checkbox}
                        />
                    }
                    checkedIcon={
                        <CheckBoxIcon className={classes.checkbox} />
                    }
                    defaultChecked={true}
                />
            </Box>
        </div>
    );
}
