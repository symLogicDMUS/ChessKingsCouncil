import React, {useState} from "react";
import clsx from "clsx";
import {SettingsModal} from "./SettingsModal";
import SettingsIcon from "@material-ui/icons/Settings";
import {ListItem, ListItemIcon, ListItemText, Portal} from "@material-ui/core";
import {useStyles} from "./NavBarButton.jss";

export function SettingsButton({updateTheme, theme, screenCase, currentPage, touch, children}) {
    const [hover, setHover] = useState(false);
    const [settingsModal, toggleSettingsModal] = useState(false);

    const classes = useStyles({
        theme: theme,
        screenCase: screenCase,
    });

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
            {settingsModal ? (
                <Portal>
                    <SettingsModal
                        theme={theme}
                        updateTheme={updateTheme}
                        closeModal={() => toggleSettingsModal(false)}
                    >
                        {children}
                    </SettingsModal>
                </Portal>
            ) : null}
            <ListItem
                button
                onClick={toggleSettingsModal}
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
                    <SettingsIcon fontVariant="button" />
                </ListItemIcon>
                <ListItemText
                    variant="button"
                    primary='Settings'
                    className={clsx(null, {
                        [classes.normal_color]: !hover && !touch,
                        [classes.hover_color]: hover,
                        [classes.touch_color]: touch,
                    })}
                    noWrap
                >
                    Settings
                </ListItemText>
            </ListItem>
        </>
    )
}