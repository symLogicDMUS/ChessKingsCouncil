import React, {useState} from "react";
import clsx from "clsx";
import {SettingsModal} from "./SettingsModal";
import SettingsIcon from "@material-ui/icons/Settings";
import {ListItem, ListItemIcon, ListItemText, Portal} from "@material-ui/core";
import {useStyles} from "./NavBarButton.jss";

export function SettingsButton({updateTheme, theme, screenCase, currentPage, children}) {
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
                    [classes.row_direction]: isRow(),
                })}
            >
                <ListItemIcon>
                    <SettingsIcon fontVariant="button" />
                </ListItemIcon>
                <ListItemText
                    variant="button"
                    primary='Settings'
                    noWrap
                >
                    Settings
                </ListItemText>
            </ListItem>
        </>
    )
}