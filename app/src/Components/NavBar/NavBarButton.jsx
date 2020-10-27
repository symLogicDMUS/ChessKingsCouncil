import React from "react";
import { Redirect } from "react-router-dom";
import { getIconColor } from "./getIconColor";
import "./NavBar.scss";

export class NavBarButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false };
        this.select = this.select.bind(this);
        this.unselect = this.unselect.bind(this);
        this.goToLocalPage = this.goToLocalPage.bind(this);
        this.goToExtenernalPage = this.goToExtenernalPage.bind(this);
    }

    unselect() {
        this.setState({ selected: false });
    }

    select() {
        this.setState({ selected: true });
    }

    getComponent(clickMethod) {
        return (
            <div
                className={this.props.classes.button}
                onClick={clickMethod}
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

    goToExtenernalPage() {
        return (window.location.href = this.props.path);
    }

    goToLocalPage() {
        return (
            <Redirect
                to={{
                    pathname: this.props.path,
                    state: {
                        currentPath: this.props.path,
                        gameName: JSON.parse(JSON.stringify(this.state.gameName)),
                        gameType: JSON.parse(JSON.stringify(this.gameData["type"])),
                        playerType: JSON.parse(JSON.stringify(this.gameData["pt"])),
                        gameData: JSON.parse(JSON.stringify(this.gameData)),
                    },
                }}
            />
        );
    }

    render() {
        if (this.props.unsaved) {
            return this.getComponent(() =>
                this.props.togleConfirmRedirect(true, this.props.path, this.props.isLocalLink)
            );
        } else {
            if (this.props.localLink) return this.getComponent(this.goToLocalPage);
            else return this.getComponent(this.goToExtenernalPage);
        }
    }
}
