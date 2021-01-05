import React, {useEffect, useState} from "react";
import {
    findDidUserVisitPage,
    recordUserVisitedPage
} from "../../../API/findRecordDidUserVisitPage";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {Button, Portal} from "@material-ui/core";
import {useStyles} from "./NavBarButton.jss";
import {HelpSlideshow} from "./HelpSlideshow";


export function HelpButton({currentPage, style, theme, parentFlex, helpTitle, children}) {

    let [hover, setHover] = useState(false);
    let [modal, setModal] = useState(false);
    let [isFirstTime, setIsFirstTime] = useState(false);

    const classes = useStyles({style: style, theme: theme, parentFlex: parentFlex})

    useEffect(() => {
        findDidUserVisitPage(currentPage).then(([exists]) => {
            recordUserVisitedPage(currentPage).then(([res]) => {
                const firstTime = !exists;
                setIsFirstTime(firstTime);
            });
        });
    })

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
                className={classes.nav_bar_button}
                onClick={() => setModal(! modal)}
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