import React from "react";
import {smallBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import { useStyles } from "./EpandCollapseWidget.jss";

export function ExpandCollapseWidget({ toggleExpand, isExpanded }) {
    const classes = useStyles();
    return (
        <div className={classes.widget} onClick={() => toggleExpand(!isExpanded)}>
            <img
                src={
                    isExpanded
                        ? "/Images/expand/range-display-expand-b1faae.svg"
                        : "/Images/colapse/range-display-colapse-b1faae.svg"
                }
                className={classes.image}
                alt={"icon for expanding or collapsing tool"}
            />
        </div>
    );
}
