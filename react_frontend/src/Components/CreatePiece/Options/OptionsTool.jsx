import React from "react";
import "./Options.css";

export class OptionsTool extends React.Component {

    constructor(props) {
        super(props);
        this.backgroundOn = this.backgroundOn.bind(this);
        this.backgroundOff = this.backgroundOff.bind(this);
    }

    backgroundOn() {
        this.props.togleOptionTool(false);
    }

    backgroundOff() {
        this.props.togleOptionTool(true);
    }

    render() {
        return (
            <div className="options-tool" ></div>
        )
    }
}