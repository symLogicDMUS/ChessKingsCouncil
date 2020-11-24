import React, {useState} from "react";
import {getColorName} from "../helpers/getColorName";
import {fontSizes} from "../styles/fontSizes";
import {useStyles} from "./ProfileWBScrollTableHeader.jss";

export function ProfileWBScrollTableHeader({screenCase, expand, pieceName, color, rangeType}) {

    let [src, setSrc] = useState("/Images/expand/expand-969696.svg");

    const classes = useStyles()

    return (
        <div className={rangeType === 'spans' ? classes.spansHeader : classes.offsetsHeader}>
            <div className={classes.colorAndRangeType} style={{fontSize: fontSizes[screenCase]['medium1']()}}>
                {getColorName(color)} {rangeType}
            </div>
            <div
                className={classes.expandWidget}
                onClick={() => expand(pieceName, color, rangeType)}
                onMouseEnter={() => setSrc("/Images/expand/expand-72e2ff.svg")}
                onMouseLeave={() => setSrc("/Images/expand/expand-969696.svg")}
            >
                <img className={classes.expandWidgetIcon} src={src} alt="expand icon"/>
            </div>
        </div>
    );
}
