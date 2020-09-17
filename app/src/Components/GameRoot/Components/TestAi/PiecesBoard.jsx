import React from "react";
import {rankfiles} from "../../../helpers/rankfiles";
import {TestAiPiece as Piece} from "./TestAiPiece";
import {PieceSquare as Square} from "./PieceSquare";
import {getPosPx} from "../../../helpers/getPosPx";
import {getPieceImg} from "../../../MyPieces/getPieceImg";
import "./PiecesBoard.css";


export class PiecesBoard extends React.Component {

    getBoard() {
        let squares = [];
        for (var rf of rankfiles) {
            if (this.props.board[rf] === "#") {
                squares.push(
                    <Square pxPos={getPosPx(rf, 75, 600)}>
                        {null}
                    </Square>
                )
            }
            else {
                squares.push(
                    <Square pxPos={getPosPx(rf, 75, 600)}>
                        <Piece imgName={getPieceImg(this.props.board[rf], this.props.idDict, this.props.pieceDefs)} />
                    </Square>
                )
            }
        }

        return squares;
    }

    render() {
        return (
            <div className="test-ai-pieces-board">
                {this.getBoard()}
            </div>
        );
    }
}

export default PiecesBoard;