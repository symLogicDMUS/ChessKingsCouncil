import React from "react";
import "./ImgChoice.css";

export class ImgChoice extends React.Component {
    
    constructor(props) {
        super(props);
        this.setChoice = this.setChoice.bind(this);
    }

    setChoice() {
        this.props.setChoice(this.props.name);
    }

    render() {

        let class_ = "profile"
        if (this.props.name === this.props.choice)
            class_ = "selected-profile";

        return(
            <div className={class_} onClick={this.setChoice}>
                <img src={`/Images/Pieces/${this.props.name}`} className="image" alt="list of icons that can be used as pieces" />
                <br />
                {this.props.name}
            </div>
        );
    }

}