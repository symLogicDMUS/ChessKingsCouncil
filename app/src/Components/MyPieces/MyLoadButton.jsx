import React from "react";
import {getButtonSize} from "../styles/button/button-size";
import "./MyLoadButton.scss";

export class MyLoadButton extends React.Component {

    constructor(props) {
        super(props);
        this.load = this.load.bind(this);
    }

    load() {
        this.props.load(this.props.pieceName);
    }

    render() {
        return (
            <div className="my-load-button" style={getButtonSize(window.screen.availHeight * 0.02)} onClick={this.load}>
                Load
            </div>
        )
    }
}