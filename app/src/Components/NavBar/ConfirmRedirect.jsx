import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmRedirect.scss";

export function ConfirmRedirect({ path, message, togleConfirmRedirect, isLocalLink}) {
    return (
        <div>
            <img
                src="/Images/close/close.svg"
                className="close"
                onClick={() => togleConfirmRedirect(false, null, false)}
            />
            <div className="text">{message}</div>
            {isLocalLink && (
                <Link to={path}>
                    <div className="accept-button">Yes</div>
                </Link>
            )}
            {!isLocalLink && (
                <a href={path}>
                    <div className="accept-button">Yes</div>
                </a>
            )}
            <div className="reject-button" onClick={() => togleConfirmRedirect(false, null, false)}>
                No
            </div>
        </div>
    );
}
