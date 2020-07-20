import React from "react";
import "./PromoListScrollArrow.css";

export class PromoListScrollArrow extends React.Component {

    constructor(props) {
        super(props);
    }

    getArrowImg() {

        let arrowImg = null;
        if (this.props.class_ === "promo-list-up-arrow")
            arrowImg = <img src="/Images/up-arrow.svg"  className="promo-list-scroll-arrow" />
        else if (this.props.class_ === "promo-list-down-arrow")
            arrowImg = <img src="/Images/down-arrow.svg" className="promo-list-scroll-arrow" />
        else
            arrowImg = <div>Error: incorrect class for Scroll Arrow Component</div>
        return arrowImg;
    }

    render() {

        return (
            <div className={this.props.class_} onClick={this.props.move}>
                {this.getArrowImg()}
            </div>
        )
    }
}
