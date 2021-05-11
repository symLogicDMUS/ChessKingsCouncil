import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import {ListItem, ListItemIcon, ListItemText, Portal,}
        from "@material-ui/core";
import {findDidUserVisitPage, recordUserVisitedPage}
        from "../../../../API/findRecordDidUserVisitPage";
import { HelpModal } from "./HelpModal";
import { HelpSlideshow } from "./HelpSlideshow";
import { UserContext } from "../../../../UserContext";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { useStyles } from "../NavBarButton.jss";

export function HelpButton({
    currentPage,
    theme,
    screenCase,
    helpTitle,
    updateFirstVisit,
    touch,
    children,
}) {
    const uid = useContext(UserContext);
    const [slideshow, setSlideshow] = useState(false);
    const [modal, setModal] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(false);

    const classes = useStyles({ theme: theme, screenCase: screenCase });

    useEffect(() => {
        if (uid) {
            findDidUserVisitPage(currentPage).then(([exists]) => {
                recordUserVisitedPage(currentPage).then(([r]) => {
                    const firstTime = !exists;
                    if (updateFirstVisit) {
                        updateFirstVisit(firstTime);
                    }
                    setIsFirstTime(firstTime);
                });
            });
        }
    }, [currentPage]);

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
            {(slideshow || isFirstTime) && children ? (
                <Portal>
                    <HelpSlideshow
                        onClose={() => {
                            setIsFirstTime(false);
                            setSlideshow(false);
                        }}
                        initialState={{ pos: 0, numSlides: children.length }}
                        title={helpTitle}
                        theme={theme}
                    >
                        {children}
                    </HelpSlideshow>
                </Portal>
            ) : null}
            {modal ? (
                <HelpModal
                    theme={theme}
                    screenCase={screenCase}
                    onClose={() => setModal(false)}
                />
            ) : null}
            <ListItem
                button
                onClick={() => setModal(!modal)}
                className={clsx(classes.nav_bar_button, {
                    [classes.row_direction]: isRow(),
                })}
            >
                <ListItemIcon className={classes.icon}>
                    <ContactSupportIcon fontVariant="button" />
                </ListItemIcon>
                <ListItemText variant="button" primary="Help" noWrap>
                    Settings
                </ListItemText>
            </ListItem>
        </>
    );
}
