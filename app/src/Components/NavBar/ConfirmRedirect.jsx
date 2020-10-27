import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmRedirect.scss";

export function ConfirmRedirect({ path, message, togleConfirmRedirect, isLocalLink}) {
    return (
        <div className="confirm-redirect">
            <img
                src="/Images/close/close.svg"
                className="confirm-redirect-close"
                onClick={() => togleConfirmRedirect(false, null, false)}
            />
            <div className="confirm-redirect-text">{message}</div>
            {isLocalLink && (
                <Link to={path}>
                    <div className="confirm-redirect-accept-button">Yes</div>
                </Link>
            )}
            {!isLocalLink && (
                <a href={path}>
                    <div className="confirm-redirect-accept-button">Yes</div>
                </a>
            )}
            <div className="confirm-redirect-reject-button" onClick={() => togleConfirmRedirect(false, null, false)}>
                No
            </div>
        </div>
    );
}
