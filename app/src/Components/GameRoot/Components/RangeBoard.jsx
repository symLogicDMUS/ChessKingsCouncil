import React from "react";
import {rankfiles} from "../../helpers/rankfiles";
import {RangePiece} from "./RangePiece";
import { sqrClasses } from "../../helpers/sqrClasses";
import { getPieceImg } from "../../MyPieces/getPieceImg";
import {getRangeDispPosPx} from "../../helpers/getRangeDispPosPx";
import "../css/RangeBoard.css";

export class RangeBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {pieceId: null};
        this.updatePrh = this.updatePrh.bind(this);
    }

    updatePrh(id) {
        if (this.state.pieceId === id)
            this.setState({pieceId: null});
        else
            this.setState({pieceId: id})
        return;
    }

    isHighlight(rf) {

        if (this.state.pieceId === null)
            return false

        if (! Object.keys(this.props.allRanges).includes(this.state.pieceId)) 
            return false

        if (this.props.allRanges[this.state.pieceId].includes(rf))
            return true;

        if (this.props.board[rf] === this.props.pieceId)
            return true;
    }

    getHighlightClass(rf) {
        let defaultClass = sqrClasses[rf];
        let highlightClass = null;
        switch (defaultClass) { 
            case "sqr1":
                highlightClass = "sqr-highlight1";
                break;
            case "sqr2":
                highlightClass = "sqr-highlight2";
                break;
            default:
                console.log("ERROR: class type of square not recognized");
                break;
        }
        return highlightClass;
    }

    getSqrClass(rf) {
        if (this.isHighlight(rf))
            return this.getHighlightClass(rf)
        else
            return sqrClasses[rf]
    }

    getBoard() {
        let squares = [];
        let imgName = null;
        for (var rf of rankfiles) {

            if (this.props.board[rf] === '#') {
                squares.push(
                    <div className={this.getSqrClass(rf)} style={getRangeDispPosPx(rf)} >
                        {null}
                    </div>
                )
            }

            else {
                imgName = getPieceImg(this.props.board[rf], this.props.idDict, this.props.pieceDefs);
                squares.push(
                    <div className={this.getSqrClass(rf)} style={getRangeDispPosPx(rf)}>
                        <RangePiece id_={this.props.board[rf]} pieceImgBase64Str={imgName} updatePrh={this.updatePrh} />
                    </div>
                )
            }
        }

        return squares;
    }

    render() {
        return(
            <div className="range-display-board">
                {this.getBoard()}
            </div>
        );
    }
}