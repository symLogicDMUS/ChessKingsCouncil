import React from "react";
import "./CreatePiece.css";


export class MySquare extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.id_
        this.state = {jumpElement: false};
        this.style = {backgroundColor: this.props.class_};
        this.toglejumpElement = this.toglejumpElement.bind(this);
    }

    toglejumpElement() {
        if (this.style.backgroundColor  === this.props.class_)
            this.style.backgroundColor = "red";
        else
            this.style.backgroundColor = this.props.class_
        this.props.togleJump(this.id)
    }

    render() {

        // span element overwrites onClick if true
        if (this.props.spanElement) {
            this.style = {backgroundColor: "purple"}
        }

        return(
            <div className={this.props.class_} onClick={this.toglejumpElement} style={this.style}>
                {this.props.children}
            </div>
        );
        
    }
}