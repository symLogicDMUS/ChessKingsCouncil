import React from "react";
import { ScrollTable } from "../../Reuseables/ScrollTable";
import "./_RangeDisplayWindow.scss";

export function RangeDisplayWindow({ ranges, screenCase }) {
    return (
        <div className="range-display-window">
            <ScrollTable
                className="scroll-table-no-disp"
                listItems={ranges}
                screenCase={screenCase}
                styleObject={{ gridTemplateRows: "7.5% 17% 17% 17% 17% 17% 7.5%", border: "1px solid #707070" }}
            />
        </div>
    );
}
