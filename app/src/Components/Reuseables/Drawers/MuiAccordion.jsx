import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
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
 * @param style {Object} style object (optional)
 * @param addedStyle {Object} style object (optional)
 * @param rootStyle {Object} style object (optional)
 * @param neighborContentSize
 * @returns {JSX.Element}
 * @constructor
 */
export default function MuiAccordion({theme, style, rootStyle, addedStyle, neighborContentSize, children }) {
    const classes = useStyles({theme: theme, style: style, rootStyle: rootStyle, addedStyle: addedStyle, neighborContentSize: neighborContentSize, numTabs: children.length});
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
                            className={(children.length > 2) ? classes.accordion_summary : null}
                            expandIcon={<ExpandMoreIcon className={classes.expand_icon}  />}
                            aria-controls="panel1a-content"
                            id={children[i].id}
                        >
                            <Typography className={(children.length > 2) ? classes.accordion_title : null}>{children[i].title}</Typography>
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
    return <div className={classes.root}><div className={classes.mui_global_css}>{getAccordions()}</div></div>;
}
