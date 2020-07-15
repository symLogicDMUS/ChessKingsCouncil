import React from "react";
import "./ScrollArrow.css";

export class ScrollArrow extends React.Component {

    constructor(props) {
        super(props);
        this.arrowImg = null;
    }

    render() {

        if (this.props.id === "up")
            this.class_ = "scroll-up"
        else
            this.class_ = "scroll-down"

        if (this.class_ === "scroll-up")
            this.arrowImg = <img src="/Images/up-arrow.svg" className="scroll-arrow" />
        else
            this.arrowImg = <img src="/Images/down-arrow.svg" className="scroll-arrow" />


        return (
            <div className={`scroll + ${this.class_}`} onClick={this.props.move}>
                {this.arrowImg}
            </div>
        )
    }
}
