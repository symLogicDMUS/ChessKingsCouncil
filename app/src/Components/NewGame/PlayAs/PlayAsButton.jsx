import React from "react";
import "./PlayAsButton.css";

export class PlayAsButton extends React.Component {

    constructor(props) {
        super(props);
        this.class_ = "play-as-button pab-inactive";
        this.accept = this.accept.bind(this);
    }

    accept() {
        if (this.props.selected != null)
            this.props.accept();
    }

    render() {

        if (this.props.selected != null)
            this.class_ = "play-as-button pab-active";
        else
            this.class_ = "play-as-button pab-inactive";

        return (
            <div className={this.class_} onClick={this.accept}>
                Play
            </div>
        )
    }
}