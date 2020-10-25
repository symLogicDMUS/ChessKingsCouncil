import React from "react";
import "./NameLabel.scss";

export class NameLabel extends React.Component {

    getStyle() {
        return {
            left: window.screen.availWidth * 0.17,
            top: window.screen.availHeight * 0.14,
            width: window.screen.availWidth * 0.39,
            height: window.screen.availHeight * 0.037
        }
    }

    render() {
        return (
            <div className="name-label" style={this.getStyle()}>
                {this.props.name}
            </div>
        )
    }
}
