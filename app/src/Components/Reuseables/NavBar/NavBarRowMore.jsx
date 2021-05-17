import React, {useState} from "react";
import {MenuItem} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {MoreVert} from "@material-ui/icons";
import {MuiMenu} from "../UserInput/MuiMenu";
import HelpButton from "./Help/HelpButton";
import SettingsButton from "./SettingsButton";
import SignInOutButton from "../../Home/SignInOutButton";
import {originTransform} from "../AppBar/Content/ThreeItemAppBarContent.jss";
import {buttonFill, marginLeftZero} from "./NavBarRow.jss";
import { useStyles } from "./NavBarRowMore.jss";

function NavBarRowMore(props) {
    const classes = useStyles({theme: props.theme});

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
            <MuiMenu
                theme={props.theme}
                open={isMobileMenuOpen}
                anchorEl={mobileMoreAnchorEl}
                onClose={handleMobileMenuClose}
                anchorOrigin={originTransform}
                transformOrigin={originTransform}
            >
                <MenuItem>
                    <HelpButton
                        key="Help"
                        pageIcon="help"
                        isRow={true}
                        theme={props.theme}
                        helpTitle={props.helpTitle}
                        style={buttonFill(props.theme)}
                        screenCase={props.screenCase}
                        currentPage={props.currentPage}
                        updateFirstVisit={props.updateFirstVisit}
                    >
                        {props.helpText}
                    </HelpButton>
                </MenuItem>
                <MenuItem>
                    <SettingsButton
                        isRow={true}
                        theme={props.theme}
                        key="MuiSettings-Button"
                        className={classes.button}
                        style={buttonFill(props.theme)}
                        updateTheme={props.updateTheme}
                        currentPage={props.currentPage}
                        screenCase={props.screenCase}
                    >
                        {props.additionalSettings}
                    </SettingsButton>
                </MenuItem>
                <MenuItem>
                    <SignInOutButton
                        theme={props.theme}
                        className={classes.button}
                        style={{...marginLeftZero, ...buttonFill(props.theme)}}
                    />
                </MenuItem>
            </MuiMenu>
            <IconButton onClick={handleMobileMenuOpen} className={classes.icon_button}>
                <MoreVert />
            </IconButton>
        </>
    );
}

export default NavBarRowMore;