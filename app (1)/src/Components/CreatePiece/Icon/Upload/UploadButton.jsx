import React from "react";
import {Link} from "react-router-dom";
import "./UploadButton.css";


export class UploadButton extends React.Component {
    constructor(props) {
        super(props);
        this.showUpload = this.showUpload.bind(this);
    }

    showUpload() {
        this.props.showUpload(this.props.color)
    }

    render() {
        return (
                <button className={`${this.props.color}-upload`} onClick={this.showUpload}>
                    Upload...
                </button>        
        )
    }
}