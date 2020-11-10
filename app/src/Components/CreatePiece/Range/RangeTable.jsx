import React from "react";
import { ScrollArrow } from "./ScrollArrow";
import "./RangeTable.scss";

export function RangeTable({ displayList, moveUp, moveDown }) {
    return (
        <>
            <div className="range-table">
                <ScrollArrow direction="up" move={moveUp} />
                <div className="range-table-item1">{displayList[0]}</div>
                <div className="range-table-item2">{displayList[1]}</div>
                <div className="range-table-item3">{displayList[2]}</div>
                <div className="range-table-item4">{displayList[3]}</div>
                <div className="range-table-item5">{displayList[4]}</div>
                <ScrollArrow direction="down" move={moveDown} />
            </div>
        </>
    );
}
