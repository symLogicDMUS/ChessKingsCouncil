import React from "react";
import ReactDOM from "react-dom";
import "./InvalidName.scss";

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
            <div className="invalid-name">
                <img src="/Images/close/close.svg" className="msg-modal-close" onClick={this.handleClick} />
                <div className="text">{this.props.header}</div>
                <div className="ok-button" onClick={this.handleClick}>
                    Ok
                </div>
            </div>            
        )
    }
}

export let test = () => ReactDOM.render(<InvalidName />, document.getElementById('root'))