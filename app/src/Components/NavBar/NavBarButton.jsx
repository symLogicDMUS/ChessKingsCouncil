import React from "react";
import { Link } from "react-router-dom";
import { getPageIconStyle } from "./styles";
import { getIconColor } from "./getIconColor";
// import "./NavBar.scss";

export class NavBarButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false };
        this.helpText = "You are already on this page. Go to home page and follow the link from there to start over.";
        this.pageLink = null;
        this.select = this.select.bind(this);
        this.unselect = this.unselect.bind(this);
        this.checkDest = this.checkDest.bind(this);
    }

    getComponent() {
        return (
            <div
                style={this.props.styles["button"]}
                onMouseEnter={this.select}
                onMouseLeave={this.unselect}
                onClick={this.checkDest}
            >
                <div style={this.props.styles["icon-container"]}>
                    <img
                        src={`/Images/Navbar/${this.props.pageIcon}-invert-${getIconColor(this.props.theme)}.svg`}
                        style={getPageIconStyle()}
                        alt=""
                    />
                </div>
                <div style={this.props.styles["text"]}>{this.props.pageName}</div>
            </div>
        );
    }

    getLink() {
        return (
            <Link to={this.props.path} style={{ textDecoration: "none" }}>
                {this.getComponent()}
            </Link>
        );
    }

    getHref() {
        return (
            <a href={this.props.path} style={{ textDecoration: "none" }}>
                {this.getComponent()}
            </a>
        );
    }

    unselect() {
        this.setState({ selected: false });
    }

    select() {
        this.setState({ selected: true });
    }

    checkDest() {
        if (this.props.path === this.props.currentPath) {
            this.props.setHelpText("", this.helpText, "none");
            this.props.togleMessageModal(true);
        } else if (this.props.unsavedProgress) {
            this.props.setConfirmRedirect(true, this.path);
        }
    }

    render() {
        if (this.props.unsavedProgress) {
            return this.getComponent();
        } else if (this.props.localLink) {
            return this.getLink();
        } else {
            return this.getHref();
        }
    }
}
