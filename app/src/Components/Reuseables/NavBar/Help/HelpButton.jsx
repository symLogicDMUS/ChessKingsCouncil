import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { HelpModal } from "./HelpModal";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { ContactSupport } from "@material-ui/icons";
import { useStyles } from "../NavBarButton.jss";

function HelpButton(props) {
    const {
        theme,
        currentPage,
        screenCase,
        helpTitle,
        className,
        children,
        ...other
    } = props;

    const [modal, setModal] = useState(false);

    const classes = useStyles({ theme: theme, screenCase: screenCase });

    return (
        <>
            {modal && (
                <HelpModal
                    theme={theme}
                    screenCase={screenCase}
                    onClose={() => setModal(false)}
                />
            )}
            <ListItem
                button
                onClick={() => setModal(!modal)}
                className={clsx(classes.nav_bar_button, {
                    [className]: className,
                })}
                {...other}
            >
                <ListItemIcon className={classes.icon}>
                    <ContactSupport fontVariant="button" />
                </ListItemIcon>
                <ListItemText variant="button" primary="Help" noWrap>
                    Help
                </ListItemText>
            </ListItem>
        </>
    );
}

export default HelpButton;
