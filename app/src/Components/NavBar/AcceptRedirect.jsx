import React from "react";
import {Link} from "react-router-dom";
import {useStyles} from "./ConfirmRedirect.jss";

export function AcceptRedirect({path, isLocal}) {
    const classes = useStyles()
    if (isHref(path)) {
        return (
            <a href={path}>
                <div className={this.props.classes.accept_button}>
                    Yes
                </div>
            </a>
        )
    }

    else {
        return (
            <Link to={path}>
                <div className={this.props.classes.accept_button}>
                    Yes
                </div>
            </Link>
        )
    }
}