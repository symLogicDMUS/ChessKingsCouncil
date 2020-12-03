import React from "react";
import Button from "@material-ui/core/Button";

export function MuiButton({ className, clickMethod, text, variant, isDisabled }) {

    return (
        <Button variant={variant} className={className} onClick={clickMethod} disabled={isDisabled}>
            {text}
        </Button>
    );
}
