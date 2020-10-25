import React from "react";
import "./IconChooseOk.scss";

export class Ok extends React.Component {
    constructor(props) {
        super(props);
        this.class_ = "ok-inactive";
        this.submitChoice = this.submitChoice.bind(this);
    }

    submitChoice() {
        this.props.submitChoice();
        this.props.closeChoose();
    }

    render() {
        if (this.props.imgNameChoice) {
            return (
                <button className="ok-active" onClick={this.submitChoice}>
                    Ok
                </button>
            );
        } else {
            return (
                <button className="ok-inactive">
                    Ok
                </button>
            );
        }
    }
}
