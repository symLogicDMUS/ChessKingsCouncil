import React from "react";
import ReactDOM from "react-dom";
import "./InvalidName.css";

export class InvalidName extends React.Component {

    constructor(props) {
        super(props);
        this.class_ = "blank-name-modal visible";
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.class_ === "blank-name-modal visible") {
            this.class_ = "blank-name-modal invisible";
        }
        else {
            this.class_ = "blank-name-modal visible";
        }
        this.props.saveStatus("none")
    }

    render() {
        return (
            <div className={this.class_}>
                <div className="blank-name-box">
                    <div className="blank-name-heading">{this.props.header}</div>
                    <button className="blank-name-button" onClick={this.handleClick}>
                        <div className="ok"><img src={require("./Ok.svg") } style={{maxWidth:"31px"}} /> </div>
                    </button>
                </div>
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<InvalidName />, document.getElementById('root'))