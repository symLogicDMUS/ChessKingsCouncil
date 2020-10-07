import React from "react";
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import {Square} from "./Square";
import {Piece} from "./Piece";
import {rankfiles} from "../../helpers/rankfiles"
import {sqrClasses} from "../../helpers/sqrClasses";
import {sqrColors} from "../gameRootHelpers/sqrColors";
import {getPosPx} from "../gameRootHelpers/getPosPx";
import { getPieceImg } from "../../MyPieces/getPieceImg";
import "../css/interactiveSqr.css";
import "../css/displaySqr.css";
import "../css/piece.css";
import "../css/Board.css";

export class Board extends React.Component {

    constructor(props) {
        super(props);
        this.displaySqrs = [];
        for (var rf of rankfiles) {
            this.displaySqrs.push(<div className={sqrColors[rf]} style={getPosPx(rf)}></div>);
        }
    }

    getInteractiveBoard() {

        let squares = [];
        let pieceImgBase64Str = null;
        for (var rf of rankfiles) {

            if (this.props.gameroot.board[rf] === '#') {
                squares.push(
                    <Square rf={rf} sqr_color={sqrClasses[rf]} pos={rf} gameroot={this.props.gameroot} >
                        {null}
                    </Square>
                );    
            }

            else {
                pieceImgBase64Str = getPieceImg(this.props.gameroot.board[rf], this.props.gameroot.idDict, this.props.gameroot.pieceDefs);
                squares.push(
                    <Square sqr_color={sqrClasses[rf]} pos={rf} gameroot={this.props.gameroot} >
                        <Piece pos={rf} id_={this.props.gameroot.board[rf]} pieceImgBase64Str={pieceImgBase64Str} />
                    </Square>
                );
            }
        }

        return squares;
    }

    getDisplayBoard() {
        return this.displaySqrs;
    }

    render() {
        return (
            <>
                <DndProvider backend={Backend}>
                    <div className="interactive-board">
                        {this.getInteractiveBoard()}
                    </div>
                </DndProvider>
                <div className="display-board">
                    {this.getDisplayBoard()}
                </div>
            </>
        );
    }
}

export default Board;