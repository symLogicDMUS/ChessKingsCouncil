import React, { useReducer, useState } from "react";
import Box from "@material-ui/core/Box";
import { Portal } from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import Typography from "@material-ui/core/Typography";
import { themes } from "../../styles/themes.jss";
import { smallBoardFontSizeDesktop as fontSize } from "../../Reuseables/Board.jss";
import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";
import { fontSize0023 } from "../../styles/fontSize.jss";
import { rankfiles } from "../../helpers/rankfiles";
import { getColor } from "../../helpers/getColor";
import { MiniBoard } from "./MiniBoard";
import { Close } from "../../Reuseables/Close";
import { MuiCheckbox } from "../../Reuseables/MuiCheckbox";
import { ProfileWB } from "../../PieceProfiles/ProfileWB";
import { getPieceName } from "../../helpers/getPieceName";
import { getColorName } from "../../helpers/getColorName";
import { profile_flexbox, profile_top, useStyles } from "./BoardTool.jss";

const isSpecial = (pieceName) => {
    return pieceName === "King" || pieceName === "Pawn";
};

export function reducer(state, action) {
    switch (action.type) {
        case "toggle-piece":
            /**Used by RangePiece. triggered when piece clicked on. triggers new traversal of squares  */
            if (state.pieceId === action.id) {
                return {
                    profile: null,
                    rangeBoard: getBinaryBoarAllFalse(),
                    pieceId: null,
                };
            } else {
                const rangeBoard = getBinaryBoarAllFalse();
                rankfiles.forEach((rf) => {
                    rangeBoard[rf] = action.allRanges[action.id].includes(rf);
                });
                const id = action.board[action.rf];
                const color = getColor(id);
                const pieceName = getPieceName(id, action.idDict);
                const def = isSpecial(pieceName)
                    ? null
                    : action.pieceDefs[pieceName][color];
                return {
                    profile: (
                        <Portal>
                            {def ? (
                                <Box
                                    style={profile_flexbox(
                                        fontSize0023,
                                        action.theme
                                    )}
                                >
                                    <Box
                                        style={profile_top(
                                            fontSize0023,
                                            action.theme
                                        )}
                                    >
                                        <Typography variant="h6">
                                            {getColorName(color)} {pieceName}
                                        </Typography>
                                        <Close
                                            style={{
                                                fontSize: fontSize0023,
                                                width: "1.5em",
                                                height: "1.5em",
                                            }}
                                            onClick={action.closeProfile}
                                            theme={action.theme}
                                        />
                                    </Box>
                                    <ProfileWB
                                        def={def}
                                        color={color}
                                        pieceName={pieceName}
                                        theme={action.theme}
                                        screenCase={action.screenCase}
                                    />
                                </Box>
                            ) : (
                                <Box
                                    style={{
                                        ...profile_flexbox(
                                            fontSize0023,
                                            action.theme
                                        ),
                                        height: "4.6em",
                                    }}
                                >
                                    <Box
                                        style={profile_top(
                                            fontSize0023,
                                            action.theme
                                        )}
                                    >
                                        <Close
                                            style={{
                                                fontSize: fontSize0023,
                                                width: "1.5em",
                                                height: "1.5em",
                                            }}
                                            onClick={action.closeProfile}
                                            theme={action.theme}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        style={{
                                            fontSize: fontSize0023 * 2,
                                            color: themes[action.theme].text,
                                        }}
                                    >
                                        No profile for {pieceName}
                                    </Typography>
                                </Box>
                            )}
                        </Portal>
                    ),
                    rangeBoard: rangeBoard,
                    pieceId: action.id,
                };
            }
        default:
            throw new Error();
    }
}

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

    const classes = useStyles({
        theme: theme,
        fontSize: screenCase === "mobile" ? fontSize * 1.1 : fontSize,
    });

    const toggleShowProfileOnClick = () => {
        setShowProfileOnClick(!showProfileOnClick);
    };

    return (
        <div className={classes.range_display_tool}>
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
