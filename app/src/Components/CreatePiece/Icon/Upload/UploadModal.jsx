import React from "react";
import "./UploadButton.css";
import "./UploadModal.css";


export class UploadModal extends React.Component {

    constructor(props) {
        super(props);
        this.showHideClassName = this.props.show ? "upload display-block" : "upload display-none";
        this.closeUpload = this.closeUpload.bind(this);
    }
    
    closeUpload() {
        this.props.closeUpload(this.props.color);
    }

    render() {

        this.showHideClassName = this.props.show ? "upload display-block" : "upload display-none";

        return (
            <div className={this.showHideClassName}>
                <section className="upload-main">
                    <button onClick={this.closeUpload}>close</button>
                </section>
            </div>
        );
    }
};