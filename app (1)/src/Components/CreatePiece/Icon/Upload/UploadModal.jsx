import React from "react";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import {buttonStyle} from "./IconUploadButtonStyle";
import {image64toCanvasRef} from "./ReusableUtils";
import {CloseIconUpload as CloseButton} from "./CloseIconUpload";
import "./UploadButton.css";
import "./UploadModal.css";


export class UploadModal extends React.Component {

    constructor(props) {
        super(props);
        this.imagePreviewCanvasRef = React.createRef()
        this.fileInputRef = React.createRef()
        this.state = {
            imgSrc: null,
            imgSrcExt: null,
            crop: {
                aspect: 1/1
            },
        }
        this.cropComplete = false;

        this.uploadButtonStyle = JSON.parse(JSON.stringify(buttonStyle))
        this.acceptButtonDisabledStyle = JSON.parse(JSON.stringify(buttonStyle));
        this.acceptButtonEnabledStyle = JSON.parse(JSON.stringify(buttonStyle));

        this.uploadButtonStyle['cursor'] = "pointer";
        this.acceptButtonEnabledStyle['cursor'] = "pointer";
        this.acceptButtonDisabledStyle['cursor'] = "not-allowed";

        this.uploadButtonStyle['left'] = "2%";
        this.acceptButtonDisabledStyle['left'] = "10%";
        this.acceptButtonEnabledStyle['left'] = "10%";

        this.uploadButtonStyle['height'] = "3%";
        this.acceptButtonDisabledStyle['height'] = "4%";
        this.acceptButtonEnabledStyle['height'] = "4%";

        this.uploadButtonStyle['paddingTop'] = "0.38vh";
        this.acceptButtonDisabledStyle['paddingTop'] = "0.6vh";
        this.acceptButtonEnabledStyle['paddingTop'] = "0.6vh";
        
        this.acceptButtonDisabledStyle['color'] = "#a9a9a9";
        this.acceptButtonDisabledStyle['backgroundColor'] = "#4f4f4f";

        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.handleOnCropChange = this.handleOnCropChange.bind(this);
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
        this.handleOnCropComplete = this.handleOnCropComplete.bind(this);
        this.acceptIcon = this.acceptIcon.bind(this);
    }

    fileSelectedHandler(event) {
        this.setState({
            imgSrc: URL.createObjectURL(event.target.files[0])
        });
    }

    handleImageLoaded(image) {
        //console.log(image)
    }

    handleOnCropChange(crop) {
        this.setState({crop:crop})
    }

    handleOnCropComplete(crop, pixelCrop) {
        //console.log(crop, pixelCrop)
        this.cropComplete = true;
        const canvasRef = this.imagePreviewCanvasRef.current;
        const {imgSrc}  = this.state;
        image64toCanvasRef(canvasRef, imgSrc, pixelCrop);
    }

    acceptIcon() {

    }

    render() {

        return (
            <div className={this.showHideClassName}>
                <section className="upload-icon">
                {! this.state.imgSrc && (
                    <>
                        <img src="/Images/image-icon.svg" style={{position: "relative",
                                                                  display:"block", 
                                                                  margin: "auto", 
                                                                  top: "38%",
                                                                  width: "20%"}} />
                    </>
                )}
                {this.state.imgSrc && (
                    <div>
                        <ReactCrop src={this.state.imgSrc}
                                    crop={this.state.crop}
                                    onImageLoaded={this.handleImageLoaded}
                                    onComplete={this.handleOnCropComplete}
                                    onChange={this.handleOnCropChange} />
                        <canvas ref={this.imagePreviewCanvasRef}></canvas>
                        
                    </div>
                )}
                </section>
                <label htmlFor="img-upload" className="icon-button" style={this.uploadButtonStyle}>
                    Upload
                </label>
                <input id="img-upload" type="file" onChange={this.fileSelectedHandler} style={{display: 'none'}}/>
                {! this.cropComplete && (<button style={this.acceptButtonDisabledStyle} >Ok</button>)}
                {this.cropComplete && (<button class="icon-button" onClick={this.acceptIcon} style={this.acceptButtonEnabledStyle}>Ok</button>)}
                <CloseButton closeUpload={this.props.closeUpload} />
            </div>
        );
    }
};