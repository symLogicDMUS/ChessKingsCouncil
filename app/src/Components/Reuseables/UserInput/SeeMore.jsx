import React, {useState} from "react";
import {MuiMenu} from "./MuiMenu";
import {originTransform} from "../AppBar/ThreeItemAppBar.jss";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./SeeMore.jss";

export function SeeMore({theme, icon, children}) {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const classes = useStyles({theme});

    return (
        <>
            <MuiMenu
                theme={theme}
                open={isMobileMenuOpen}
                anchorEl={mobileMoreAnchorEl}
                onClose={handleMobileMenuClose}
                anchorOrigin={originTransform}
                transformOrigin={originTransform}
            >
                {children}
            </MuiMenu>
            <div className={classes.seeMore}>
                <IconButton onClick={handleMobileMenuOpen}>
                    {icon ? (icon) : (
                        <MoreIcon className={classes.icon} />
                    )}
                </IconButton>
            </div>
        </>
    );
}