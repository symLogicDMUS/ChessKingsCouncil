import React from "react";

export class UploadButton extends React.Component {
    constructor(props) {
        super(props);
        this.showUpload = this.showUpload.bind(this);
    }

    showUpload() {
        this.props.showUpload(this.props.color)
    }

    render() {
        return(
            <button className={`${this.props.color}-upload`} onClick={this.showUpload}>
                <img src={require("./Upload.svg")} style={{textAlign: "center", left:"21px", top:"7px"}} />
            </button>
        )
    }
}