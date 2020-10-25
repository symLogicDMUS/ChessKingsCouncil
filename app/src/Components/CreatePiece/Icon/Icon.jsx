import React from "react";
import ReactDOM from "react-dom";
import {ChooseButton} from "./Choose/ChooseButton";
import {UploadButtonWhite} from "./Upload/UploadButtonWhite";
import {UploadButtonBlack} from "./Upload/UploadButtonBlack";
import "./Icon.scss"


export class Icon extends React.Component {

    getStyle() {
        return {
            top: window.screen.availHeight * 0.288,
            width: window.screen.availWidth * 0.26,
            height: window.screen.availHeight * 0.18,
            left: window.screen.availWidth * 0.57
        };
    }

    render() {
        return(
            <>
                <div className="icon-tool" style={this.getStyle()}>

                    <div className="icon-title">Icon</div>
                    <div className="white-title" >White</div>
                    <div className="black-title" >Black</div>

                    <UploadButtonBlack setPieceImg={this.props.setPieceImg} 
                                  setUnsaved={this.props.setUnsaved} 
                                  color="black" 
                                  currentIconColor={this.props.currentIconColor} 
                                  setCurrentIconColor={this.props.setCurrentIconColor} 
                    />
                    <UploadButtonWhite setPieceImg={this.props.setPieceImg} 
                                       setUnsaved={this.props.setUnsaved} 
                                       color="white" 
                                       currentIconColor={this.props.currentIconColor} 
                                       setCurrentIconColor={this.props.setCurrentIconColor} 
                    />
                    <ChooseButton showChooseModal={this.props.showChooseModal} color="white" />
                    <ChooseButton showChooseModal={this.props.showChooseModal} color="black" />
                    
                    <div className="white-window">
                        {this.props.pieceImg['white'] ? <img src={this.props.pieceImg['white']} width="100%" height="100%"  /> : null}
                    </div>
                    <div className="black-window">
                        {this.props.pieceImg['black'] ? <img src={this.props.pieceImg['black']} width="100%" height="100%"  /> : null}
                    </div>

                </div>
            </>
        );
    }
}

export let test = () => ReactDOM.render(<Icon />, document.getElementById('root'))