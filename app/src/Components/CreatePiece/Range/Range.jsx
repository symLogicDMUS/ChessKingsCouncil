import React from "react";
import Box from "@material-ui/core/Box";
import {Portal, Typography} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import {angleToText} from "../../helpers/spanToText";
import {offsetToText} from "../../helpers/offsetToText";
import {SpanArrowButtons} from "./SpanArrowButtons/SpanArrowButtons";
import {drawerWidth} from "../../Reuseables/Drawers/PermanentDrawer.jss";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import {useStyles as useMoreStyles} from "../CreatePiece.jss"
import {useStyles} from "./Range.jss";

export function Range({spans, offsets, toggleSpan, theme, screenCase, styles}) {
    const classes = useStyles({theme: theme, styles: styles});
    const classes2 = useMoreStyles({theme: theme})

    const getSpanTextLabels = () => {
        const newSpans = [];
        for (const angle of Object.keys(spans)) {
            if (spans[angle]) {
                newSpans.push(angleToText[angle]);
            }
        }
        return newSpans;
    };

    const getOffsetTextLabels = () => {
        return offsets.map((offset) => offsetToText(offset));
    };

    return (
        <Box className={classes.range_tool}>
            <MediaQuery minWidth={1040}>
                <Typography className={classes2.tool_title}>Range</Typography>
            </MediaQuery>
            <ScrollTable
                numRows={5}
                theme={theme}
                width='9em'
                fontSize={(drawerWidth - 55) * 0.5 * 0.333 * 0.333}
                rootClassProp={classes.scroll_table_style}
                listItemClassProp={classes.scroll_table_list_item}
                arrowButtonClassProp={classes.scroll_table_arrow_button}
                listItems={[...getSpanTextLabels(), ...getOffsetTextLabels()]}
            />
            <div className={classes.divider} />
            <SpanArrowButtons
                spans={spans}
                toggleSpan={toggleSpan}
                screenCase={screenCase}
                theme={theme}
            />
        </Box>
    );
}
