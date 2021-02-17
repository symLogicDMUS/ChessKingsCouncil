import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import { icons } from "../styles/icons/top/icons.jss";
import { useStyles } from "./PageLinkMobile.jss";

export function PageLinkMobile({icon, path, pathType, pageName, theme, style, iconStyle}) {
    let [hover, setHover] = useState();
    const classes = useStyles({ theme: theme});

    const content = (
        <Box
            className={classes.page_link}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={style}
        >
            <SvgIcon
                className={
                    hover ? classes.page_icon_hover : classes.page_icon_normal
                }
                style={iconStyle}
            >
                {icons[icon]}
            </SvgIcon>
            <img
                src={`/Images/text/main menu/mobile/${theme}/${hover ? 'hover' : 'normal'}/${pageName}.svg`}
                className={classes.page_name}
            />
        </Box>
    );

    if (pathType === "local") {
        return (
            <Link to={path} style={{ textDecoration: "none" }}>
                {content}
            </Link>
        );
    } else {
        return <a href={path} style={{ textDecoration: "none" }}>{content}</a>;
    }
}
