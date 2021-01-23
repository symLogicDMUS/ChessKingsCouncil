import React from "react";
import Box from "@material-ui/core/Box";
import {Portal} from "@material-ui/core";
import {Close} from "../../Reuseables/Close";
import {themes} from "../../styles/themes.jss";
import {getColor} from "../../helpers/getColor";
import {rankfiles} from "../../helpers/rankfiles";
import {getPieceName} from "../../helpers/getPieceName";
import Typography from "@material-ui/core/Typography";
import {fontSize0023} from "../../styles/fontSizes.jss";
import {profile_flexbox, profile_top} from "./BoardTool.jss";
import {getColorName} from "../../helpers/getColorName";
import {ProfileWB} from "../../PieceProfiles/ProfileWB";
import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {isSpecial} from "../../helpers/isSpecial";

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
                                        style={{
                                            ...profile_top(
                                                fontSize0023,
                                                action.theme
                                            ),
                                            justifyContent: "flex-end",
                                        }}
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