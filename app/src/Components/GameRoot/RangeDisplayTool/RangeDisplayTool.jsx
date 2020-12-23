import React, { useState } from "react";
import { RangeDisplayBoard } from "./RangeBoard/RangeDisplayBoard";
import { ExpandCollapseWidget } from "./ExpandCollapseWidget";
import {smallBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import { useStyles } from "./RangeDisplayTool.jss";

export function RangeDisplayTool({theme, board, allRanges, pieceDefs, idDict }) {
    let [expanded, setExpanded] = useState(true);

    const classes = useStyles();

    return (
        <>
            {expanded && (
                <div className={classes.expanded}>
                    <div className={classes.label}>Range Display</div>
                    <ExpandCollapseWidget isExpanded={true} togleExpand={() => setExpanded(false)} />
                    <RangeDisplayBoard theme={theme} board={board} idDict={idDict} pieceDefs={pieceDefs} allRanges={allRanges} />
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
