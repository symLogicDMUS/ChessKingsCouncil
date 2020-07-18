import React from "react";
import "./RangeTable.css";


export function RangeTable({displayList}) {

    const getLabel = (text) => {
        if (text === undefined)
            return null;
        if (text.includes("-"))
            return "Span: "
        return "Offset: "
    }
    
    return (
        <div className="range-table">
            <div className="range-table-item table-item1">{getLabel(displayList[0])}{displayList[0]}</div>
            <div className="range-table-item table-item2">{getLabel(displayList[1])}{displayList[1]}</div>
            <div className="range-table-item table-item3">{getLabel(displayList[2])}{displayList[2]}</div>
            <div className="range-table-item table-item4">{getLabel(displayList[3])}{displayList[3]}</div>
            <div className="range-table-item table-item5">{getLabel(displayList[4])}{displayList[4]}</div>
        </div>
    )
}
