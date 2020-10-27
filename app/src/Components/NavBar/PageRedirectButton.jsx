import React from "react";
import { Link } from "react-router-dom";
import { getPageIconStyle } from "./styles";
import { getIconColor } from "./getIconColor";
// import "./NavBar.scss";

export class PageRedirectButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false };
        this.select = this.select.bind(this);
        this.unselect = this.unselect.bind(this);
    }

    getComponent() {
        return (
            <div style={this.props.styles["button"]} onMouseEnter={this.select} onMouseLeave={this.unselect}>
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

    render() {
        if (this.props.localLink) return this.getLink();
        else return this.getHref();
    }
}
