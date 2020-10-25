import React from "react";
import "./ScrollArrow.scss";

export class ScrollArrow extends React.Component {
    constructor(props) {
        super(props);
        this.arrowImg = null;
    }

    render() {
        if (this.props.id === "up") this.class_ = "create-piece-scroll-up";
        else this.class_ = "create-piece-scroll-down";

        if (this.class_ === "create-piece-scroll-up")
            this.arrowImg = <img src="/Images/arrows/up-arrow.svg" className="create-piece-scroll-arrow-up" />;
        else this.arrowImg = <img src="/Images/arrows/down-arrow.svg" className="create-piece-scroll-arrow-down" />;

        return (
            <div className={this.class_} onClick={this.props.move}>
                {this.arrowImg}
            </div>
        );
    }
}
