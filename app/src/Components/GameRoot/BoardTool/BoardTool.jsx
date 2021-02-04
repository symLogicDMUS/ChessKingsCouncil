import React, {useMemo, useReducer, useState} from "react";
import MediaQuery from "react-responsive/src";
import {addRangeImgToDefs} from "./addRangeImgToDefs";
import {fontSize0023} from "../../styles/fontSizes.jss";
import Typography from "@material-ui/core/Typography";
import {MuiCheckbox} from "../../Reuseables/MuiCheckbox";
import {getBinaryBoarAllFalse} from
        "../../helpers/getBinaryBoardAllFalse";
import Box from "@material-ui/core/Box";
import {MiniBoard} from "./MiniBoard";
import {reducer} from "./BoardTool.red";
import {useStyles} from "./BoardTool.jss";

export function BoardTool({
    theme,
    board,
    screenCase,
    allRanges,
    pieceDefs,
    idDict,
}) {
    const [state, dispatch] = useReducer(reducer, {
        profile: null,
        rangeBoard: getBinaryBoarAllFalse(),
        pieceId: null,
    });

    const [profileModal, setProfileModal] = useState(false);
    const [showProfileOnClick, setShowProfileOnClick] = useState(true);

    const classes = useStyles({ theme: theme });

    const toggleShowProfileOnClick = () => {
        setShowProfileOnClick(!showProfileOnClick);
    };

    const defs = useMemo(() => addRangeImgToDefs(pieceDefs, theme), [pieceDefs, theme])

    return (
        <div className={classes.board_tool}>
            <MediaQuery minDeviceWidth={768}>
                <Box className={classes.flex_header}>
                    <Typography className={classes.title}>
                        Range Display
                    </Typography>
                </Box>
            </MediaQuery>
            <MiniBoard
                theme={theme}
                board={board}
                idDict={idDict}
                pieceDefs={defs}
                allRanges={allRanges}
                screenCase={screenCase}
                parentDispatch={dispatch}
                rangeBoard={state.rangeBoard}
                setProfileModal={setProfileModal}
            />
            <Box className={classes.flex_header}>
                <MuiCheckbox
                    onClick={toggleShowProfileOnClick}
                    style={{ fontSize: fontSize0023 }}
                    rootStyle={{ fontSize: fontSize0023 }}
                    defaultChecked={showProfileOnClick}
                    theme={theme}
                >
                    Show Profile
                </MuiCheckbox>
            </Box>
            {profileModal && showProfileOnClick ? state.profile : null}
        </div>
    );
}
