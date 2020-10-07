import React from "react";
import "../css/RangePiece.css";

export class RangePiece extends React.Component {

    constructor(props) {
        super(props);
        this.updatePrh = this.updatePrh.bind(this);
    }

    updatePrh() {
        this.props.updatePrh(this.props.id_)
    }

    render() {
        return (
            <img src={this.props.pieceImgBase64Str} className="range-display-piece" onClick={this.updatePrh}/>
        );
    } 
}