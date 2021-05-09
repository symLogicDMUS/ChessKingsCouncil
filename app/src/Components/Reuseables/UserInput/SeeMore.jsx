import React, { useState } from "react";
import clsx from "clsx";
import { MuiMenu } from "./MuiMenu";
import {originTransform, originTransform2} from
        "../AppBar/Content/ThreeItemAppBarContent.jss";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { useStyles } from "./SeeMore.jss";

export function SeeMore({ theme, icon, className, style, edge, listItem, text, children }) {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const classes = useStyles({ theme });

    return (
        <>
            <MuiMenu
                theme={theme}
                open={isMobileMenuOpen}
                anchorEl={mobileMoreAnchorEl}
                onClose={handleMobileMenuClose}
                anchorOrigin={listItem ? originTransform2 : originTransform}
                transformOrigin={listItem ? originTransform2 : originTransform}
            >
                {children}
            </MuiMenu>
            {listItem ? (
                <ListItem button onClick={handleMobileMenuOpen} className={className}>
                    <ListItemIcon onClick={handleMobileMenuOpen}>
                        {icon ? icon : <MoreIcon className={classes.icon} />}
                    </ListItemIcon>
                    <ListItemText className={classes.icon}>
                        {text}
                    </ListItemText>
                </ListItem>
            ) : (
                <div
                    className={clsx(classes.seeMore, {
                        [className]: className,
                    })}
                    style={style}
                >
                    <IconButton onClick={handleMobileMenuOpen} edge={edge} >
                        {icon ? icon : <MoreIcon className={classes.icon} />}
                    </IconButton>
                </div>
            )}
        </>
    );
}
