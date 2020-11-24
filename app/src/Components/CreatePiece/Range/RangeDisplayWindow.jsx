import React from "react";
import ScrollTable  from "../../Reuseables/ScrollTable";
import {styles} from "./_RangeDisplayWindow.jss";

export function RangeDisplayWindow({ ranges, screenCase }) {
    return (
        <div className="range-display-window">
            <ScrollTable
                className="scroll-table-no-disp"
                listItems={ranges}
                screenCase={screenCase}
                styleObject={{ gridTemplateRows: "0.5em 1.25em 1.25em 1.25em 1.25em 1.25em 0.5em", border: "1px solid #707070" }}
            />
        </div>
    );
}
