import React from "react";
import "./CustomiseOk.css";

export class Ok extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="new-game-accept-customization" onClick={this.props.accept}>
                Ok
            </button>
        )
    }
}