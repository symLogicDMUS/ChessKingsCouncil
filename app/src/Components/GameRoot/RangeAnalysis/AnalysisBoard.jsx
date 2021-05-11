import React from "react";
import { rankfiles } from "../../helpers/rankfiles";
import { isSpecial } from "../../helpers/isSpecial";
import { getPieceImg } from "../../styles/themes/specialThemeImgs/getPieceImg";
import { getFranchisePieceImg } from "../../styles/themes/specialThemeImgs/getFranchisePieceImg";
import {specialThemeList} from "../../styles/themes/specialThemeImgs/specialThemeList.jss";
import { useStyles } from "./AnalysisBoard.jss";

const AnalysisSquare = React.lazy(() => import('./AnalysisSquare'));
const AnalysisPiece = React.lazy(() => import('./AnalysisPiece'));

function AnalysisBoard({
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
                    <AnalysisSquare
                        rf={rf}
                        key={rf}
                        theme={theme}
                        screenCase={screenCase}
                        isHighlight={rangeBoard[rf]}
                    >
                        {null}
                    </AnalysisSquare>
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
                    <AnalysisSquare
                        rf={rf}
                        key={rf}
                        theme={theme}
                        screenCase={screenCase}
                        isHighlight={rangeBoard[rf]}
                    >
                        <AnalysisPiece
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
                    </AnalysisSquare>
                );
            }
        }
        return squares;
    };

    return <div className={classes.board}>{getBoard()}</div>;
}

export default AnalysisBoard;