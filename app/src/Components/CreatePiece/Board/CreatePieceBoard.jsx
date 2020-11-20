import React from "react";
import ReactDOM from "react-dom";
import { rankfiles } from "./rankfiles";
import { sqrColorClass } from "./sqrColorClass";
import { blankBoard } from "./blankBoard";
import { CreatePieceSquare as Square } from "./CreatePieceSquare";
import { CreatePiecePiece as Piece } from "./CreatePiecePiece";
import { stylesObjects } from "../create-piece-styles-objects";
import "../../helpers/stepFuncs";
import "./_CreatePieceBoard.scss";

export class CreatePieceBoard extends React.Component {
    constructor(props) {
        super(props);
        this.screenHeight = window.screen.availHeight;
        this.screenWidth = window.screen.availWidth;
        this.board = blankBoard;
    }

    getBoard() {
        let squares = [];
        for (var rf of rankfiles) {
            if (rf === this.props.pieceLoc) {
                squares.push(
                    <Square
                        rf={rf}
                        className={sqrColorClass[rf]}
                        isSpan={this.props.spanDisplays[rf]}
                        togleJump={this.props.togleJump}
                        update={this.props.update}
                        isJump={this.props.jumps[rf]}
                        pieceLoc={this.props.pieceLoc}
                        showSpanText={this.props.showSpanText}
                        showOffsetText={this.props.showOffsetText}
                        setUnsaved={this.props.setUnsaved}
                    >
                        <Piece pieceImgBase64Str={this.props.pieceImgBase64Str} />
                    </Square>
                );
            } else {
                squares.push(
                    <Square
                        rf={rf}
                        className={sqrColorClass[rf]}
                        isSpan={this.props.spanDisplays[rf]}
                        togleJump={this.props.togleJump}
                        update={this.props.update}
                        isJump={this.props.jumps[rf]}
                        pieceLoc={this.props.pieceLoc}
                        showSpanText={this.props.showSpanText}
                        showOffsetText={this.props.showOffsetText}
                        setUnsaved={this.props.setUnsaved}
                    >
                        {null}
                    </Square>
                );
            }
        }
        return squares;
    }

    render() {
        return (
            <div className="my-grid" style={stylesObjects[this.props.screenCase]["Board"]()}>
                {this.getBoard()};
            </div>
        );
    }
}

