import React from "react";
import {Link} from "react-router-dom";
import {styles} from "./ConfirmRedirect.jss";

export function AcceptRedirect({path, isLocal}) {
    
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