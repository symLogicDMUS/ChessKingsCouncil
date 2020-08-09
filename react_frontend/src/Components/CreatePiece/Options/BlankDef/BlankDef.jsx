import React from "react";
import "../Options.css";

export class BlankDef extends React.Component {

    constructor(props) {
        super(props);
        this.state = {highlighted: false};
        this.src = this.props.normal;
        this.name = "Erase";
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.clear = this.clear.bind(this);
    }

    hoverOn() {
        this.props.togleOptionTool(false);
        this.setState({highlighted: true});
    }

    hoverOff() {
        this.props.togleOptionTool(true);
        this.setState({highlighted: false});
    }

    clear() {
        this.props.setUnsaved(true);
        this.props.clear();
    }

    render() {

        if (this.state.highlighted)
            this.src = this.props.highlighted
        else
            this.src = this.props.normal

        return (
            <div className="option blank-option" onClick={this.clear} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <img src={this.src} style={{position:"absolute", width:49, height:68}} alt="Icon when clicked erases features added to piece" />
            </div>
        );
    }
}