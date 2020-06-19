import React from "react";
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import {BoardSquare} from "./BoardSquare";
import {Piece} from "./Piece";
import {rankfiles} from "../../helpers/rankfiles"
import {sqrColors} from "../../helpers/sqrColors";
import "../GameRoot.css";

export class Board extends React.Component {

    constructor(props) {
        super(props)
    }

    update() {
        let squares = [];
        var sqr_color="_";
        var id_ = "_";
        for (var rf of rankfiles) {
            sqr_color = sqrColors[rf];
            id_ = this.props.data.board[rf];
            if (id_ === '#') {
                squares.push(
                    <div className={sqr_color}>
                        <BoardSquare sqr_color={sqr_color} pos={rf} data={this.props.data} >
                            {null}
                        </BoardSquare>
                    </div>
                );    
            }

            else {
                squares.push(
                    <div className={sqr_color}>
                    <BoardSquare sqr_color={sqr_color} pos={rf} data={this.props.data} >
                        <Piece pos={rf} id_={id_} idDict={this.props.data.idDict} />
                    </BoardSquare>
                    </div>
                );
            }
        }

        return squares;
    }

    componentDidUpdate() {
        console.log("updated")
    }

    render() {
        return (
            <DndProvider backend={Backend}>
                <div className="grid">
                    {this.update()}
                </div>
            </DndProvider>
        );
    }
}

export default Board;