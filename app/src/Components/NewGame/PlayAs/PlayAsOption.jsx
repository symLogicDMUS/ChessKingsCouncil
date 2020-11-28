import React from "react";
import {styles} from "./PlayAsOption.jss";
import {getColorNameLc} from "../../helpers/getColorNameLc";

class PlayAsOption extends React.Component {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    update() {
        this.props.update(this.props.optionName)
    }

    getCheckmark() {
        if (this.props.selected === this.props.optionName)
            return <img src="/Images/checkmark/checkmark.svg" style={{position:"absolute", width:48, height:48}} alt="a checkmark" />
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
            <div className={this.props.classes.play_as_option} style={{top:this.props.top}}>
                <div className={this.props.classes.play_as_option_checkebox} onClick={this.update}>
                    {this.getCheckmark()}
                </div>
                <div className={this.props.classes.play_as_option_name}>
                    <img src={`/Images/text-labels/${optionText}.svg`} style={{position:"absolute", left:68, top:10, height:48}} alt="title for checkbox" />
                </div>
            </div>
        )

    }
}