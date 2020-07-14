import React from "react";
import {Link} from "react-router-dom";

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
            <Link to="/ComingSoon">
                <button className={`${this.props.color}-upload`} onClick={this.showUpload}>
                    Upload...
                </button>        
            </Link>
        )
    }
}