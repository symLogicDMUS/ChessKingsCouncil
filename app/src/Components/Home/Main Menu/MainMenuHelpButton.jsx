import React, { useState } from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { HelpModal } from "../../Reuseables/NavBar/Help/HelpModal";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { useStyles } from "./MainMenuLg.jss";

function MainMenuHelpButton(props) {
    const {
        updateFirstVisit,
        currentPage,
        screenCase,
        helpTitle,
        className,
        theme,
        children,
        ...other
    } = props;

    const [modal, setModal] = useState(false);

    const classes = useStyles({ theme: theme, screenCase: screenCase });


    return (
        <>
            {modal ? (
                <HelpModal
                    theme={theme}
                    screenCase={screenCase}
                    onClose={() => setModal(false)}
                />
            ) : null}
            <Button
                onClick={() => setModal(!modal)}
                className={clsx(classes.button, {
                    [className]: className,
                })}
                {...other}
                startIcon={
                    <ContactSupportIcon fontVariant="button" />
                }
            >
                Help
            </Button>
        </>
    );
}

export default MainMenuHelpButton;