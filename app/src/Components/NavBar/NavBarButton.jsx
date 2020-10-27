import React from "react";
import { getIconColor } from "./getIconColor";
import "./NavBar.scss";

export class NavBarButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false };
        this.select = this.select.bind(this);
        this.unselect = this.unselect.bind(this);
    }

    unselect() {
        this.setState({ selected: false });
    }

    select() {
        this.setState({ selected: true });
    }

    render() {
        return (
            <div
                className={this.props.classes.button}
                onClick={() => this.props.togleConfirmRedirect(true, this.props.path, this.props.isLocalLink)}
                onMouseEnter={this.select}
                onMouseLeave={this.unselect}
            >
                <div className={this.props.classes["icon-container"]}>
                    <img
                        src={`/Images/Navbar/${this.props.pageIcon}-invert-${getIconColor(this.props.theme)}.svg`}
                        className="nav-bar-icon-style"
                        alt=""
                    />
                </div>
                <div className={this.props.classes.text}>{this.props.pageName}</div>
            </div>
        );
    }
}
