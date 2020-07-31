import React from "react"
import "./ChooseButton.css";

export class ChooseButton extends React.Component {

    constructor(props) {
        super(props);
        this.showChoose = this.showChoose.bind(this);
    }

    showChoose() {
        this.props.showChoose(this.props.color);
    }

    render() {
        return(
            <button className={`${this.props.color}-choose`} onClick={this.showChoose}>
                Choose...
            </button>
        );
    }
}