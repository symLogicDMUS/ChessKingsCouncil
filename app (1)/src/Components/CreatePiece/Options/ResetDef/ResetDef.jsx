import React from "react"
import "../Options.css";

export class ResetDef extends React.Component {

    constructor(props) {
        super(props);
        this.state = {highlighted: false};
        this.src = this.props.normal;
        this.name = "Reset";
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.reset = this.reset.bind(this);
    }
    
    hoverOn() {
        this.props.togleOptionTool(false);
        this.setState({highlighted: true});
    }

    hoverOff() {
        this.props.togleOptionTool(true);
        this.setState({highlighted: false});
    }

    reset() {
        this.props.setUnsaved(true);
        this.props.reset()
    }

    render() {

        if (this.state.highlighted)
        this.src = this.props.highlighted
        else
            this.src = this.props.normal

        return (
            <div className="option reset-option" onClick={this.reset} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <img src={this.src} style={{position:"absolute", width:49, height:68}} alt="icon to reset piece ranges/icon" />
            </div>
        );
    }

}