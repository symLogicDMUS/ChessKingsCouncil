import React from "react";
import ScrollTable from "../ScrollTable/ScrollTable";
import { useStyles } from "./HelpTable.jss";

/**style must include width*/
export function HelpList({listItems, style, theme}) {
    const classes = useStyles();
    return (
        <div className={classes.modal}>
            {/*<ScrollTable listItems={listItems} numRows={listItems.length} style={style} theme={theme} />*/}
        </div>
    )
}
