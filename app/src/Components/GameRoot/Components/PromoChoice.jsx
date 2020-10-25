import React from "react";
import "../css/Promo.scss";


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
                <img src={this.props.pieceImgBase64Str} className={this.class_} />
        );
    }

}