import React from "react";
import "./ImgChoice.css";

export class ImgChoice extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {imgClass: "image"}
        this.imgHover = this.imgHover.bind(this);
        this.imgNormal = this.imgNormal.bind(this);
        this.setChoice = this.setChoice.bind(this);
    }

    setChoice() {
        this.props.setChoice(this.props.name);
    }

    imgHover() {
        this.setState({imgClass: "image-hover"})
    }

    imgNormal() {
        this.setState({imgClass: "image"})
    }

    render() {

        let class_ = "profile"
        if (this.props.name === this.props.choice)
            class_ = "selected-profile";

        return(
            <div className={class_} onClick={this.setChoice}>
                <img src={`/Images/Pieces/${this.props.name}`} 
                     className={this.state.imgClass}
                     onMouseEnter={this.imgHover}
                     onMouseLeave={this.imgNormal}
                     alt="list of icons that can be used as pieces" />
                <br />
                {this.props.name}
            </div>
        );
    }

}