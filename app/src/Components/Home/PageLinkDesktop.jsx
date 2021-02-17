import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import { icons } from "../styles/icons/top/icons.jss";
import {useStyles} from "./PageLinkDesktop.jss";

export function PageLinkDesktop({ icon, path, pathType, pageName, theme}) {
    let [hover, setHover] = useState(false);
    const classes = useStyles({ theme: theme });

    const linkComponent = (
        <Box className={classes.page_link}
            onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
        >
            <SvgIcon className={hover ? classes.icon_hover : classes.icon_normal}>{icons[icon]}</SvgIcon>
            <img
                src={`/Images/text/main menu/desktop/${theme}/${hover ? 'hover' : 'normal'}/${pageName}.svg`}
                className={classes.page_name}
            />
        </Box>
    );
    if (pathType === "local") {
        return (
            <Link to={path} style={{ textDecoration: "none" }}>
                {linkComponent}
            </Link>
        );
    } else {
        return <a href={path} style={{ textDecoration: "none" }}>{linkComponent}</a>;
    }
}
