import React from "react"
import "./ChooseButton.css";

export class ChooseButton extends React.Component {

    constructor(props) {
        super(props)
        this.showChooseModal = this.showChooseModal.bind(this);
    }

    showChooseModal() {
        this.props.showChooseModal(this.props.color);
    }

    render() {
        return(
            <button className={`${this.props.color}-choose`} onClick={this.showChooseModal}>
                Choose...
            </button>
        );
    }
}