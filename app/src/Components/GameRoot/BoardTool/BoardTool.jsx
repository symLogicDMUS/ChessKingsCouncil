import React, { useReducer, useState } from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import Typography from "@material-ui/core/Typography";
import { fontSize0023 } from "../../styles/fontSizes.jss";
import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";
import { MuiCheckbox } from "../../Reuseables/MuiCheckbox";
import { MiniBoard } from "./MiniBoard";
import { reducer } from "./BoardTool.red";
import { useStyles } from "./BoardTool.jss";

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
                pieceDefs={pieceDefs}
                allRanges={allRanges}
                screenCase={screenCase}
                rangeBoard={state.rangeBoard}
                parentDispatch={dispatch}
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
