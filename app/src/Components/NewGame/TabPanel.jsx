import React from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./TabPanel.jss";

function TabPanel(props) {
    const { children, value, index, theme, ...other } = props;

    const classes = useStyles({theme});

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} className={classes.content}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default TabPanel;
