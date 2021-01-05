import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Portal } from "@material-ui/core";
import { icons } from "../../styles/icons/top/icons.jss";
import SvgIcon from "@material-ui/core/SvgIcon";
import Box from "@material-ui/core/Box";
import { useStyles } from "./NavBarButton.jss";
import { StandardModal } from "../StandardModal";
import {MuiButton} from "../MuiButton";
import {fontSize} from "../../styles/fontSize.jss";
import {button} from "../StandardModal.jss";

export function NavBarButton({
    path,
    pageName,
    pageIcon,
    theme,
    style,
    parentFlex,
    isLocalLink,
    isUnsavedChanges,
}) {
    let history = useHistory();
    let [hover, setHover] = useState(false);
    let [redirectModal, toggleRedirectModal] = useState(false);

    const classes = useStyles({
        theme: theme,
        style: style,
        parentFlex: parentFlex,
    });

    const goToPage = () => {
        if (isLocalLink) {
            history.push(path);
        } else window.location.href = path;
    };

    const tryRedirect = () => {
        if (isUnsavedChanges !== undefined && isUnsavedChanges()) {
            toggleRedirectModal(true)
        }
        else {
            goToPage()
        }
    };

    return (
        <>
            {redirectModal ? (
                <Portal>
                    <StandardModal
                        title={null}
                        text="If you leave this page you will loose your progress. Are you sure you want to continue ?"
                        closeClick={() => toggleRedirectModal(false)}
                        theme={theme}
                    >
                        <MuiButton
                            onClick={() => goToPage()}
                            style={button(fontSize)}
                            variant={'contained'}
                            theme={theme}
                        >
                            Yes
                        </MuiButton>
                        <MuiButton
                            onClick={() => toggleRedirectModal(false)}
                            style={button(fontSize)}
                            variant={'contained'}
                            theme={theme}
                        >
                            No
                        </MuiButton>
                    </StandardModal>
                </Portal>
            ) : null}
            <Button
                onClick={() => tryRedirect()}
                className={classes.nav_bar_button}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Box className={classes.box}>
                    <SvgIcon
                        className={hover ? classes.icon_hover : classes.icon}
                    >
                        {icons[pageIcon]}
                    </SvgIcon>
                    <div className={hover ? classes.text_hover : classes.text}>
                        {pageName}
                    </div>
                </Box>
            </Button>
        </>
    );
}