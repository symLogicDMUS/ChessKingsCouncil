import React from "react";
import {Link} from "react-router-dom";
import {isHref} from "../helpers/isHref";
import "./ConfirmRedirect.scss";

export function AcceptRedirect({path}) {
    
    if (isHref(path)) {
        return (
            <a href={path}>
                <div className="accept-button">
                    Yes
                </div>
            </a>
        )
    }

    else {
        return (
            <Link to={path}>
                <div className="accept-button">
                    Yes
                </div>
            </Link>
        )
    }
}