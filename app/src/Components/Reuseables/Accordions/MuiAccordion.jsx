import React from 'react';
import clsx from "clsx";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from "./MuiAccordion.jss";


export default function MuiAccordion({heading, rootClassName, classesObj, children}) {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, {
            [rootClassName]: rootClassName,
        })}>
            <Accordion classes={classesObj}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}