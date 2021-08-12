import React from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./TabPanel.jss";
import {Container, Slide} from "@material-ui/core";

function TabPanel(props) {
    const { children, value, index, theme, slideDirection, ...other } = props;

    const classes = useStyles({ theme });

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
                <Slide in={value === index} direction={slideDirection}>
                    <Container className={classes.content}>{children}</Container>
                </Slide>
        </div>
    );
}

export default TabPanel;
