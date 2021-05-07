import React, { useState } from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";
import { MuiButton } from "../Clickables/MuiButton";
import { StandardModal } from "../Modals/StandardModal";
import { icons } from "../../styles/icons/top/icons.jss";
import {ListItem, ListItemIcon, ListItemText, Portal} from "@material-ui/core";
import { useStyles as useMoreStyles } from "../Modals/StandardModal.jss";
import { useStyles } from "./NavBarButton.jss";

export function NavBarButton({
    path,
    pageName,
    pageIcon,
    screenCase,
    isLocalLink,
    isUnsavedChanges,
    currentPage,
    theme,
    touch,
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

    const isRow = () => {
        return (
            screenCase === "wide" &&
            (currentPage === "NewGame" ||
                currentPage === "LoadGame" ||
                currentPage === "MyPieces" ||
                currentPage === "CouncilRules")
        );
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
                            className={classes2.button}
                            addedClassName={classes2.yes_button}
                            variant={"contained"}
                            theme={theme}
                        >
                            Yes
                        </MuiButton>
                        <MuiButton
                            onClick={() => toggleRedirectModal(false)}
                            className={classes2.button}
                            addedClassName={classes2.no_button}
                            variant={"contained"}
                            theme={theme}
                        >
                            No
                        </MuiButton>
                    </StandardModal>
                </Portal>
            ) : null}
            <ListItem
                button
                onClick={() => tryRedirect()}
                className={clsx(classes.nav_bar_button, {
                    [classes.hover_color]: hover,
                    [classes.normal_color]: !hover && !touch,
                    [classes.row_direction]: isRow(),
                })}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <ListItemIcon
                    className={clsx(null, {
                        [classes.hover_color]: hover,
                        [classes.touch_color]: touch,
                        [classes.normal_color]: !hover && !touch,
                    })}
                >
                    <SvgIcon
                        fontVariant="button"
                    >
                        {icons[pageIcon]}
                    </SvgIcon>
                </ListItemIcon>
                <ListItemText
                    variant="button"
                    primary={pageName}
                    className={clsx(null, {
                        [classes.normal_color]: !hover && !touch,
                        [classes.hover_color]: hover,
                        [classes.touch_color]: touch,
                        [classes.row_direction]: isRow(),
                    })}
                    noWrap
                >
                    {pageName}
                </ListItemText>
            </ListItem>
        </>
    );
}
