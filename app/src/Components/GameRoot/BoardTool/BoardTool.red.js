import React from "react";
import { Portal } from "@material-ui/core";
import { getColor } from "../../helpers/getColor";
import { rankfiles } from "../../helpers/rankfiles";
import { getPieceName } from "../../helpers/getPieceName";
import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";
import { isSpecial } from "../../helpers/isSpecial";
import { ProfileWBModal } from "../../PieceProfiles/ProfileWBModal";
import { NoProfile } from "../../PieceProfiles/NoProfile";
import {fontSizes} from "../../PieceProfiles/ProfileWBModal.jss";

export function reducer(state, action) {
    switch (action.type) {
        case "toggle-piece":
            /**
             * Used by RangePiece. triggered when piece clicked on. triggers new traversal of squares
             * */
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
                                <ProfileWBModal
                                    def={def}
                                    color={color}
                                    pieceName={pieceName}
                                    theme={action.theme}
                                    screenCase={action.screenCase}
                                    closeProfile={action.closeProfile}
                                />
                            ) : (
                                <NoProfile
                                    color={color}
                                    pieceName={pieceName}
                                    theme={action.theme}
                                    screenCase={action.screenCase}
                                    closeProfile={action.closeProfile}
                                />
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
