import React, { useState } from "react";
import clsx from "clsx";
import { SettingsModal } from "./SettingsModal";
import SettingsIcon from "@material-ui/icons/Settings";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Portal,
} from "@material-ui/core";
import { useStyles } from "./NavBarButton.jss";

function SettingsButton(props) {
    const {
        currentPage,
        isRow,
        screenCase,
        className,
        theme,
        children,
        ...other
    } = props;

    const [settingsModal, toggleSettingsModal] = useState(false);

    const classes = useStyles({
        theme: theme,
        screenCase: screenCase,
    });

    return (
        <>
            {settingsModal ? (
                <Portal>
                    <SettingsModal
                        theme={theme}
                        currentPage={currentPage}
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
                    [classes.row_direction]: isRow,
                    [className]: className,
                })}
                {...other}
            >
                <ListItemIcon>
                    <SettingsIcon fontVariant="button" />
                </ListItemIcon>
                <ListItemText variant="button" primary="Settings" noWrap>
                    Settings
                </ListItemText>
            </ListItem>
        </>
    );
}

export default SettingsButton;
