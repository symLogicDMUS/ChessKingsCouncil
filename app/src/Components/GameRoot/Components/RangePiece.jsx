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
            <img src={`/Images/Pieces/${this.props.imgName}`} className="range-display-piece" onClick={this.updatePrh}/>
        );
    } 
}