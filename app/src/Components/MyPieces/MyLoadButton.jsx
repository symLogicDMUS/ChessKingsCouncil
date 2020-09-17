import React from "react";
import "./MyLoadButton.css";

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
            <div className="my-load-button" onClick={this.load}>
                Load
            </div>
        )
    }
}