import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import {Button, Portal} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {findDidUserVisitPage, recordUserVisitedPage
} from "../../../API/findRecordDidUserVisitPage";
import {HelpSlideshow} from "./HelpSlideshow";
import {getHoverColor, useStyles} from "./NavBarButton.jss";

export function HelpButton({currentPage, theme, screenCase, helpTitle, children}) {

    let [hover, setHover] = useState(false);
    let [modal, setModal] = useState(false);
    let [isFirstTime, setIsFirstTime] = useState(false);

    const classes = useStyles({theme: theme, screenCase: screenCase })

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
            {(modal || isFirstTime) ? (
                <Portal>
                    <HelpSlideshow
                        onClose={() => {
                            setIsFirstTime(false)
                            setModal(false)
                        }}
                        initialState={{pos: 0, numSlides: children.length}}
                        title={helpTitle}
                        theme={theme}
                    >
                        {children}
                    </HelpSlideshow>
                </Portal>
            ) : null}
            <Button
                onClick={() => setModal(! modal)}
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