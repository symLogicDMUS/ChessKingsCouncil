import React, {useEffect, useState} from "react";
import {findDidUserVisitPage, recordUserVisitedPage} from "../../../API/findRecordDidUserVisitPage";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {Button} from "@material-ui/core";
import {fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "../NavBarButton.jss";


export function HelpButton({currentPage, toggleHelpModal, setIsFirstTime, style, theme, parentFlex}) {

    let [hover, setHover] = useState(false);

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
        <Button
            className={classes.nav_bar_button}
            onClick={toggleHelpModal}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Box className={classes.box}>
                <ContactSupportIcon className={hover ? classes.icon_hover : classes.icon}/>
                <Typography className={hover ? classes.text_hover : classes.text}>Help</Typography>
            </Box>
        </Button>
    );
}