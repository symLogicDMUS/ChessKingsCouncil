import React, {Component} from 'react';
import {isPiece} from "../../helpers/isPiece";
import {Container} from "./Container";

export class GameSandbox extends Component {

    constructor(props) {
        super(props);
        this.state = {bValue: true}
        this.board = {
            'a1': 'WR1', 'a2': '#', 'a3': '#', 'a4': '#', 'a5': '#', 'a6': '#', 'a7': '#', 'a8': '#',
            'b1': '#', 'b2': '#', 'b3': '#', 'b4': '#', 'b5': '#', 'b6': '#', 'b7': '#', 'b8': '#',
            'c1': '#', 'c2': '#', 'c3': '#', 'c4': '#', 'c5': '#', 'c6': '#', 'c7': '#', 'c8': '#',
            'd1': '#', 'd2': '#', 'd3': '#', 'd4': '#', 'd5': '#', 'd6': '#', 'd7': '#', 'd8': '#',
            'e1': 'WK1', 'e2': '#', 'e3': '#', 'e4': '#', 'e5': '#', 'e6': '#', 'e7': '#', 'e8': '#',
            'f1': '#', 'f2': '#', 'f3': '#', 'f4': '#', 'f5': '#', 'f6': '#', 'f7': '#', 'f8': '#',
            'g1': '#', 'g2': '#', 'g3': '#', 'g4': '#', 'g5': '#', 'g6': '#', 'g7': '#', 'g8': '#',
            'h1': 'WR2', 'h2': '#', 'h3': '#', 'h4': '#', 'h5': '#', 'h6': '#', 'h7': '#', 'h8': '#'
        }
        this.rookStartAndDest = {
            "c1": ["a1", "d1"],
            "g1": ["h1", "f1"],
            "c8": ["a8", "d8"],
            "g8": ["h8", "f8"]
        }
        this.ply = this.ply.bind(this);
        this.isCastle = this.isCastle.bind(this);
        this.getRookStartAndDest = this.getRookStartAndDest.bind(this);
    }

    isCastle(start, dest) {
        if (start !== 'e1' && start !== 'e8') {
            return false
        } else if (start === 'e1') {
            return dest === 'c1' || dest === 'g1';
        } else if (start === 'e8') {
            return dest === 'c8' || dest === 'g8';
        } else {
            return false;
        }
    }

    /*get the start and dest of a particular rook during a castle**/
    getRookStartAndDest(kingDest) {
        const [rStart, rDest] = this.rookStartAndDest[kingDest];
        return [rStart, rDest]
    }

    /*move piece to new square, capturing piece there if there is**/
    ply(start, dest) {
        if (isPiece(this.board[dest])) {
            this.captured = this.board[dest]
        } else {
            this.captured = null;
        }
        this.board[dest] = this.board[start]
        this.board[start] = '#'
    }

    render() {
        return (
            <div>
                <Container snapToGrid={this.props.snapToGrid} gamesandbox={this}/>
            </div>
        );
    }
}