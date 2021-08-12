import React from "react";
import { Slide } from "@material-ui/core";
import { useStyles } from "./TabPanel.jss";

function TabPanel(props) {
    const { children, value, index, theme, slideDirection, ...other } = props;

    const classes = useStyles({ theme });

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            className={classes.tabPanel}
            {...other}
        >
            <Slide in={value === index} direction={slideDirection}>
                <div>{children}</div>
            </Slide>
        </div>
    );
}

export default TabPanel;
