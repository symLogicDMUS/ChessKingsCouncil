import React from "react";
import {styles} from "./ScrollArrow.jss";

class ScrollArrow extends React.Component {

    constructor(props) {
        super(props);
    }

    getArrowImg() {

        let img_ = null;
        switch(this.props.class_) {
            case "spans-up-arrow":
                img_ = <img src="/Images/arrows/up-arrow.svg" className={this.props.classes.scroll_arrow} />;
                break;
            case "offsets-up-arrow":
                img_ = <img src="/Images/arrows/up-arrow.svg" className={this.props.classes.scroll_arrow} />;
                break;
            case "spans-down-arrow":
                img_ = <img src="/Images/arrows/down-arrow.svg" className={this.props.classes.scroll_arrow} />;
                break;
            case "offsets-down-arrow":
                img_ = <img src="/Images/arrows/down-arrow.svg" className={this.props.classes.scroll_arrow} />
                break;
            default:
                img_ = <div>Error: incorrect class for image of arrow.</div>
        }

        return img_;

    }

    render() {

        return (
            <div className={this.props.class_} onClick={this.props.move}>
                {this.getArrowImg()}
            </div>
        )
    }
}
