import React from "react";
import {v4 as uuidv4} from "uuid";
import {rankfiles} from "../../helpers/rankfiles";
import {getPieceImg} from "../../MyPieces/getPieceImg";
import {MiniSquare as Square} from "./MiniSquare";
import {MiniPiece as Piece} from "./MiniPiece";
import {useStyles} from "./MiniBoard.jss";
import {isSpecial} from "../../helpers/isSpecial";

export function MiniBoard({
                              theme,
                              screenCase,
                              board,
                              idDict,
                              pieceDefs,
                              rangeBoard,
                              allRanges,
                              selectedSqr,
                              parentDispatch,
                          }) {
    const classes = useStyles({theme: theme});

    const getBoard = () => {
        let id;
        let color;
        let pieceName;
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
                id = board[rf]
                color = id[0]
                pieceName = idDict[id[1].toLowerCase()]
                squares.push(
                    <Square
                        rf={rf}
                        key={rf}
                        theme={theme}
                        screenCase={screenCase}
                        isHighlight={rangeBoard[rf]}
                    >
                        <Piece
                            key={board[rf]}
                            rf={rf}
                            selectedSqr={selectedSqr}
                            pieceName={pieceName}
                            color={color}
                            def={isSpecial(pieceName) ? null : pieceDefs[pieceName][color]}
                            isSpecial={isSpecial(pieceName)}
                            openProfile={() => parentDispatch({
                                type: 'toggle-piece',
                                rf: rf,
                                board: board,
                                allRanges: allRanges,
                            })}
                            closeProfile={() => parentDispatch({
                                type: 'toggle-piece',
                                rf: null,
                                board: board,
                                allRanges: allRanges,
                            })}
                            pieceImgBase64Str={getPieceImg(
                                board[rf],
                                idDict,
                                pieceDefs
                            )}
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
