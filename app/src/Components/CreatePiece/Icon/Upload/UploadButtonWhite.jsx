import React from "react";
import { saveImg } from "../../../../API/saveImg";
import "./UploadButton.scss";

export class UploadButtonWhite extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bValue: true };
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
                saveImg(imgName, imgStr).then(([res]) => {
                    this.props.setPieceImg("white", imgStr);
                });
            },
            false
        );

        myFileItemReader.readAsDataURL(currentFile);
    }

    render() {
        return (
            <div>
                <label htmlFor="choose-img2" className="white-upload">
                    <p className="icon-button-text">Upload...</p>
                </label>
                <input id="choose-img2" type="file" onChange={this.handleChange} style={{ display: "none" }} />
            </div>
        );
    }
}
