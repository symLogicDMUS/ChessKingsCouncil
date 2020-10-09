import React from "react";
import "./ImgChoice.css";

export class ImgChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 150, height: 150 };
        this.setChoice = this.setChoice.bind(this);
        this.growImg = this.growImg.bind(this);
        this.shrinkImg = this.shrinkImg.bind(this);
    }

    setChoice() {
        this.props.setChoice(this.props.name);
    }

    growImg() {
        this.setState({ width: 170, height: 170 });
    }

    shrinkImg() {
        this.setState({ width: 160, height: 160 });
    }

    render() {
        let class_ = "profile";
        if (this.props.name === this.props.imgNameChoice) class_ = "selected-profile";

        return (
            <div className={class_} onClick={this.setChoice}>
                <div style={{ position: "relative", top: "175px" }}>{this.props.name}</div>
                <img
                    src={this.props.base64ImgStr}
                    className="choose-icon-image"
                    style={{
                        zIndex: 2,
                        position: "relative",
                        top:"-12px",
                        width: this.state.width,
                        height: this.state.height,
                    }}
                    onMouseEnter={this.growImg}
                    onMouseLeave={this.shrinkImg}
                    alt="list of icons that can be used as pieces"
                />
            </div>
        );
    }
}
