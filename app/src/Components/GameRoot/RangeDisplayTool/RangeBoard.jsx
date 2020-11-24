import React from "react";
import { rankfiles } from "../../helpers/rankfiles";
import { RangePiece } from "./RangePiece";
import { sqrClasses } from "../../helpers/sqrClasses";
import { getPieceImg } from "../../MyPieces/getPieceImg";
import { getRangeDispPosPx } from "../../helpers/getRangeDispPosPx";
import "../scss/RangeBoard.scss";

export class RangeBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pieceId: null };
        this.toggleDisplayOfPieceRange = this.toggleDisplayOfPieceRange.bind(this);
    }

    toggleDisplayOfPieceRange(pieceId) {
        /**Used by RangePiece. triggered when piece clicked on. triggers new traversal of squares  */
        if (this.state.pieceId === pieceId) this.setState({ pieceId: null });
        else this.setState({ pieceId: pieceId });
    }

    isRfPartOfRange(rf) {
        /**use in traversal over all squares. Is rf part of range of last clicked piece*/
        if (this.state.pieceId === null) return false;

        if (!Object.keys(this.props.allRanges).includes(this.state.pieceId)) return false;

        if (this.props.allRanges[this.state.pieceId].includes(rf)) return true;

        if (this.props.board[rf] === this.props.pieceId) return true;
    }

    getHighlightClass(rf) {
        /**used in traversal over all squares. called if isRfPartOfRange returns true
         * light squares highlighted different color than dark ones
         * */
        let defaultClass = sqrClasses[rf];
        let highlightClass = null;
        switch (defaultClass) {
            case "sqr1":
                highlightClass = "rdb-sqr1-highlight";
                break;
            case "sqr2":
                highlightClass = "rdb-sqr2-highlight";
                break;
            default:
                console.log("ERROR: class type of square not recognized");
                break;
        }
        return highlightClass;
    }

    getSqrClass(rf) {
        if (this.isRfPartOfRange(rf)) return this.getHighlightClass(rf);
        else return "rdb-" + sqrClasses[rf];
    }

    getBoard() {
        let squares = [];
        let imgName = null;
        for (const rf of rankfiles) {
            if (this.props.board[rf] === "#") {
                squares.push(
                    <div className={this.getSqrClass(rf)} style={getRangeDispPosPx(rf)}>
                        {null}
                    </div>
                );
            } else {
                imgName = getPieceImg(this.props.board[rf], this.props.idDict, this.props.pieceDefs);
                squares.push(
                    <div className={this.getSqrClass(rf)} style={getRangeDispPosPx(rf)}>
                        <RangePiece
                            id_={this.props.board[rf]}
                            pieceImgBase64Str={imgName}
                            updatePrh={this.toggleDisplayOfPieceRange}
                        />
                    </div>
                );
            }
        }

        return squares;
    }

    render() {
        return <div className="range-display-board">{this.getBoard()}</div>;
    }
}
