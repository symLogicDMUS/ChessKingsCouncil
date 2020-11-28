import React, { useState } from "react";
import {RangeBoard} from "./RangeBoard/RangeBoard";
import { ExpandCollapseWidget } from "./ExpandCollapseWidget";
import { useStyles } from "./RangeDisplayTool.jss";

export function RangeDisplayTool({ board, allRanges, pieceDefs, idDict }) {
    let [expanded, setExpanded] = useState(true);

    const classes = useStyles();

    return (
        <>
            {expanded && (
                <div className={classes.expanded}>
                    <div className={classes.label}>Range Display</div>
                    <ExpandCollapseWidget isExpanded={true} togleExpand={() => setExpanded(false)} />
                    <RangeBoard board={board} idDict={idDict} pieceDefs={pieceDefs} allRanges={allRanges} />
                </div>
            )}
            {!expanded && (
                <div className={classes.collapsed}>
                    <div className={classes.label}>Range Display</div>
                    <ExpandCollapseWidget isExpanded={false} togleExpand={() => setExpanded(true)} />
                </div>
            )}
        </>
    );
}
