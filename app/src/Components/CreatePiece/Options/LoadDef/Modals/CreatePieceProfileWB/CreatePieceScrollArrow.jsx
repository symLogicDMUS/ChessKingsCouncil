import React from "react";
import "./CreatePieceScrollArrow.css";

export class CreatePieceScrollArrow extends React.Component {

    constructor(props) {
        super(props);
    }

    getArrowImg() {

        let img_ = null;
        switch(this.props.class_) {
            case "create-piece-spans-up-arrow":
                img_ = <img src="/Images/up-arrow.svg" className="scroll-arrow" />;
                break;
            case "create-piece-offsets-up-arrow":
                img_ = <img src="/Images/up-arrow.svg" className="scroll-arrow" />;
                break;
            case "create-piece-spans-down-arrow":
                img_ = <img src="/Images/down-arrow.svg" className="scroll-arrow" />;
                break;
            case "create-piece-offsets-down-arrow":
                img_ = <img src="/Images/down-arrow.svg" className="scroll-arrow" />
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
