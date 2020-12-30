import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { Button, Portal } from "@material-ui/core";
import { icons } from "../styles/icons/top/icons.jss";
import SvgIcon from "@material-ui/core/SvgIcon";
import Box from "@material-ui/core/Box";
import { useStyles } from "./NavBarButton.jss";
import { ConfirmModal } from "./ConfirmModal";

export function NavBarButton({
    path,
    pageName,
    pageIcon,
    theme,
    style,
    parentFlex,
    isLocalLink,
    unsavedChanges,
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

    let onClick = () => goToPage();
    if (unsavedChanges) {
        onClick = () => toggleRedirectModal(true)
    }
    
    return (
        <>
            {redirectModal ? (
                <Portal>
                    <ConfirmModal
                        yesClick={() => goToPage()}
                        noClick={() => toggleRedirectModal(false)}
                        closeClick={() => toggleRedirectModal(false)}
                        theme={theme}
                        title={null}
                        text="If you leave this page you will loose your progress. Are you sure you want to continue ?"
                    />
                </Portal>
            ) : null}
            <Button
                onClick={onClick}
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
