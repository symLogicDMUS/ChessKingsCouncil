import React from "react";
import "./Expand.css";

export class Expand extends React.Component {

    constructor(props) {
        super(props);
        this.style = {}
        this.expand = this.expand.bind(this);
        if (this.props.value === "spans")
            this.class_ = "span-expand"
        if (this.props.value === "offsets")
            this.class_ = "offsets-expand"
        if (this.props.value === "color")
            this.class_ = "color-expand"
    }

    expand() {
        this.props.expand(this.props.piece, this.props.color, this.props.value)
    }

    render() {

        return (
                <img src="/Images/expand.svg" onClick={this.expand} className={this.class_} onClick={this.expand}/>
        )
    }
}