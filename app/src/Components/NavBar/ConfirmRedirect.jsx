import React from "react";
import { AcceptRedirect } from "./AcceptRedirect";
import "./ConfirmRedirect.scss";

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
                <img src="/Images/close/close.svg" className="close" onClick={this.props.close} />
                <div className="text">{this.props.message}</div>
                <AcceptRedirect path={this.props.path} />
                <div className="reject-button" onClick={this.closeConfirmRedirect}>
                    No
                </div>
            </div>
        );
    }
}
