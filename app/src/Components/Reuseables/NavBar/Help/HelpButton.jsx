import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import {Button, Portal} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {findDidUserVisitPage, recordUserVisitedPage
} from "../../../../API/findRecordDidUserVisitPage";
import {HelpSlideshow} from "./HelpSlideshow";
import {HelpModal} from "./HelpModal";
import {useStyles} from "../NavBarButton.jss";
import clsx from "clsx";

export function HelpButton({currentPage, theme, screenCase, helpTitle, updateFirstVisit, children}) {
    const [hover, setHover] = useState(false);
    const [slideshow, setSlideshow] = useState(false);
    const [modal, setModal] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(false);

    const classes = useStyles({theme: theme, screenCase: screenCase})

    useEffect(() => {
        findDidUserVisitPage(currentPage).then(([exists]) => {
            recordUserVisitedPage(currentPage).then(([r]) => {
                const firstTime = !exists;
                if (updateFirstVisit) {
                    updateFirstVisit(firstTime)
                }
                setIsFirstTime(firstTime);
            });
        });
    }, [currentPage])

    return (
        <>
            {(slideshow || isFirstTime) ? (
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
            {modal ? (<HelpModal theme={theme} screenCase={screenCase} onClose={() => setModal(false)} />) : null}
            <Button
                onClick={() => setModal(!modal)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={clsx(classes.nav_bar_button, {
                    [classes.normal_color]: !hover,
                    [classes.hover_color]: hover,
                })}
            >
                <Box className={classes.box}>
                    <ContactSupportIcon
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
                        Help
                    </Typography>
                </Box>
            </Button>
        </>
    );
}