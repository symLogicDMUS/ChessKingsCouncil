import React from "react"
import "./Tool.css";

export class ChooseButton extends React.Component {

    constructor(props) {
        super(props)
        this.showChoose = this.showChoose.bind(this);
    }

    showChoose() {
        this.props.showChoose(this.props.color)
    }

    render() {
        return(
            <button className={`${this.props.color}-choose`} onClick={this.showChoose}>
                <img src={require("./Choose.svg")} style={{textAlign: "center", left:"21px", top:"7px"}} />
            </button>
        );
    }
}