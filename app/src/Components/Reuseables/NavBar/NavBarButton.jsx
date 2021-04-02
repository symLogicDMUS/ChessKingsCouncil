import React, { useState } from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Portal, Typography } from "@material-ui/core";
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
    currentPage,
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
            <Box
                onClick={() => tryRedirect()}
                className={clsx(classes.nav_bar_button, {
                    [classes.normal_color]: !hover,
                    [classes.hover_color]: hover,
                    [classes.column_direction]: ! isRow(),
                    [classes.row_direction]: isRow(),
                })}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Box
                    className={clsx(classes.icon_and_text_area, {
                        [classes.alignCenter]: pageName === "Home",
                        [classes.alignBaseline]: pageName !== "Hone",
                        [classes.margin]: isRow(),
                        [classes.marginRight]: ! isRow(),
                        [classes.marginTop]: ! isRow(),
                        [classes.marginBottom]: ! isRow(),
                    })}
                >
                    <SvgIcon
                        fontVariant="button"
                        className={clsx(classes.icon, {
                            [classes.normal_color]: !hover,
                            [classes.hover_color]: hover,
                            [classes.parent_column_icon]: ! isRow(),
                            [classes.parent_row_icon]: isRow(),
                        })}
                    >
                        {icons[pageIcon]}
                    </SvgIcon>
                    <Typography
                        variant="button"
                        className={clsx(classes.text, {
                            [classes.normal_color]: !hover,
                            [classes.hover_color]: hover,
                            [classes.parent_column_text]: ! isRow(),
                            [classes.parent_row_text]: isRow(),
                        })}
                        noWrap
                    >
                        {pageName}
                    </Typography>
                </Box>
            </Box>
        </>
    );
}
