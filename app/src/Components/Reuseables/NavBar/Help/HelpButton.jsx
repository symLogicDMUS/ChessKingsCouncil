import React, {useContext, useEffect, useState} from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Portal} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {findDidUserVisitPage, recordUserVisitedPage}
        from "../../../../API/findRecordDidUserVisitPage";
import {HelpModal} from "./HelpModal";
import {HelpSlideshow} from "./HelpSlideshow";
import {UserContext} from "../../../../UserContext";
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
            <Box
                onClick={() => setModal(!modal)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={clsx(classes.nav_bar_button, {
                    [classes.normal_color]: !hover && !touch,
                    [classes.hover_color]: hover,
                    [classes.touch_color]: touch,
                    [classes.column_direction]: ! isRow(),
                    [classes.row_direction]: isRow(),
                })}
            >
                <Box
                    className={clsx(classes.icon_and_text_area, {
                        [classes.alignCenter]: true,
                        [classes.margin]: isRow(),
                        [classes.marginRight]: ! isRow(),
                        [classes.marginTop]: ! isRow(),
                        [classes.marginBottom]: ! isRow(),
                    })}
                >
                    <ContactSupportIcon
                        className={clsx(classes.icon, {
                            [classes.normal_color]: !hover && !touch,
                            [classes.hover_color]: hover,
                            [classes.touch_color]: touch,
                            [classes.icon_lg_column]: ! isRow(),
                            [classes.icon_lg_row]: isRow(),
                        })}
                    />
                    <Typography
                        variant='button'
                        className={clsx(classes.text, {
                            [classes.normal_color]: !hover && !touch,
                            [classes.hover_color]: hover,
                            [classes.touch_color]: touch,
                            [classes.parent_column_text]: ! isRow(),
                            [classes.parent_row_text]: isRow(),
                        })}
                        noWrap
                    >
                        Help
                    </Typography>
                </Box>
            </Box>
        </>
    );
}