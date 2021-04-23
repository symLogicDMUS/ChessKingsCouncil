import React, {useState} from "react";
import {Portal, Typography} from "@material-ui/core";
import {SettingsModal} from "./SettingsModal";
import Box from "@material-ui/core/Box";
import SettingsIcon from "@material-ui/icons/Settings";
import { useStyles } from "./NavBarButtonAlt.jss";

export function SettingsButtonAlt({theme, updateTheme, children}) {
    const [settingsModal, setSettingsModal] = useState(false);
    const classes = useStyles({theme});

    return (
        <>
            {settingsModal ? (
                <Portal>
                    <SettingsModal
                        theme={theme}
                        updateTheme={updateTheme}
                        closeModal={() => setSettingsModal(false)}
                    />
                </Portal>
            ) : null}
            <Box className={classes.nav_bar_button} onClick={() => setSettingsModal(true)}>
                <SettingsIcon className={classes.icon} />
                <Typography className={classes.text} variant='button'>{children}</Typography>
            </Box>
        </>
    );
}