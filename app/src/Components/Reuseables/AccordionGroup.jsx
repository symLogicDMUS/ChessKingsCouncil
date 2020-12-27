import React, {useState} from "react";
import {Accordion, AccordionDetails} from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./MuiAccordion.jss";


export default function AccordionGroup() {
    const classes = useStyles();
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
    return (
        <div className={classes.root}>
            {(allCollapsed || expanded === "name") && (
                <Accordion
                    expanded={expanded === "name"}
                    onChange={() => setTool("name")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            Name
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion_details}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Illum doloremque
                            corporis libero numquam, accusantium repellendus
                            excepturi, culpa minus, enim amet eum? Velit animi
                            minus eaque delectus, maiores iure necessitatibus
                            dolores!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
            {(allCollapsed || expanded === "icon") && (
                <Accordion
                    expanded={expanded === "icon"}
                    onChange={() => setTool("icon")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>
                            Icon
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion_details}>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi voluptate illum corporis? Nemo non
                            aperiam cum totam quisquam maxime praesentium
                            nostrum eius, qui quod? Culpa voluptatem tenetur
                            officia sunt maxime. Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Nam tempore alias
                            blanditiis obcaecati fuga numquam quae, amet aliquam
                            quidem neque, nulla, voluptatibus accusamus deleniti
                            consequuntur officiis. Optio voluptatibus quis
                            laudantium?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
            {(allCollapsed || expanded === "range") && (
                <Accordion
                    expanded={expanded === "range"}
                    onChange={() => setTool("range")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>
                            Range
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion_details}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget. Lorem ipsum, dolor sit
                            amet consectetur adipisicing elit. Vero iusto quis
                            perferendis! Natus deserunt assumenda optio, sunt
                            odit, ex sapiente quod hic, nulla repellendus
                            deleniti. Neque velit ex reiciendis aspernatur!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
            {(allCollapsed || expanded === "location") && (
                <Accordion
                    expanded={expanded === "location"}
                    onChange={() => setTool("location")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>
                            Location
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion_details}>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Delectus dolore quisquam provident enim quasi
                            accusamus officiis magni autem a, neque numquam
                            pariatur quis ratione voluptatibus harum vitae illo
                            doloribus sit. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Ratione harum labore,
                            vero nemo nihil vitae ut enim assumenda esse at
                            laborum voluptate eius hic, laudantium eaque quo
                            eligendi illo quasi quisquam voluptas! Laboriosam,
                            nisi fugit. Alias esse laudantium ad, facere
                            assumenda sit ipsa! Libero minus illum laudantium
                            esse necessitatibus eius!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
            {(allCollapsed || expanded === "options") && (
                <Accordion
                    expanded={expanded === "options"}
                    onChange={() => setTool("options")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>
                            Options
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordion_details}>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Delectus dolore quisquam provident enim quasi
                            accusamus officiis magni autem a, neque numquam
                            pariatur quis ratione voluptatibus harum vitae illo
                            doloribus sit. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Ratione harum labore,
                            vero nemo nihil vitae ut enim assumenda esse at
                            laborum voluptate eius hic, laudantium eaque quo
                            eligendi illo quasi quisquam voluptas! Laboriosam,
                            nisi fugit. Alias esse laudantium ad, facere
                            assumenda sit ipsa! Libero minus illum laudantium
                            esse necessitatibus eius!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    );
}
