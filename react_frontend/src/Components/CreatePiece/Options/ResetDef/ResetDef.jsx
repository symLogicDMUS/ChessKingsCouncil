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
    }
    
    hoverOn() {
        this.setState({highlighted: true});
    }

    hoverOff() {
        this.setState({highlighted: false});
    }

    render() {

        if (this.state.highlighted)
        this.src = this.props.highlighted
        else
            this.src = this.props.normal

        return (
            <div className="option reset-option" onClick={this.props.reset} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <img src={this.src} style={{position:"absolute", width:49, height:68}} />
            </div>
        );
    }

}