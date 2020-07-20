import React, { Component } from "react";
import {imgNames} from "../../../MyPieces/imgNames";
import {ImgChoice} from "./ImgChoice.jsx";
import {Ok} from "./IconChooseOk";
import "./ChooseModal.css";

export class ChooseModal  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {choice: null};
        this.closeChoose = this.closeChoose.bind(this);
        this.setChoice = this.setChoice.bind(this);
        this.submitChoice = this.submitChoice.bind(this);
        this.showHideClassName = this.props.show ? "choose-modal display-block" : "choose display-none";
    }
    
    closeChoose() {
        this.props.closeChoose(this.props.color);
    }
    
    setChoice(choice) {
        if (this.state.choice === choice)
            this.setState({choice: null})
        else
            this.setState({choice: choice})
    }

    submitChoice() {
        this.props.setImg(this.props.color, this.state.choice)
    }

    getImages() {
        let imgPrevs = []
        imgNames.forEach(name => {imgPrevs.push(<ImgChoice name={name} choice={this.state.choice} setChoice={this.setChoice} />)})
        return imgPrevs;
    }

    render() {

        this.showHideClassName = this.props.show ? "choose-modal display-block" : "choose display-none";
        
        return (
            <div className={this.showHideClassName}>
                <div className="choose-main">
                    <div className="close" onClick={this.closeChoose}>
                        <img src="/Images/close.svg" className="x"/>
                    </div>
                    <div className="title-div">
                        <img src={require("./title.svg")} className="title" />
                    </div>
                    <div className="pieces-profiles">
                        {this.getImages()}
                    </div>
                    <div className="bottom-bar">
                        <Ok choice={this.state.choice} submitChoice={this.submitChoice} closeChoose={this.closeChoose} />
                    </div>
                </div>                
            </div>
        );    
    }
};