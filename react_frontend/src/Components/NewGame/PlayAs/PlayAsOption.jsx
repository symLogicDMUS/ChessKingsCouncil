import React from "react";
import "./PlayAsOption.css";
import {getColorNameLc} from "../../helpers/getColorNameLc";

export class PlayAsOption extends React.Component {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    update() {
        this.props.update(this.props.optionName)
    }

    getCheckmark() {
        if (this.props.selected === this.props.optionName)
            return <img src="/Images/checkmark.svg" style={{position:"absolute", width:48, height:48}} alt="a checkmark" />
        else
            return null;
    }

    render() {

        let optionText = null;
        if (this.props.optionName === "test")
            optionText = "test"
        else
            optionText = getColorNameLc(this.props.optionName)

        return (
            <div className="play-as-option" style={{top:this.props.top}}>
                <div className="play-as-option-checkebox" onClick={this.update}>
                    {this.getCheckmark()}
                </div>
                <div className="play-as-option-name">
                    <img src={`/Images/${optionText}.svg`} style={{position:"absolute", left:68, top:10, height:48}} alt="title for checkbox" />
                </div>
            </div>
        )

    }
}