import React, {useState} from "react";
import clsx from "clsx";
import {Portal} from "@material-ui/core";
import {SettingsModal} from "../../Reuseables/NavBar/SettingsModal";
import SettingsIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MainMenuLg.jss";

function MainMenuSettingsButton(props) {
    const {currentPage, isRow, screenCase, className, theme, children, ...other} = props;

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
            <Button
                onClick={toggleSettingsModal}
                className={clsx(classes.button, {
                    [className]: className,
                })}
                {...other}
                startIcon={
                    <SettingsIcon fontVariant="button" />
                }
            >
                Settings
            </Button>
        </>
    )
}

export default MainMenuSettingsButton;