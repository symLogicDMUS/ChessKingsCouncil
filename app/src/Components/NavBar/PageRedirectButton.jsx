import React from "react";
import { Link } from "react-router-dom";
import { getIconColor } from "./getIconColor";
import "./NavBar.scss";

export class PageRedirectButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false };
        this.select = this.select.bind(this);
        this.unselect = this.unselect.bind(this);
    }
    
    getComponent() {
        return (
            <div className={this.props.classes.button} onMouseEnter={this.select} onMouseLeave={this.unselect}>
                <div className={this.props.classes["icon-container"]}>
                    <img
                        src={`/Images/Navbar/${this.props.pageIcon}-invert-${getIconColor(this.props.theme)}.svg`}
                        // style={getPageIconStyle()}
                        className="nav-bar-icon-style"
                        alt=""
                    />
                </div>
                <div className={this.props.classes.text}>{this.props.pageName}</div>
            </div>
        );
    }

    getLink() {
        return (
            <Link to={this.props.path} style={{ textDecoration: "none", zIndex: this.props.z }}>
                {this.getComponent()}
            </Link>
        );
    }

    getHref() {
        return (
            <a href={this.props.path} style={{ textDecoration: "none",  zIndex: this.props.z }}>
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
