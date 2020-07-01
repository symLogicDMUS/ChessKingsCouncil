import React from "react";
import "./NameLabel.css";

export class NameLabel extends React.Component {
    render() {
        return (
            <div className="name-label">
                {this.props.name}
            </div>
        )
    }
}
