import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { fontSize } from "../styles/fontSize.jss";
import { icons } from "../styles/icons/top/icons.jss";
import { useStyles } from "./PageLink.jss";

export function PageLink({ icon, path, pathType, line1, line2, theme}) {
    let [hover, setHover] = useState(false);
    const classes = useStyles({ theme: theme, fontSize: fontSize });
    const linkComponent = (
        <Box className={classes.page_link}
            onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
        >
            <SvgIcon className={hover ? classes.icon_hover : classes.icon_normal}>{icons[icon]}</SvgIcon>
            <Typography className={hover ? classes.page_name_hover : classes.page_name_normal}>{line1}</Typography>
            <Typography className={hover ? classes.page_name_hover : classes.page_name_normal}>{line2}</Typography>
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
