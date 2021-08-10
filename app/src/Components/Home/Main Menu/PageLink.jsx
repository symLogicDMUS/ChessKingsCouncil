import React, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";
import { icons } from "../../styles/icons/top/icons.jss";
import { useStyles } from "./PageLink.jss";

function PageLink(props) {
    const { path, pathType, theme, children } = props;
    const classes = useStyles({ theme: theme });

    const linkComponent = (
        <motion.div
            className={classes.page_link}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
            {children}
        </motion.div>
    );

    return (
        <>
            {pathType === "local" ? (
                <Link to={path} style={{ textDecoration: "none" }}>
                    {linkComponent}
                </Link>
            ) : (
                <a href={path} style={{ textDecoration: "none" }}>
                    {linkComponent}
                </a>
            )}
        </>
    );
}

export default PageLink;
