import React from "react";
import "./IconChooseOk.css";

export class Ok extends React.Component {
    
    constructor(props) {
        super(props);
        this.class_ = "ok-inactive";
        this.submitChoice = this.submitChoice.bind(this);
    }

    submitChoice() {
        if (this.class_ === "ok-active") {
            this.props.submitChoice();
            this.props.closeChoose();    
        }
    }
    
    render() {

        this.class_ = "ok-inactive"
        if (this.props.imgNameChoice != null)
            this.class_ = "ok-active";

        return(
            <button className={this.class_} onClick={this.submitChoice}>
                Ok
            </button>
        )
    }
}