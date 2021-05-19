import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import {Portal} from "@material-ui/core";
import {findDidUserVisitPage, recordUserVisitedPage}
    from "../../API/findRecordDidUserVisitPage";
import { HelpModal } from "../Reuseables/NavBar/Help/HelpModal";
import { HelpSlideshow } from "../Reuseables/NavBar/Help/HelpSlideshow";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { UserContext } from "../../UserContext";
import Button from "@material-ui/core/Button";
import { useStyles} from "./MainMenuLg.jss";

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