import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Button, Portal, Typography } from "@material-ui/core";
import { icons } from "../../styles/icons/top/icons.jss";
import { MuiButton } from "../Clickables/MuiButton";
import { StandardModal } from "../Modals/StandardModal";
import { useStyles as useMoreStyles } from "../Modals/StandardModal.jss";
import { useStyles } from "./NavBarButton.jss";

export function NavBarButton({
    path,
    pageName,
    pageIcon,
    screenCase,
    isLocalLink,
    isUnsavedChanges,
    theme,
}) {
    const history = useHistory();
    const [hover, setHover] = useState(false);
    const [redirectModal, toggleRedirectModal] = useState(false);

    const classes = useStyles({
        theme: theme,
        screenCase: screenCase,
    });
    const classes2 = useMoreStyles({ theme });

    const goToPage = () => {
        if (isLocalLink) {
            history.push(path);
        } else window.location.href = path;
    };

    const tryRedirect = () => {
        if (isUnsavedChanges !== undefined && isUnsavedChanges()) {
            toggleRedirectModal(true);
        } else {
            goToPage();
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
                            classProp={classes2.button}
                            addedClassProp={classes2.yes_button}
                            variant={"contained"}
                            theme={theme}
                        >
                            Yes
                        </MuiButton>
                        <MuiButton
                            onClick={() => toggleRedirectModal(false)}
                            classProp={classes2.button}
                            addedClassProp={classes2.no_button}
                            variant={"contained"}
                            theme={theme}
                        >
                            No
                        </MuiButton>
                    </StandardModal>
                </Portal>
            ) : null}
            <Button
                onClick={() => tryRedirect()}
                className={clsx(classes.nav_bar_button, {
                    [classes.normal_color]: ! hover,
                    [classes.hover_color]: hover,
                })}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Box className={classes.box}>
                    <SvgIcon
                        className={clsx(classes.icon, {
                            [classes.normal_color]: !hover,
                            [classes.hover_color]: hover,
                        })}
                    >
                        {icons[pageIcon]}
                    </SvgIcon>
                    <Typography
                        className={clsx(classes.text, {
                            [classes.normal_color]: !hover,
                            [classes.hover_color]: hover,
                        })}
                        noWrap
                    >
                        {pageName}
                    </Typography>
                </Box>
            </Button>
        </>
    );
}
