import React, {useState} from "react";
import {IconButton} from "@material-ui/core";
import {MoreVert} from "@material-ui/icons";
import {HelpButton} from "./Help/HelpButton";
import {SettingsButton} from "./SettingsButton";
import SignInOutButton from "../../Home/SignInOutButton";
import {MuiMenuWithCaption} from "../UserInput/MuiMenuWithCaption";
import {originTransform} from "../AppBar/Content/ThreeItemAppBarContent.jss";
import {marginLeftZero, useStyles as useMoreStyles} from "./NavBar.jss";
import { useStyles } from "./NavBarRowMore.jss";


export function NavBarRowMore(props) {
    const classes = useStyles({theme: props.theme});
    const classes2 = useMoreStyles({theme: props.theme});

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    return (
        <>
            <MuiMenuWithCaption
                theme={props.theme}
                open={isMobileMenuOpen}
                anchorEl={mobileMoreAnchorEl}
                onClose={handleMobileMenuClose}
                anchorOrigin={originTransform}
                transformOrigin={originTransform}
            >
                <HelpButton
                    key="Help"
                    pageIcon="help"
                    theme={props.theme}
                    currentPage={props.currentPage}
                    helpTitle={props.helpTitle}
                    screenCase={props.screenCase}
                    updateFirstVisit={props.updateFirstVisit}
                >
                    {props.helpText}
                </HelpButton>
                <SettingsButton
                    key="MuiSettings-Button"
                    theme={props.theme}
                    updateTheme={props.updateTheme}
                    currentPage={props.currentPage}
                    screenCase={props.screenCase}
                >
                    {props.additionalSettings}
                </SettingsButton>
                <SignInOutButton
                    theme={props.theme}
                    style={marginLeftZero}
                    className={classes2.sign_out_button}
                />
            </MuiMenuWithCaption>
            <IconButton onClick={handleMobileMenuOpen} className={classes.icon_button}>
                <MoreVert />
            </IconButton>
        </>
    );
}