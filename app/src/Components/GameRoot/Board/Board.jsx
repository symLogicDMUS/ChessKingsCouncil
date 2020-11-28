import React from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Square } from "./Square";
import { Piece } from "./Piece";
import { getPieceImg } from "../../MyPieces/getPieceImg";
import withStyles from "@material-ui/core/styles/withStyles";
import { DisplaySquare } from "./DisplaySquare";
import {getPieceName} from "../../helpers/getPieceName";
import { rankfiles } from "../../helpers/rankfiles";
import { styles } from "./Board.jss";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.displaySqrs = [];
        for (const rf of rankfiles) {
            this.displaySqrs.push(<DisplaySquare rf={rf} />);
        }
    }

    getInteractiveBoard() {
        let squares = [];
        let pieceImgBase64Str = null;
        let id = null;
        for (const rf of rankfiles) {
            if (this.props.gameroot.board[rf] === "#") {
                squares.push(
                    <Square rf={rf} gameroot={this.props.gameroot}>
                        {null}
                    </Square>
                );
            } else {
                id = this.props.gameroot.board[rf];
                pieceImgBase64Str = getPieceImg(id, this.props.gameroot.idDict, this.props.gameroot.pieceDefs);
                squares.push(
                    <Square rf={rf} gameroot={this.props.gameroot}>
                        <Piece
                            rf={rf}
                            id={id}
                            pieceImgBase64Str={pieceImgBase64Str}
                            alt={getPieceName(id, this.props.gameroot.idDict)}
                        />
                    </Square>
                );
            }
        }

        return squares;
    }

    render() {
        return (
            <>
                <DndProvider backend={Backend}>
                    <div style={this.props.classes.interactive_board}>{this.getInteractiveBoard()}</div>
                </DndProvider>
                <div style={this.props.classes.display_board}>{this.displaySqrs}</div>
            </>
        );
    }
}

export default withStyles(styles)(Board);
