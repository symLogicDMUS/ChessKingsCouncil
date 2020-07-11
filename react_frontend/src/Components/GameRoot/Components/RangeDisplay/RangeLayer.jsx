import React from "react";
import { rankfiles } from "../../../helpers/rankfiles";
import { getPosPx } from "../../helpers/getPosPx";
import {Square} from "../Square";
import "../../css/RangeLayer.css";

export class RangeLayer extends React.Component {

    constructor(props) {
        super(props);
    }
    

    getHighlightImg(rf) {
        if (this.props.board[rf] === this.props.pieceRangeHighlight)
            return "/Images/range-sqr-full.svg";
        else
            return "/Images/range-sqr.svg";
    }

    isHighlight(rf) {

        if (this.props.pieceRangeHighlight === "none")
            return false

        if (! Object.keys(this.props.allRanges).includes(this.props.pieceRangeHighlight)) 
            return false

        if (this.props.allRanges[this.props.pieceRangeHighlight].includes(rf))
            return true;

        if (this.props.board[rf] === this.props.pieceRangeHighlight)
            return true;
        
    }

    getBoard() {

        let squares = [];
        let id_ = null;
        let img_ = null;
        for (var rf of rankfiles) {

            if (this.isHighlight(rf)) {
                squares.push(
                    <div className="range-layer-sqr" style={getPosPx(rf)} >
                        <img src={this.getHighlightImg(rf)} style={{maxHeight:"100px", maxWidth:"100px"}} />
                    </div>
                );
            }

            else {
                squares.push(
                    <div className="range-layer-sqr" style={getPosPx(rf)}>
                        {null}
                    </div>
                );
            }

        }

        return squares;
    }

    render() {
        return (
            <div className="range-layer-board">
                {this.getBoard()}
            </div>
        );
    }
    
}