import React from "react";
import ReactDOM from "react-dom";
import "./InvalidName.css";

export class InvalidName extends React.Component {

    constructor(props) {
        super(props);
        this.class_ = "invalid-name-modal visible";
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.class_ === "invalid-name-modal visible") {
            this.class_ = "invalid-name-modal invisible";
        }
        else {
            this.class_ = "invalid-name-modal visible";
        }
        this.props.setSaveStatus("none")
    }

    render() {
        return (
            <div className={this.class_}>
                <div className="invalid-name-window">
                    <div className="invalid-name-heading">{this.props.header}</div>
                    <button className="invalid-name-button" onClick={this.handleClick}>
                        Ok
                    </button>
                </div>
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<InvalidName />, document.getElementById('root'))