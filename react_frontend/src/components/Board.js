import React from "react";
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Piece from "./Piece";
import "../index.css";
import BoardSquare from "./BoardSquare";
import { initBoard } from "../Game";


const rankfiles = [
    'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8', 
    'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', 
    'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', 
    'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', 
    'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', 
    'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', 
    'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', 
    'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'];  
    
const sqrColors = 
{'a8': 'sqr2', 'b8': 'sqr1', 'c8': 'sqr2', 'd8': 'sqr1', 'e8': 'sqr2', 'f8': 'sqr1', 'g8': 'sqr2', 'h8': 'sqr1', 
'a7': 'sqr1', 'b7': 'sqr2', 'c7': 'sqr1', 'd7': 'sqr2', 'e7': 'sqr1', 'f7': 'sqr2', 'g7': 'sqr1', 'h7': 'sqr2', 
'a6': 'sqr2', 'b6': 'sqr1', 'c6': 'sqr2', 'd6': 'sqr1', 'e6': 'sqr2', 'f6': 'sqr1', 'g6': 'sqr2', 'h6': 'sqr1', 
'a5': 'sqr1', 'b5': 'sqr2', 'c5': 'sqr1', 'd5': 'sqr2', 'e5': 'sqr1', 'f5': 'sqr2', 'g5': 'sqr1', 'h5': 'sqr2', 
'a4': 'sqr2', 'b4': 'sqr1', 'c4': 'sqr2', 'd4': 'sqr1', 'e4': 'sqr2', 'f4': 'sqr1', 'g4': 'sqr2', 'h4': 'sqr1', 
'a3': 'sqr1', 'b3': 'sqr2', 'c3': 'sqr1', 'd3': 'sqr2', 'e3': 'sqr1', 'f3': 'sqr2', 'g3': 'sqr1', 'h3': 'sqr2', 
'a2': 'sqr2', 'b2': 'sqr1', 'c2': 'sqr2', 'd2': 'sqr1', 'e2': 'sqr2', 'f2': 'sqr1', 'g2': 'sqr2', 'h2': 'sqr1', 
'a1': 'sqr1', 'b1': 'sqr2', 'c1': 'sqr1', 'd1': 'sqr2', 'e1': 'sqr1', 'f1': 'sqr2', 'g1': 'sqr1', 'h1': 'sqr2'};


export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }
    getBoard() {
        if (this.props.board === "-") {
            return <div>Loading...</div>
        }       
        let squares = [];
        var sqr_color="_";
        var id_ = "_";
        for (var rf of rankfiles) {
            sqr_color = sqrColors[rf];
            id_ = this.props.board[rf];
            if (id_ === '#') {
                squares.push(
                    <div className={sqr_color}>
                        <BoardSquare sqr_color={sqr_color} pos={rf}>
                            {null}
                        </BoardSquare>
                    </div>
                );                        
            }
            else {
                squares.push(
                    <div className={sqr_color}>
                    <BoardSquare sqr_color={sqr_color} pos={rf}>
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
                    {this.getBoard()}
                </div>
            </DndProvider>
        );
    }
}