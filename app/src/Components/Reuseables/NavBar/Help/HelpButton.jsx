import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import {ListItem, ListItemIcon, ListItemText, Portal, Slide,}
    from "@material-ui/core";
import {findDidUserVisitPage, recordUserVisitedPage}
        from "../../../../API/findRecordDidUserVisitPage";
import { HelpModal } from "./HelpModal";
import { HelpSlideshow } from "./HelpSlideshow";
import { UserContext } from "../../../../UserContext";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { useStyles } from "../NavBarButton.jss";

function HelpButton(props) {
    const {
        updateFirstVisit,
        currentPage,
        screenCase,
        helpTitle,
        className,
        style,
        theme,
        isRow,
        children,
    } = props;

    const uid = useContext(UserContext);
    const [modal, setModal] = useState(false);
    const [slideshow, setSlideshow] = useState(false);
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

    return (
        <div className={classes.root}>
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
                    [classes.row_direction]: isRow,
                    [className]: className,
                })}
                style={style}
            >
                <ListItemIcon className={classes.icon}>
                    <ContactSupportIcon fontVariant="button" />
                </ListItemIcon>
                <ListItemText variant="button" primary="Help" noWrap>
                    Help
                </ListItemText>
            </ListItem>
        </div>
    );
}

export default HelpButton;