import React, {useEffect} from "react";
import {findDidUserVisitPage, recordUserVisitedPage} from "../../../API/findRecordDidUserVisitPage";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {Button} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {fontSize} from "../../CreatePiece/fontSize.jss";
import {useStyles} from "../NavBarButton.jss";


export function HelpButton({currentPage, toggleHelpModal, setIsFirstTime, theme, flexDirection}) {

    const classes = useStyles({theme: theme, fontSize: fontSize, flexDirection: flexDirection})

    useEffect(() => {
        findDidUserVisitPage(currentPage).then(([exists]) => {
            recordUserVisitedPage(currentPage).then(([res]) => {
                const firstTime = !exists;
                setIsFirstTime(firstTime);
            });
        });
    })

    return (
        <Button className={classes.nav_bar_button} onClick={toggleHelpModal}>
            <Box className={classes.box}>
                <ContactSupportIcon className={classes.icon}/>
                <div className={classes.text}>Help</div>
            </Box>
        </Button>
    );
}