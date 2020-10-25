import React from "react";
import { DisplayBoard } from "./DisplayBoard";
import { getColorName } from "../../helpers/getColorName";
import "./DisplayBoardModal.scss";

export class DisplayBoardModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { src: "/Images/close/close.svg" };
        this.close = this.close.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }

    getStyle() {
        /**
         * height: 380px;
         * width: 320px;
         */
        return {
            width: window.screen.availWidth * 0.208,
            left: window.screen.availWidth * 0.208,
            height: window.screen.availHeight * 0.504,
            top: window.screen.availHeight * 0.504,
        };
    }

    close() {
        this.props.expand(null, null, null);
    }

    hoverOn() {
        this.setState({ src: "/Images/close/close-0cc.svg" });
    }

    hoverOff() {
        this.setState({ src: "/Images/close/close.svg" });
    }

    render() {
        return (
            <div className="pieces-display-board-modal">
                <div className="pieces-display-board-window" style={this.getStyle()}>
                    <div className="pieces-display-board-header-title">
                        {getColorName(this.props.color)} {this.props.pieceName} {this.props.rangeType}
                    </div>
                    <div
                        className="pieces-display-board-header-close"
                        onClick={this.close}
                        onMouseEnter={this.hoverOn}
                        onMouseLeave={this.hoverOff}
                    >
                        <img
                            src={this.state.src}
                            style={{ position: "absolute", width: "70%", height: "70%", marginTop: "15%" }}
                            alt="close display board window"
                        />
                    </div>
                    <DisplayBoard
                        def={this.props.def}
                        color={this.props.color}
                        rangeType={this.props.rangeType}
                        pieceName={this.props.pieceName}
                        location={this.props.location}
                    />
                </div>
            </div>
        );
    }
}
