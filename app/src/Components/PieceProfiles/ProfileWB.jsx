import React from "react";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { getColorName } from "../helpers/getColorName";
import {fontSize} from "../styles/fontSize.jss";
import { stepFuncNamesToText } from "../helpers/spanToText";
import { offsetToText } from "../helpers/offsetToText";
import ScrollTable from "../Reuseables/ScrollTable";
import { useStyles } from "./ProfileWB.jss";
import {availWidth} from "../helpers/windowMeasurments";

/**
 * className: profileWB class
 * color: is for W or B piece,
 * expand: given to header. opens displayBoard
 * def: spans, offsets, and img of W or B piece
 * */
export function ProfileWB({ pieceName, color, def, expand, theme }) {

    const classes = useStyles({fontSize: fontSize, theme: theme});
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
                <Box className={classes.img_label}>
                    {getColorName(color)} Image
                </Box>
                <Box className={classes.img_window}>
                    <img src={def.img} className={classes.image} alt="icon of piece" />
                </Box>
            </Box>
            <ScrollTable
                listItems={getOffsets(def)}
                title={
                    <Box className={classes.range_header}>
                        <Typography className={classes.range_title}>{getColorName(color)} Offsets</Typography>
                        <IconButton
                            className={classes.range_expand_widget}
                            onClick={() => expand(pieceName, color, 'offsets')}
                        >
                            <AddIcon />
                        </IconButton>
                    </Box>
                }
                style={{fontSize: fontSize, width: availWidth()* 0.4}}
                theme={theme}
            />
            <ScrollTable
                listItems={getSpans(def)}
                title={
                    <Box className={classes.range_header}>
                        <Typography className={classes.range_title}>{getColorName(color)} Spans</Typography>
                        <IconButton className={classes.range_expand_widget}
                                    onClick={() => expand(pieceName, color, 'spans')}
                        >
                            <AddIcon />
                        </IconButton>
                    </Box>
                }
                style={{fontSize: fontSize, width: availWidth()* 0.4}}
                theme={theme}
            />
        </div>
    );
}


/*
        <div className={classes.range_header}>
            <div className={classes.colorAndRangeType}>
                {getColorName(color)} {rangeType}
            </div>
            <IconButton
                className={classes.expandWidget}
                onClick={() => expand(pieceName, color, rangeType)}
            >
                <img className={classes.expandWidgetIcon} src={src} alt="expand icon"/>
            </div>
        </div>
* */