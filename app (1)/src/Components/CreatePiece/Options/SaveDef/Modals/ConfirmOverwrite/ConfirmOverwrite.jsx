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
                <div className="label1">A piece named</div>
                <div className="piece-name">"{this.props.name}"</div>
                <div className="label2">already exists. do you want to replace it?</div>
                <div className="yes-button" onClick={this.accept}>Yes</div>
                <div className="no-button" onClick={this.reject}>No</div>
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<ConfirmOverwrite />, document.getElementById('root'));