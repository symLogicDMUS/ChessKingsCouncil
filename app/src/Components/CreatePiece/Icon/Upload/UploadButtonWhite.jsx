import React from "react";
import "./UploadButton.css";


export class UploadButtonWhite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: true}
        this.imgStr = null;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const files = event.target.files;
        const currentFile = files[0];
        const myFileItemReader = new FileReader();

        myFileItemReader.addEventListener(
            "load", 
            () => {
                const imgStr = myFileItemReader.result;
                this.props.setUnsaved(true);
                this.props.setPieceImg("white", imgStr);
            }, 
            false
        );

        myFileItemReader.readAsDataURL(currentFile);
    }

    render() {

            return(
                <div>
                    <label htmlFor="choose-img2" className="white-upload">
                        Upload...
                    </label>
                    <input id="choose-img2" type="file" onChange={this.handleChange} style={{display: "none"}} />
                </div>
            )
    }
}