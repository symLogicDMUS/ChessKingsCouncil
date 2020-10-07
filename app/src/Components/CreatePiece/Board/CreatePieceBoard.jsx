import React from "react";
import ReactDOM from "react-dom";
import {rankfiles} from "./rankfiles";
import {sqrColorClass} from "./sqrColorClass";
import {blankBoard} from "./blankBoard";
import {CreatePieceSquare as Square} from "./CreatePieceSquare";
import {CreatePiecePiece as Piece} from "./CreatePiecePiece";
import "../../helpers/stepFuncs";
import "./CreatePieceBoard.css";

export class CreatePieceBoard extends React.Component {

    constructor(props) {
        super(props);       
        this.board = blankBoard;
    }

    getBoard() {
        let squares = []
        for (var rf of rankfiles) {
            if (rf === this.props.pieceLoc) {
                squares.push(
                <Square 
                rf={rf}
                isSpan={this.props.spanDisplays[rf]} 
                togleJump={this.props.togleJump}
                update={this.props.update}
                isJump={this.props.jumps[rf]}
                pieceLoc={this.props.pieceLoc}
                class_={sqrColorClass[rf]}
                showSpanText={this.props.showSpanText}
                showOffsetText={this.props.showOffsetText}
                setUnsaved={this.props.setUnsaved}
                >
                    <Piece pieceImgBase64Str={this.props.pieceImgBase64Str} />
                </Square>
                ); 
            }
            else {
                squares.push(
                <Square 
                rf={rf} 
                isSpan={this.props.spanDisplays[rf]} 
                togleJump={this.props.togleJump}
                update={this.props.update}
                isJump={this.props.jumps[rf]}
                pieceLoc={this.props.pieceLoc}                
                class_={sqrColorClass[rf]}
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
            <div className="my-grid">
                {this.getBoard()};
            </div>
        );
    }
}

export let test = () => ReactDOM.render(
    <CreatePieceBoard 
        spanDisplays={{ 
        'a1': false, 'a2': false, 'a3': false, 'a4': false, 'a5': false, 'a6': false, 'a7': false, 'a8': false,
        'b1': false, 'b2': false, 'b3': false, 'b4': false, 'b5': false, 'b6': false, 'b7': false, 'b8': false,
        'c1': false, 'c2': false, 'c3': false, 'c4': false, 'c5': false, 'c6': false, 'c7': false, 'c8': false,
        'd1': false, 'd2': false, 'd3': false, 'd4': false, 'd5': false, 'd6': false, 'd7': false, 'd8': false, 
        'e1': false, 'e2': false, 'e3': false, 'e4': false, 'e5': false, 'e6': false, 'e7': false, 'e8': false, 
        'f1': false, 'f2': false, 'f3': false, 'f4': false, 'f5': false, 'f6': false, 'f7': false, 'f8': false,
        'g1': false, 'g2': false, 'g3': false, 'g4': false, 'g5': false, 'g6': false, 'g7': false, 'g8': false, 
        'h1': false, 'h2': false, 'h3': false, 'h4': false, 'h5': false, 'h6': false, 'h7': false, 'h8': false
        }}
    />,
    document.getElementById('root')
);

