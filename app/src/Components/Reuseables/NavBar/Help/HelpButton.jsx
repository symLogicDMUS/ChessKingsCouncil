import React, {useContext, useEffect, useState} from "react";
import clsx from "clsx";
import {ListItem, ListItemIcon, ListItemText, Portal} from "@material-ui/core";
import {findDidUserVisitPage, recordUserVisitedPage}
        from "../../../../API/findRecordDidUserVisitPage";
import {HelpModal} from "./HelpModal";
import {HelpSlideshow} from "./HelpSlideshow";
import {UserContext} from "../../../../UserContext";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import {useStyles} from "../NavBarButton.jss";

export function HelpButton({currentPage, theme, screenCase, helpTitle, updateFirstVisit, touch, children}) {
    const uid = useContext(UserContext);
    const [hover, setHover] = useState(false);
    const [slideshow, setSlideshow] = useState(false);
    const [modal, setModal] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(false);

    const classes = useStyles({theme: theme, screenCase: screenCase})

    useEffect(() => {
        if (uid) {
            findDidUserVisitPage(currentPage).then(([exists]) => {
                recordUserVisitedPage(currentPage).then(([r]) => {
                    const firstTime = !exists;
                    if (updateFirstVisit) {
                        updateFirstVisit(firstTime)
                    }
                    setIsFirstTime(firstTime);
                });
            });
        }
    }, [currentPage])

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
                            setIsFirstTime(false)
                            setSlideshow(false)
                        }}
                        initialState={{pos: 0, numSlides: children.length}}
                        title={helpTitle}
                        theme={theme}
                    >
                        {children}
                    </HelpSlideshow>
                </Portal>
            ) : null}
            {modal ? (<HelpModal theme={theme} screenCase={screenCase} onClose={() => setModal(false)}/>) : null}
            <ListItem
                button
                onClick={() => setModal(!modal)}
                className={clsx(classes.nav_bar_button, {
                    [classes.hover_color]: hover,
                    [classes.normal_color]: !hover && !touch,
                    [classes.row_direction]: isRow(),
                })}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <ListItemIcon
                    className={clsx(classes.icon, {
                        [classes.hover_color]: hover,
                        [classes.touch_color]: touch,
                        [classes.normal_color]: !hover && !touch,
                    })}
                >
                    <ContactSupportIcon fontVariant="button" />
                </ListItemIcon>
                <ListItemText
                    variant="button"
                    primary='Help'
                    className={clsx(null, {
                        [classes.normal_color]: !hover && !touch,
                        [classes.hover_color]: hover,
                        [classes.touch_color]: touch,
                    })}
                    noWrap
                >
                    Settings
                </ListItemText>
            </ListItem>
        </>
    );
}