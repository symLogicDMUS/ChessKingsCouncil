import React from "react";
import {useStyles} from "./PieceProfiles.jss"
import { getColorName } from "../helpers/getColorName";
import { ProfileWBScrollTableHeader } from "./ProfileWBScrollTableHeader";
import { ScrollTable } from "../Reuseables/ScrollTable";
import { fontSizes } from "../styles/fontSizes";
import {stepFuncNamesToText} from "../helpers/spanToText";
import {offsetToText} from "../helpers/offsetToText";
// import "./ProfileWB.scss";

/**
 * className: profileWB class
 * color: is for W or B piece,
 * expand: given to header. opens displayBoard
 * def: spans, offsets, and img of W or B piece
 * */
export function ProfileWB({ color, theme, classes, pieceName, expand, def }) {
    const getSpans = (def) => {
        if (def.spans.length === 0) {
            return Array(0);
        }
        let spanStrings = [];
        for (const span of def.spans) {
            spanStrings.push(stepFuncNamesToText[span]);
        }
        return spanStrings;
    }
    const getOffsets = (def) => {
        if (def.offsets.length === 0) {
            return Array(0);
        }

        let offsetStrings = [];
        def.offsets.forEach((offset) => {
            offsetStrings.push(offsetToText(offset));
        });
        return offsetStrings;
    }
    return (
        <div className={classes.profileWB}>
            <div className="img-label" style={{ fontSize: fontSizes.medium1 }}>
                {getColorName(color)} Image
            </div>
            <div className={classes.imgWindow}>
                <img src={def.img} className="piece-profile-img" alt="icon of piece" />
            </div>
            <ProfileWBScrollTableHeader
                className="spans-header"
                pieceName={pieceName}
                expand={expand}
                color={color}
                rangeType="spans"
            />
            <ScrollTable
                listItems={getOffsets(def)}
                cellFontSize={fontSizes.medium3}
                className={classes.rangeTable}
            />
            <ProfileWBScrollTableHeader
                className="offsets-header"
                pieceName={pieceName}
                expand={expand}
                rangeType="offsets"
                color={color}
            />
            <ScrollTable
                listItems={getSpans(def)}
                cellFontSize={fontSizes.medium3}
                className={classes.rangeTable}
            />
        </div>
    );
}
