import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import {SettingsModal} from "./SettingsModal";
import SettingsIcon from "@material-ui/icons/Settings";
import {Button, Portal, Typography} from "@material-ui/core";
import {useStyles} from "./NavBarButton.jss";
import clsx from "clsx";

export function SettingsButton({updateTheme, theme, screenCase, currentPage, children}) {
    const [hover, setHover] = useState(false);
    const [settingsModal, toggleSettingsModal] = useState(false);

    const classes = useStyles({
        theme: theme,
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
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={clsx(classes.nav_bar_button, {
                    [classes.normal_color]: !hover,
                    [classes.hover_color]: hover,
                })}
            >
                <Box className={classes.box}>
                    <SettingsIcon
                        className={clsx(classes.icon, {
                            [classes.normal_color]: !hover,
                            [classes.hover_color]: hover,
                            [classes.horizontal_nav_text_adjust]:
                            screenCase === "wide" &&
                            (currentPage === "NewGame" ||
                                currentPage === "LoadGame" ||
                                currentPage === "MyPieces" ||
                                currentPage === "CouncilRules"),
                        })}
                    />
                    <Typography
                        className={clsx(classes.text, {
                            [classes.normal_color]: !hover,
                            [classes.hover_color]: hover,
                            [classes.horizontal_nav_text_adjust]:
                            screenCase === "wide" &&
                            (currentPage === "NewGame" ||
                                currentPage === "LoadGame" ||
                                currentPage === "MyPieces" ||
                                currentPage === "CouncilRules"),

                        })}
                        noWrap
                    >
                        Settings
                    </Typography>
                </Box>
            </Button>
        </>
    )
}