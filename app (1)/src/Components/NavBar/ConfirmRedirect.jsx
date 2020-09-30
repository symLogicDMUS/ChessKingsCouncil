import React from "react";
import {AcceptRedirect} from "./AcceptRedirect";
import "./ConfirmRedirect.css";

export class ConfirmRedirect extends React.Component {

    constructor(props) {
        super(props);
        this.closeConfirmRedirect = this.closeConfirmRedirect.bind(this);
    }

    closeConfirmRedirect() {
        this.props.setConfirmRedirect(false, null);
    }

    render() {
        return (
            <div className="confirm-redirect" onClick={this.closeConfirmRedirect}>
                <div className="close-confirm-redirect">
                    <img src="/Images/close.svg" alt="exit button" style={{width:12, height:12}} />    
                </div>
                <div className="confirm-redirect-text-label">
                    {this.props.message}
                </div>
                <AcceptRedirect path={this.props.path} />
                <div className="reject-redirect" onClick={this.closeConfirmRedirect}>
                    No
                </div>
            </div>
        )
    }
}