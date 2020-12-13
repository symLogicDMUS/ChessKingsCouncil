import React, {useEffect, useState} from "react";
import {findDidUserVisitPage, recordUserVisitedPage} from "../../../API/findRecordDidUserVisitPage";
import IconButton from "@material-ui/core/IconButton";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {useStyles} from "./HelpButton.jss";


export function HelpButton({currentPage, toggleHelpModal, setFirstTime, theme}) {

    let [hover, setHover] = useState(false)
    const classes = useStyles({theme})

    useEffect(() => {
        findDidUserVisitPage('production', currentPage).then(([exists]) => {
            recordUserVisitedPage('production', currentPage).then(([res]) => {
                const firstTime = !exists;
                setFirstTime(firstTime);
            });
        });
    })

    return (
    <div className={classes.help}>
        <IconButton className={classes.icon} onClick={() => toggleHelpModal(true)} >
            <ContactSupportIcon fontSize="inherit"/>
        </IconButton>
    </div>
    );
}