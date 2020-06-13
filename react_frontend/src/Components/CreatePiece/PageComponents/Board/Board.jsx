import React from "react";
import {rankfiles} from "./rankfiles";
import {sqrClass} from "./sqrClass";
import {blankBoard} from "./blankBoard";
import {MySquare} from "./MySquare";
import {MyPiece} from "./MyPiece";
import "../../../helperFuncs/stepFuncs";


export class Board extends React.Component {

    constructor(props) {
        super(props);
        this.board = blankBoard;
        this.squares = []
        for (var rf of rankfiles) {
            if (this.board[rf] != '#') {
                this.squares.push(
                <MySquare id_={rf} spanElement={this.props.spanElements[rf]} class_={sqrClass[rf]}>
                    <MyPiece />
                </MySquare>
                );
            }
            else {
                this.squares.push(
                <MySquare id={rf} spanElement={this.props.spanElements[rf]} class_={sqrClass[rf]}>
                    {null}
                </MySquare>
                );
            }
        }
    }

    render() {
        return (
            <div className="my-grid">
                {this.squares};
            </div>
        );
    }
}