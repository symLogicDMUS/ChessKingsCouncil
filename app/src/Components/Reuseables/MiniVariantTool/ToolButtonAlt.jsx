import React from "react";
import clsx from "clsx";
import SvgIcon from "@material-ui/core/SvgIcon";
import { icons } from "../../styles/icons/top/icons.jss";
import { containsDescenders } from "../../helpers/containsDescender";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useStyles } from "./ToolButton.jss";

function ToolButtonAlt({
    updateParent,
    clientX,
    clientY,
    isActive,
    name,
    iconName,
    text,
    theme,
    children,
}) {
    const classes = useStyles({ theme });

    const onClick = (e) => {
        if (clientX && clientY) {
            updateParent(name, clientX, clientY);
        } else if (clientX) {
            updateParent(name, clientX, e.clientY);
        } else if (clientY) {
            updateParent(name, e.clientX, clientY);
        } else {
            updateParent(name, e.clientX, e.clientY);
        }
    };

    return (
        <ListItem button onClick={onClick}>
            <ListItemIcon>
                {iconName ? (
                    <SvgIcon
                        className={clsx(classes.icon, {
                            [classes.active_color]: isActive,
                            [classes.inactive_color]: !isActive,
                        })}
                    >
                        {icons[iconName]}
                    </SvgIcon>
                ) : (
                    children
                )}
            </ListItemIcon>
            <ListItemText
                primary={text}
                className={clsx(classes.text, {
                    [classes.active_color]: isActive,
                    [classes.inactive_color]: !isActive,
                    [classes.non_descender]: !containsDescenders(text),
                })}
            />
        </ListItem>
    );
}

export default ToolButtonAlt;