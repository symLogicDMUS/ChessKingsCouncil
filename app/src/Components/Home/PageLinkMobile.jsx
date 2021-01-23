import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fontSize0040 as fontSize } from "../styles/fontSizes.jss";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import { icons } from "../styles/icons/top/icons.jss";
import { useStyles } from "./PageLinkMobile.jss";

export function PageLinkMobile({icon, path, pathType, pageName, theme}) {
    let [hover, setHover] = useState();
    const classes = useStyles({ theme: theme, fontSize: fontSize });

    const content = (
        <Box
            className={classes.page_link}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <SvgIcon
                className={
                    hover ? classes.page_icon_hover : classes.page_icon_normal
                }
            >
                {icons[icon]}
            </SvgIcon>
            <Typography
                className={
                    hover ? classes.page_name_hover : classes.page_name_normal
                }
            >
                {pageName}
            </Typography>
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
