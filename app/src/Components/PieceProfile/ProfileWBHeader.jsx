import React from "react";
import { getColorName } from "../helpers/getColorName";
import "./ProfileWBHeader.scss";

export class ProfileWBHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { src: "/Images/expand/expand.svg" };
        this.expand = this.expand.bind(this);
        this.color = getColorName(this.props.color);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }

    expand() {
        this.props.expand(this.props.pieceName, this.props.color, this.props.rangeType);
    }
    hoverOn() {
        this.setState({ src: "/Images/expand/expand-0cc.svg" });
    }

    hoverOff() {
        this.setState({ src: "/Images/expand/expand.svg" });
    }

    render() {
        return (
            <div className={this.props.class_}>
                <div className="wb-piece-name">
                    {this.color} {this.props.rangeType}
                </div>
                <div
                    class_="expand-modal"
                    onClick={this.expand}
                    onMouseEnter={this.hoverOn}
                    onMouseLeave={this.hoverOff}
                >
                    <img
                        className="expand-modal-icon"
                        src={this.state.src}
                        alt="expand icon"
                    />
                </div>
            </div>
        );
    }
}
