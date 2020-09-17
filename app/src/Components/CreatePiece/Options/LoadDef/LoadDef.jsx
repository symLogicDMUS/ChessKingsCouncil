import React from "react";
import "../Options.css";

export class LoadDef extends React.Component {

    constructor(props) {
        super(props);
        this.state = {highlighted: false};
        this.src = this.props.normal;
        this.name = "Load";
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.openLoadModal = this.openLoadModal.bind(this);
    }

    openLoadModal() {
        this.props.togleLoadModal(true);
    }

    hoverOn() {
        this.props.togleOptionTool(false);
        this.setState({highlighted: true});
    }

    hoverOff() {
        this.props.togleOptionTool(true);
        this.setState({highlighted: false});
    }

    render() {

        if (this.state.highlighted)
            this.src = this.props.highlighted
        else
            this.src = this.props.normal

        return (
            <div className="option load-option" onClick={this.openLoadModal} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <img src={this.src} style={{position:"absolute", width:49, height:68}} alt="Icon for loading piece" />
            </div>
        );
    }
}