import React from "react";
import { rankfiles } from "./rankfiles";
import { sqrColorClass } from "./sqrColorClass";
import { blankBoard } from "./blankBoard";
import { CreatePieceSquare as Square } from "./CreatePieceSquare";
import { CreatePiecePiece as Piece } from "./CreatePiecePiece";
import { stylesObjects } from "../create_piece_styles_objects";
import "../../helpers/stepFuncs";
import {styles} from "./_CreatePieceBoard.jss";

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
                        toggleOffset={this.props.toggleOffset}
                        update={this.props.update}
                        isOffset={this.props.offsets[rf]}
                        pieceLoc={this.props.pieceLoc}
                        showSpanText={this.props.showSpanText}
                        showOffsetText={this.props.showOffsetText}

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
                        toggleOffset={this.props.toggleOffset}
                        update={this.props.update}
                        isOffset={this.props.offsets[rf]}
                        pieceLoc={this.props.pieceLoc}
                        showSpanText={this.props.showSpanText}
                        showOffsetText={this.props.showOffsetText}
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
            <div className={this.props.classes.my_grid} style={stylesObjects[this.props.screenCase]["Board"]()}>
                {this.getBoard()};
            </div>
        );
    }
}

