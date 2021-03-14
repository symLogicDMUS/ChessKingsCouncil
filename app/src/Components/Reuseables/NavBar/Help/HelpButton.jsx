import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import {Button, Portal} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {findDidUserVisitPage, recordUserVisitedPage
} from "../../../../API/findRecordDidUserVisitPage";
import {HelpSlideshow} from "./HelpSlideshow";
import {HelpModal} from "./HelpModal";
import {getHoverColor, useStyles} from "../NavBarButton.jss";

export function HelpButton({currentPage, theme, screenCase, helpTitle, children}) {
    const [hover, setHover] = useState(false);
    const [slideshow, setSlideshow] = useState(false);
    const [modal, setModal] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(false);

    const classes = useStyles({theme: theme, screenCase: screenCase, currentPage: currentPage})

    useEffect(() => {
        findDidUserVisitPage(currentPage).then(([exists]) => {
            recordUserVisitedPage(currentPage).then(([r]) => {
                const firstTime = !exists;
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
                className={classes.nav_bar_button}
                style={hover ? getHoverColor(theme) : null}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Box className={classes.box}>
                    <ContactSupportIcon className={hover ? classes.icon_hover : classes.icon}/>
                    <Typography className={hover ? classes.text_hover : classes.text}>Help</Typography>
                </Box>
            </Button>
        </>
    );
}