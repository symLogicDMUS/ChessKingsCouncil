import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {largeBoardFontSize as fontSize} from "../styles/fontSize.jss";
import { useStyles } from "./MuiAccordion.jss";

/**
 * children of the form:
 * [
 *   {
 *     id: <string>,
 *     title: <component or string>,
 *     body: <component>
 *   },
 *   {
 *     id: <string>,
 *     title: <component or string>,
 *     body: <component>
 *   },
 *   ...
 * ]
 * @param theme {string}
 * @param children {List}
 * @returns {JSX.Element}
 * @constructor
 */
export default function MuiAccordion({theme, children }) {
    const classes = useStyles({theme: theme, fontSize: fontSize});
    let [expanded, setExpanded] = useState(null);
    let [allCollapsed, setAllCollapsed] = useState(true);

    const setTool = (panelName) => {
        if (allCollapsed) {
            setExpanded(panelName);
            setAllCollapsed(false);
        } else {
            setExpanded(null);
            setAllCollapsed(true);
        }
    };
    const getAccordions = () => {
        const accordions = [];
        for (let i = 0; i < children.length; i++) {
            accordions.push(
                (allCollapsed || expanded === children[i].id) && (
                    <Accordion
                        expanded={expanded === children[i].id}
                        onChange={() => setTool(children[i].id)}
                        className={classes.accordion_tab}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className={classes.expand_icon} />}
                            aria-controls="panel1a-content"
                            id={children[i].id}
                        >
                            {children[i].title}
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordion_body}>
                            {children[i].body}
                        </AccordionDetails>
                    </Accordion>
                )
            );
        }
        return accordions;
    };

    return <div className={classes.root}>{getAccordions()}</div>;
}
