import React from "react";
import { Redirect } from "react-router-dom";
import { modalWindow } from "../styles/modal-window1-components/modal-window-size-pos";
import { getYesNoButtonStyle } from "../styles/modal-window1-components/yes-no-buttons";
import "./ConfirmRedirect.scss";


export class ConfirmRedirect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: "none" };
        this.buttonSizePos = getYesNoButtonStyle(modalWindow);
        this.goToPage = this.goToPage.bind(this);
        this.cancelRedirect = this.cancelRedirect.bind(this);
    }

    goToPage(redirectType) {
        this.setState({ redirect: redirectType });
    }

    cancelRedirect() {
        this.setState({ redirect: "none" });
        this.props.togleConfirmRedirect(false, null, false);
    }

    render() {
        if (this.state.redirect === "local") {
            return (window.location.href = this.props.path);
        }

        if (this.state.redirect === "external") {
            return (
                <Redirect
                    to={{
                        pathname: this.props.path,
                        state: {
                            currentPath: this.props.path,
                        },
                    }}
                />
            );
        }

        const redirectType = this.props.localLink ? "local" : "external";

        return (
            <div className="confirm-redirect" style={modalWindow}>
                <img src="/Images/close/close.svg" className="confirm-redirect-close" onClick={this.cancelRedirect} />
                <div className="confirm-redirect-title">{this.props.message}</div>
                <button
                    className="confirm-redirect-accept-button"
                    style={this.buttonSizePos.yes}
                    onClick={() => this.goToPage(redirectType)}
                >
                    Yes
                </button>
                <button
                    className="confirm-redirect-reject-button"
                    style={this.buttonSizePos.no}
                    onClick={this.cancelRedirect}
                >
                    No
                </button>
            </div>
        );
    }
}
