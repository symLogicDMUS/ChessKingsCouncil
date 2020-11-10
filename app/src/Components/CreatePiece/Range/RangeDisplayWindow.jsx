import React from "react";
import { ScrollTable } from "../../Reuseables/ScrollTable";
import "./RangeDisplayWindow.scss";

export function RangeDisplayWindow({ ranges }) {
    return (
        <div className="range-display-window">
            <ScrollTable className="scroll-table-no-disp" listItems={ranges} />
        </div>
    );
}
