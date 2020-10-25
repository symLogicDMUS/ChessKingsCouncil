import React from "react";
import {Link} from "react-router-dom";
import "../Options.scss";

export class Theme extends React.Component {

    constructor(props) {
        super(props);
        this.state = {highlighted: false};
        this.src = this.props.normal;
        this.name = "Theme";
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
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
            this.src = this.props.highlighted;
        else
            this.src = this.props.normal;

        return (
            <Link to="/ComingSoon">
                <div className="option theme-option" onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                    <img src={this.src} className="option-img" alt="icon for changing theme of page" />
                </div>
            </Link>
        )
    }
}