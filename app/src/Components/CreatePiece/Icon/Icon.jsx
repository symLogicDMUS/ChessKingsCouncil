import React from "react";
import ReactDOM from "react-dom";
import { ChooseButton } from "./Choose/ChooseButton";
import { UploadButtonWhite } from "./Upload/UploadButtonWhite";
import { UploadButtonBlack } from "./Upload/UploadButtonBlack";
import { stylesObjects } from "../create-piece-styles-objects";
import {styles} from "./_Icon.jss";

export class Icon extends React.Component {
    render() {
        return (
            <>
                <div className="icon-tool" style={stylesObjects[this.props.screenCase]["Icon"]()}>
                    <div className="icon-title">Icon</div>
                    <div className="white-title">White</div>
                    <div className="black-title">Black</div>
                    <UploadButtonWhite
                        color="white"
                        setPieceImg={this.props.setPieceImg}
                        currentIconColor={this.props.currentIconColor}
                        setCurrentIconColor={this.props.setCurrentIconColor}
                    />
                    <UploadButtonBlack
                        color="black"
                        setPieceImg={this.props.setPieceImg}
                        currentIconColor={this.props.currentIconColor}
                        setCurrentIconColor={this.props.setCurrentIconColor}
                    />
                    <ChooseButton showChooseModal={this.props.showChooseModal} color="white" />
                    <ChooseButton showChooseModal={this.props.showChooseModal} color="black" />
                    <div className="white-window">
                        {this.props.pieceImg["white"] ? (
                            <img src={this.props.pieceImg["white"]} width="100%" height="100%" />
                        ) : null}
                    </div>
                    <div className="black-window">
                        {this.props.pieceImg["black"] ? (
                            <img src={this.props.pieceImg["black"]} width="100%" height="100%" />
                        ) : null}
                    </div>
                </div>
            </>
        );
    }
}

export let test = () => ReactDOM.render(<Icon />, document.getElementById("root"));
