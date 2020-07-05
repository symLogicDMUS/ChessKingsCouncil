import React from "react";
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import {BoardSquare} from "./BoardSquare";
import {Piece} from "./Piece";
import {rankfiles} from "../../helpers/rankfiles"
import {sqrClasses} from "../helpers/sqrClasses";
import {sqrColors} from "../helpers/sqrColors";
import {getPosPx} from "../helpers/getPosPx";
import { getPieceImg } from "../../MyPieces/getPieceImg";
import "../css/interactiveSqr.css";
import "../css/displaySqr.css";
import "../css/Piece.css";
import "../css/Board.css";

export class Board extends React.Component {

    constructor(props) {
        super(props);
        this.displaySqrs = [];
        for (var rf of rankfiles) {
            this.displaySqrs.push(
                <div className={sqrColors[rf]} style={getPosPx(rf)}>

                </div>
            );
        }
    }

    getInteractiveBoard() {

        let squares = [];
        var sqr_color="_";
        var id_ = "_";
        for (var rf of rankfiles) {

            sqr_color = sqrClasses[rf];
            id_ = this.props.data.board[rf];

            if (id_ === '#') {
                squares.push(
                    <div className={sqr_color} style={getPosPx(rf)}>
                        <BoardSquare sqr_color={sqr_color} pos={rf} data={this.props.data} >
                            {null}
                        </BoardSquare>
                    </div>
                );    
            }

            else {
                squares.push(
                    <div className={sqr_color} style={getPosPx(rf)}>
                    <BoardSquare sqr_color={sqr_color} pos={rf} data={this.props.data} >
                        <Piece pos={rf} id_={id_} img_={getPieceImg(id_, this.props.data.idDict, this.props.data.rangeDefs)} />
                    </BoardSquare>
                    </div>
                );
            }
        }

        return squares;
    }

    getDisplayBoard() {
        return this.displaySqrs;
    }

    componentDidUpdate() {
        console.log("updated")
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