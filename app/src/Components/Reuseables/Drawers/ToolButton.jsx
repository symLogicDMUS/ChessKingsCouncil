import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

export function ToolButton({text, children}) {
    return (
        <ListItem button>
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
}