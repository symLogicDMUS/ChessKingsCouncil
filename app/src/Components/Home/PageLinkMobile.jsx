import React, {useEffect, useState} from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import { icons } from "../styles/icons/top/icons.jss";
import {useStyles as useMoreStyles} from "./PageLinkDesktop.jss";
import { useStyles } from "./PageLinkMobile.jss";

export function PageLinkMobile({icon, path, pathType, pageName, theme}) {
    const [hover, setHover] = useState(false);
    const [bValue, reRender] = useState(false);

    useEffect(() => {
        function handleResize() {
            reRender(! bValue)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const classes = useStyles({ theme: theme});
    const classes2 = useMoreStyles({theme: theme})

    const content = (
        <Box
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={classes.page_link}
        >
            <SvgIcon
                className={clsx(classes.page_icon, {
                    [classes2.normal_color]: !hover,
                    [classes2.hover_color]: hover,
                })}
            >
                {icons[icon]}
            </SvgIcon>
            <img
                src={
                    hover ? `/Images/text/main menu/mobile/${theme}/hover/${pageName}.svg`
                        : `/Images/text/main menu/mobile/${theme}/normal/${pageName}.svg`
                }
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
