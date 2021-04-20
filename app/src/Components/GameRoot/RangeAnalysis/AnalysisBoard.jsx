import React from "react";
import { rankfiles } from "../../helpers/rankfiles";
import { AnalysisSquare as Square } from "./AnalysisSquare";
import { AnalysisPiece as Piece } from "./AnalysisPiece";
import { isSpecial } from "../../helpers/isSpecial";
import { getPieceImg } from "../../../API/sampleData/specialThemeImgs/getPieceImg";
import { specialThemeList } from "../../styles/themes.jss";
import { getFranchisePieceImg } from "../../../API/sampleData/specialThemeImgs/getFranchisePieceImg";
import { useStyles } from "./AnalysisBoard.jss";

export function AnalysisBoard({
    theme,
    screenCase,
    gameType,
    board,
    idDict,
    pieceDefs,
    rangeBoard,
    allRanges,
    selectedSqr,
    parentDispatch,
    showProfileOnClick,
    toggleSecondaryDrawer,
}) {
    const classes = useStyles({ theme: theme });

    const getBoard = () => {
        let id;
        let color;
        let pieceName;
        let imgUrl;
        const squares = [];
        for (const rf of rankfiles) {
            if (board[rf] === "#") {
                squares.push(
                    <Square
                        rf={rf}
                        key={rf}
                        theme={theme}
                        screenCase={screenCase}
                        isHighlight={rangeBoard[rf]}
                    >
                        {null}
                    </Square>
                );
            } else {
                id = board[rf];
                color = id[0];
                pieceName = idDict[id[1].toLowerCase()];
                if (
                    gameType === "Standard" &&
                    specialThemeList.includes(theme)
                ) {
                    imgUrl = getFranchisePieceImg(theme, id, idDict);
                } else {
                    imgUrl = getPieceImg(id, idDict, pieceDefs);
                }
                squares.push(
                    <Square
                        rf={rf}
                        key={rf}
                        theme={theme}
                        screenCase={screenCase}
                        isHighlight={rangeBoard[rf]}
                    >
                        <Piece
                            rf={rf}
                            key={board[rf]}
                            imgUrl={imgUrl}
                            alt={pieceName}
                            selectedSqr={selectedSqr}
                            pieceName={pieceName}
                            color={color}
                            def={
                                isSpecial(pieceName)
                                    ? null
                                    : pieceDefs[pieceName][color]
                            }
                            isSpecial={isSpecial(pieceName)}
                            openProfile={() => {
                                parentDispatch({
                                    type: "toggle-piece",
                                    rf: rf,
                                    board: board,
                                    allRanges: allRanges,
                                });
                                toggleSecondaryDrawer(true);
                            }}
                            closeProfile={() => {
                                parentDispatch({
                                    type: "toggle-piece",
                                    rf: null,
                                    board: board,
                                    allRanges: allRanges,
                                });
                                toggleSecondaryDrawer(false);
                            }}
                            showProfileOnClick={showProfileOnClick}
                            screenCase={screenCase}
                            theme={theme}
                        />
                    </Square>
                );
            }
        }
        return squares;
    };

    return <div className={classes.board}>{getBoard()}</div>;
}
