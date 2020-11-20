import React from "react";
import { saveImg } from "../../../../API/saveImg";
import "./_UploadButtonBlack.scss";

export class UploadButtonBlack extends React.Component {
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
                this.props.setUnsavedChanges(true);
                saveImg(imgName, imgStr).then(([res]) => {
                    this.props.setPieceImg("black", imgStr);
                });
            },
            false
        );

        myFileItemReader.readAsDataURL(currentFile);
    }

    render() {
        return (
            <div>
                <label htmlFor="choose-img" className="black-upload">
                    <p className="icon-button-text">Upload...</p>
                </label>
                <input id="choose-img" type="file" onChange={this.handleChange} style={{ display: "none" }} />
            </div>
        );
    }
}
