import React from "react"
import "./ChooseButton.css";

export class ChooseButton extends React.Component {

    render() {
        return(
            <button className={`${this.props.color}-choose`} onClick={this.props.showChooseModal}>
                Choose...
            </button>
        );
    }
}