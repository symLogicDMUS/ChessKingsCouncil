import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import {Button, Portal, Typography} from "@material-ui/core";
import { icons } from "../../styles/icons/top/icons.jss";
import {MuiButton} from "../MuiButton";
import {button} from "../StandardModal.jss";
import { StandardModal } from "../StandardModal";
import {fontSize002} from "../../styles/fontSizes.jss";
import {getHoverColor, useStyles} from "./NavBarButton.jss";

export function NavBarButton({
    path,
    pageName,
    pageIcon,
    currentPage,
    screenCase,
    isLocalLink,
    isUnsavedChanges,
    theme,
}) {
    let history = useHistory();
    let [hover, setHover] = useState(false);
    let [redirectModal, toggleRedirectModal] = useState(false);

    const classes = useStyles({
        theme: theme,
        currentPage: currentPage,
        screenCase: screenCase
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
                            style={button(fontSize002)}
                            variant={'contained'}
                            theme={theme}
                        >
                            Yes
                        </MuiButton>
                        <MuiButton
                            onClick={() => toggleRedirectModal(false)}
                            style={button(fontSize002)}
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
                style={hover ? getHoverColor(theme) : null}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Box className={classes.box}>
                    <SvgIcon className={hover ? classes.icon_hover : classes.icon}
                    >
                        {icons[pageIcon]}
                    </SvgIcon>
                    <Typography className={hover ? classes.text_hover : classes.text} noWrap>
                        {pageName}
                    </Typography>
                </Box>
            </Button>
        </>
    );
}