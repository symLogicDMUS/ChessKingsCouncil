import React, {useEffect, useState} from "react";
import {findDidUserVisitPage, recordUserVisitedPage} from "../../../API/findRecordDidUserVisitPage";
import withStyles from "@material-ui/core/styles/withStyles";
import {useStyles} from "./HelpButton.jss";


export function HelpButton({currentPage, toggleHelpModal, setFirstTime, theme}) {

    let [hover, setHover] = useState(false)
    const classes = useStyles()

    useEffect(() => {
        findDidUserVisitPage(currentPage).then(([exists]) => {
            recordUserVisitedPage(currentPage).then(([res]) => {
                const firstTime = !exists;
                setFirstTime(firstTime);
            });
        });
    })

    return (
        <div
            className={classes.help}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => toggleHelpModal(true)}
        >
            <img
                src={`/Images/Navbar/help-969696.svg`}
                className={classes.image}
                alt=""
            />
        </div>
    );
}