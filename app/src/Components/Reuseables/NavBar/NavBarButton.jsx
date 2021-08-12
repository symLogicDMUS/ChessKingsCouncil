import React, { useState } from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";
import { MuiButton } from "../Clickables/MuiButton";
import { StandardModal } from "../Modals/StandardModal";
import { icons } from "../../styles/icons/top/icons.jss";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Portal,
} from "@material-ui/core";
import { useStyles as useMoreStyles } from "../Modals/StandardModal.jss";
import { useStyles } from "./NavBarButton.jss";

function NavBarButton(props) {
    const {
        path,
        pageName,
        pageIcon,
        screenCase,
        isLocalLink,
        isUnsavedChanges,
        theme,
    } = props;

    const history = useHistory();
    const [redirectModal, toggleRedirectModal] = useState(false);

    const classes = useStyles({ theme: theme, screenCase: screenCase });
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
                            className={clsx(classes2.button, {
                                [classes2.yes_button]: true,
                            })}
                            variant={"contained"}
                            theme={theme}
                        >
                            Yes
                        </MuiButton>
                        <MuiButton
                            onClick={() => toggleRedirectModal(false)}
                            className={clsx(classes2.button, {
                                [classes2.no_button]: true,
                            })}
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
                className={classes.nav_bar_button}
            >
                <ListItemIcon>
                    <SvgIcon>{icons[pageIcon]}</SvgIcon>
                </ListItemIcon>
                <ListItemText primary={pageName}>{pageName}</ListItemText>
            </ListItem>
        </>
    );
}
export default NavBarButton;
