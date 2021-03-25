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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useStyles} from "./Range.jss";
import {fontSize002} from "../../styles/fontSizes.jss";

export function Range({spans, offsets, toggleSpan, theme, styles}) {
    const classes = useStyles({theme: theme, styles: styles});
    const classes2 = useMoreStyles({theme: theme})

    const isWide = useMediaQuery("(min-width:960px)");
    const screenCase = isWide ? 'wide' : 'thin';
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
            <MediaQuery minWidth={960}>
                <Typography className={classes2.tool_title}>Range</Typography>
            </MediaQuery>
            <ScrollTable
                numRows={5}
                theme={theme}
                width='10.625vw'
                fontSize={fontSize002}
                listItemClassName={classes.scroll_table_list_item}
                arrowButtonClassName={classes.scroll_table_arrow_button}
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
