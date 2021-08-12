import React from "react";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./MuiAccordion.jss";

export default function MuiAccordion(props) {
    const { heading, className, children, ...other } = props;

    const classes = useStyles();

    return (
        <div
            className={clsx(classes.root, {
                [className]: className,
            })}
        >
            <Accordion {...other}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    {heading}
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </div>
    );
}
