import React from "react";
import {imgNames} from  "../../MyPieces/imgNames";
import {pieceImgDict} from "../../MyPieces/pieceImgDict";
import "../css/Promo.css";

export class PromoChoice extends React.Component {

    constructor(props) {
        super(props);
        this.class_ = "promo-choice"
    }

    render() {

        this.class_ = "promo-choice";
        if (this.props.selected === this.props.key)
            this.class_ = "promo-choice-selected";

        return (
                <img src={`/Images/Pieces/${this.props.imgName}`} className={this.class_} />
        );
    }

}