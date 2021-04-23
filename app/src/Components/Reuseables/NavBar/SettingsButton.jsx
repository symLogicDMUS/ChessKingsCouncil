import React, {useState} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {SettingsModal} from "./SettingsModal";
import SettingsIcon from "@material-ui/icons/Settings";
import {Portal, Typography} from "@material-ui/core";
import {useStyles} from "./NavBarButton.jss";

export function SettingsButton({updateTheme, theme, screenCase, currentPage, children}) {
    const [hover, setHover] = useState(false);
    const [settingsModal, toggleSettingsModal] = useState(false);

    const classes = useStyles({
        theme: theme,
        screenCase: screenCase
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
            <Box
                onClick={toggleSettingsModal}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={clsx(classes.nav_bar_button, {
                    [classes.normal_color]: !hover,
                    [classes.hover_color]: hover,
                    [classes.column_direction]: ! isRow(),
                    [classes.row_direction]: isRow(),
                })}
            >
                <Box
                    className={clsx(classes.icon_and_text_area, {
                        [classes.alignCenter]: true,
                        [classes.margin]: isRow(),
                        [classes.marginRight]: ! isRow(),
                        [classes.marginTop]: ! isRow(),
                        [classes.marginBottom]: ! isRow(),
                    })}
                >
                    <SettingsIcon
                        className={clsx(classes.icon, {
                            [classes.normal_color]: !hover,
                            [classes.hover_color]: hover,
                            [classes.icon_lg_column]: ! isRow(),
                            [classes.icon_lg_row]: isRow(),
                        })}
                    />
                    <Typography
                        variant='button'
                        className={clsx(classes.text, {
                            [classes.normal_color]: !hover,
                            [classes.hover_color]: hover,
                            [classes.parent_column_text]: ! isRow(),
                            [classes.parent_row_text]: isRow(),
                        })}
                        noWrap
                    >
                        Settings
                    </Typography>
                </Box>
            </Box>
        </>
    )
}