import React from "react";
import { Redirect } from "react-router-dom";
import { modalWindow } from "../styles/modal-window1-components/modal-window-size-pos";
import { stylesObjects } from "./Help/HelpStyle";
import {styles} from "./ConfirmRedirect.jss";


export class ConfirmRedirect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: "none" };
        this.goToPage = this.goToPage.bind(this);
        this.cancelRedirect = this.cancelRedirect.bind(this);
    }

    goToPage(redirectType) {
        this.setState({ redirect: redirectType });
    }

    cancelRedirect() {
        this.setState({ redirect: "none" });
        this.props.toggleConfirmRedirect(false, null, false);
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
            <div className="confirm-redirect" style={stylesObjects[this.props.screenCase]['Modal']()}>
                <img src="/Images/close/close.svg" className="confirm-redirect-close" onClick={this.cancelRedirect} />
                <div className="confirm-redirect-title">{this.props.message}</div>
                <button
                    className="confirm-redirect-accept-button"
                    style={stylesObjects[this.props.screenCase]['YesNoButton'](stylesObjects[this.props.screenCase]['Modal']()).yes}
                    onClick={() => this.goToPage(redirectType)}
                >
                    Yes
                </button>
                <button
                    className="confirm-redirect-reject-button"
                    style={stylesObjects[this.props.screenCase]['YesNoButton'](stylesObjects[this.props.screenCase]['Modal']()).no}
                    onClick={this.cancelRedirect}
                >
                    No
                </button>
            </div>
        );
    }
}
