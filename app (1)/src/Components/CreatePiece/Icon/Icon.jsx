import React from "react";
import ReactDOM from "react-dom";
import {ChooseButton} from "./Choose/ChooseButton";
import {UploadButton} from "./Upload/UploadButton";
import {HelpComponent} from "../../Help/HelpComponent";
import {HelpText} from "./HelpText";
import "./Icon.css"


export class Icon extends React.Component {
    
    render() {
        return(
            <>
                <div className="icon-tool">

                    <div className="icon-title">Icon</div>
                    <div className="white-title" >White</div>
                    <div className="black-title" >Black</div>

                    <HelpComponent helpTitle="Picking an Icon for Your Piece"
                                   hmChildName="none"
                                   helpText={HelpText}
                                   togleHelpModal={this.props.togleHelpModal} 
                                   setHelpText={this.props.setHelpText} 
                                   style={{left:51, top:16, zIndex:"inherit", width:10, height:10}}
                                   normal="/Images/question-mark-a9a9a9.svg"
                                   highlighted="/Images/question-mark-72e2ff.svg"
                                   color="#72e2ff"                               
                    />

                    {/*Buttons open Modals*/}
                    <UploadButton showUpload={this.props.showUpload} color="white" />
                    <UploadButton showUpload={this.props.showUpload} color="black" />
                    <ChooseButton showChoose={this.props.showChoose} color="white" />
                    <ChooseButton showChoose={this.props.showChoose} color="black" />

                    <div className="white-window">
                        <div>{this.props.pieceImg['white']}</div>
                    </div>
                    <div className="black-window">
                        <div>{this.props.pieceImg['black']}</div>
                    </div>

                </div>

            </>
            
        );
    }
}

export let test = () => ReactDOM.render(<Icon />, document.getElementById('root'))