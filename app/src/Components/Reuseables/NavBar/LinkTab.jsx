import Tab from "@material-ui/core/Tab";
import React from "react";

export function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}