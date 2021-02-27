import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import {SettingsModal} from "./SettingsModal";
import SettingsIcon from "@material-ui/icons/Settings";
import {Button, Portal, Typography} from "@material-ui/core";
import {getHoverColor, useStyles} from "./NavBarButton.jss";

export function SettingsButton({currentPage, updateTheme, theme, screenCase, children}) {
    const [hover, setHover] = useState(false);
    const [settingsModal, toggleSettingsModal] = useState(false);

    const classes = useStyles({
        theme: theme,
        currentPage: currentPage,
        screenCase: screenCase
    });

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
            <Button
                onClick={toggleSettingsModal}
                className={classes.nav_bar_button}
                style={hover ? getHoverColor(theme) : null}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Box className={classes.box}>
                    <SettingsIcon className={hover ? classes.icon_hover : classes.icon} />
                    <Typography className={hover ? classes.text_hover : classes.text} noWrap>
                        Settings
                    </Typography>
                </Box>
            </Button>
        </>
    )
}