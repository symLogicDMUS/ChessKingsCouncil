import React from "react";
import "./ScrollArrow.css";

export class ScrollArrow extends React.Component {

    constructor(props) {
        super(props);
        this.arrowImg = null;
    }

    render() {

        if (this.props.id === "up")
            this.class_ = "create-piece-scroll-up"
        else
            this.class_ = "create-piece-scroll-down"

        if (this.class_ === "create-piece-scroll-up")
            this.arrowImg = <img src="/Images/up-arrow.svg" className="create-piece-scroll-arrow" />
        else
            this.arrowImg = <img src="/Images/down-arrow.svg" className="create-piece-scroll-arrow" />

        return (
            <div className={`create-piece-scroll ${this.class_}`} onClick={this.props.move}>
                {this.arrowImg}
            </div>
        )
    }
}
