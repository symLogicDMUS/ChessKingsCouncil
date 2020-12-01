import React from "react";
import { useHistory } from "react-router-dom";
import { ConfirmModal } from "./ConfirmModal";

export function ConfirmRedirect({ path, toggleConfirmRedirect, messageText, isLocalLink }) {
    let history = useHistory();

    const goToPage = () => {
        if (isLocalLink) history.push(path);
        else window.location.href = path;
    };
    return (
        <ConfirmModal
            title={null}
            text={messageText}
            yesClick={() => goToPage()}
            noClick={() => toggleConfirmRedirect(false, null, false)}
            closeClick={() => toggleConfirmRedirect(false, null, false)}
        />
    );
}
