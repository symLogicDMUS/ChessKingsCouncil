import React from "react";
import { getColorName } from "../helpers/getColorName";
import { ProfileWBScrollTableHeader } from "./ProfileWBScrollTableHeader";
import ScrollTable from "../Reuseables/ScrollTable";
import { fontSizes } from "../styles/fontSizes";
import { stepFuncNamesToText } from "../helpers/spanToText";
import { offsetToText } from "../helpers/offsetToText";
import {fontSize} from "../styles/fontSize.jss";
import Box from "@material-ui/core/Box";
import { useStyles } from "./ProfileWB.jss";

/**
 * className: profileWB class
 * color: is for W or B piece,
 * expand: given to header. opens displayBoard
 * def: spans, offsets, and img of W or B piece
 * */
export function ProfileWB({ key, color, def, expand, theme }) {

    const classes = useStyles({fontSize: fontSize, theme: theme});

    const pieceName = key;

    const getSpans = (def) => {
        if (def.spans.length === 0) {
            return Array(0);
        }
        let spanStrings = [];
        for (const span of def.spans) {
            spanStrings.push(stepFuncNamesToText[span]);
        }
        return spanStrings;
    };

    const getOffsets = (def) => {
        if (def.offsets.length === 0) {
            return Array(0);
        }

        let offsetStrings = [];
        def.offsets.forEach((offset) => {
            offsetStrings.push(offsetToText(offset));
        });
        return offsetStrings;
    };

    return (
        <div className={classes.profile_wb}>
            <Box className={classes.image}>
                <Box className={classes.img_label} style={{ fontSize: fontSizes.medium1 }}>
                    {getColorName(color)} Image
                </Box>
                <Box className={classes.img_window}>
                    <img src={def.img} className={classes.image} alt="icon of piece" />
                </Box>
            </Box>
            <ProfileWBScrollTableHeader
                rangeType="spans"
                className={classes.spans_header}
                pieceName={pieceName}
                expand={expand}
                color={color}
            />
            <ScrollTable
                listItems={getOffsets(def)}
                cellFontSize={fontSizes.medium3}
                className={classes.range_table}
            />
            <ProfileWBScrollTableHeader
                rangeType="offsets"
                className={classes.offsetsHeader}
                pieceName={pieceName}
                expand={expand}
                color={color}
            />
            <ScrollTable listItems={getSpans(def)} cellFontSize={fontSizes.medium3} className={classes.rangeTable} />
        </div>
    );
}
