import React from "react";
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import {BoardSquare} from "./components/BoardSquare";
import {Piece} from "./components/Piece";
import {rankfiles} from "./sharedData/rankfiles"
import {sqrColors} from "./sharedData/sqrColors";

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
                        <Piece pos={rf} id_={id_}/>
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