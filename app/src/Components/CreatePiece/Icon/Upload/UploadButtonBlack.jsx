import React from "react";
import {saveImg} from "../../../../API/saveImg";
import "./UploadButton.scss";


export class UploadButtonBlack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: true}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const files = event.target.files;
        const currentFile = files[0];
        var imgName = currentFile.name.replace(".", "-");
        const myFileItemReader = new FileReader();

        myFileItemReader.addEventListener(
            "load", 
            () => {
                const imgStr = myFileItemReader.result;
                this.props.setUnsaved(true);
                saveImg(imgName, imgStr).then( ([res]) => {
                    this.props.setPieceImg("black", imgStr);
                })
            },
            false
        );

        myFileItemReader.readAsDataURL(currentFile);
    }

    render() {

            return(
                <div>
                    <label htmlFor="choose-img" className="black-upload">
                        Upload...
                    </label>
                    <input id="choose-img" type="file" onChange={this.handleChange} style={{display: "none"}} />
                </div>
            )
    }
}