import React from "react";
import ReactDOM from "react-dom";
import {UploadModal} from "./Upload/UploadModal";
import {ChooseModal} from "./Choose/ChooseModal";
import {ChooseButton} from "./Choose/ChooseButton";
import {UploadButton} from "./Upload/UploadButton";
import {HelpComponent} from "../../Help/HelpComponent";
import {HelpText} from "./HelpText";
import "./Icon.css"


export class Icon extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {upload: false, choose: false};
        this.showChoose = this.showChoose.bind(this);
        this.closeChoose = this.closeChoose.bind(this);
        this.showUpload = this.showUpload.bind(this);
        this.closeUpload = this.closeUpload.bind(this);
    }

    showChoose(color) {
        this.color = color;
        this.setState({choose: true});
    }

    closeChoose() {
        this.setState({choose: false});
    }

    showUpload(color) {
        this.color = color;
        this.setState({upload: true})
    }
    
    closeUpload() {
        this.setState({upload: false});
    }

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
                    <UploadButton showUpload={this.showUpload} color="white" />
                    <UploadButton showUpload={this.showUpload} color="black" />
                    <ChooseButton showChoose={this.showChoose} color="white" />
                    <ChooseButton showChoose={this.showChoose} color="black" />

                    <div className="white-window">
                        <div>{this.props.pieceImg['white']}</div>
                    </div>
                    <div className="black-window">
                        <div>{this.props.pieceImg['black']}</div>
                    </div>

                </div>

                {/*Modals close themselves using parent method prop*/}
                <UploadModal show={this.state.upload} hideUpload={this.closeUpload} color={this.color} />
                <ChooseModal show={this.state.choose} closeChoose={this.closeChoose} setImg={this.props.setImg} color={this.color} setUnsaved={this.props.setUnsaved} />
            </>
            
        );
    }
}

export let test = () => ReactDOM.render(<Icon />, document.getElementById('root'))