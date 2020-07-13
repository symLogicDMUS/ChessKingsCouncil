import React from "react";
import ReactDOM from "react-dom";
import "./ConfirmOverwrite.css";

export class ConfirmOverwrite extends React.Component {

    constructor(props) {
        super(props)
        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
    }

    accept() {
        this.props.respond("yes");
    }

    reject() {
        this.props.respond("no");
    }

    render() {
        return(

            <div className="confirm-box">
                <img src={require("./confirmLabel1.svg")} className="label1" />
                <div className="piece-name">"{this.props.name}"</div>
                <img src={require("./confirmLabel2.svg")} className="label2" />
                <div className="yes-button" onClick={this.accept}>
                    <img className="yes" src={require("./Yes.svg")} />
                </div>
                <div className="no-button" onClick={this.reject}>
                    <img className="no" src={require("./No.svg")} />
                </div>
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<ConfirmOverwrite />, document.getElementById('root'));