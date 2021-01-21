import React from "react";
import { v4 as uuidv4 } from "uuid";
import { rankfiles } from "../../helpers/rankfiles";
import { getColor } from "../../helpers/getColor";
import { getPieceImg } from "../../MyPieces/getPieceImg";
import { getPieceName } from "../../helpers/getPieceName";
import { MiniSquare as Square } from "./MiniSquare";
import { MiniPiece as Piece } from "./MiniPiece";
import { smallBoardFontSizeDesktop as fontSize } from "../../Reuseables/Board.jss";
import { useStyles } from "./MiniBoard.jss";

export function MiniBoard({
    theme,
    screenCase,
    allRanges,
    board,
    idDict,
    pieceDefs,
    rangeBoard,
    parentDispatch,
    setProfileModal,
}) {
    const classes = useStyles({
        theme: theme,
        fontSize: screenCase === "mobile" ? fontSize * 1.1 : fontSize,
    });

    const getBoard = () => {
        const squares = [];
        for (const rf of rankfiles) {
            if (board[rf] === "#") {
                squares.push(
                    <Square
                        key={uuidv4()}
                        rf={rf}
                        theme={theme}
                        screenCase={screenCase}
                        isHighlight={rangeBoard[rf]}
                    >
                        {null}
                    </Square>
                );
            } else {
                squares.push(
                    <Square
                        key={uuidv4()}
                        rf={rf}
                        theme={theme}
                        screenCase={screenCase}
                        isHighlight={rangeBoard[rf]}
                    >
                        <Piece
                            key={uuidv4()}
                            openProfile={() => setProfileModal(true)}
                            togglePiece={() =>
                                parentDispatch({
                                    type: "toggle-piece",
                                    rf: rf,
                                    id: board[rf],
                                    board: board,
                                    idDict: idDict,
                                    pieceDefs: pieceDefs,
                                    allRanges: allRanges,
                                    closeProfile: () => setProfileModal(false),
                                    screenCase: screenCase,
                                    theme: theme,
                                })
                            }
                            pieceImgBase64Str={getPieceImg(
                                board[rf],
                                idDict,
                                pieceDefs
                            )}
                        />
                    </Square>
                );
            }
        }
        return squares;
    };

    return <div className={classes.board}>{getBoard()}</div>
}
