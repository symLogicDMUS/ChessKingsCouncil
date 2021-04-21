import React from "react";
import {Typography} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import {angleToText} from "../../helpers/spanToText";
import {offsetToText} from "../../helpers/offsetToText";
import {useStyles as useMoreStyles} from "../CreatePiece.jss"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useStyles} from "./Range.jss";

const SpanArrowButtons = React.lazy(() => import("./SpanArrowButtons/SpanArrowButtons"));
const ScrollTable = React.lazy(() => import('../../Reuseables/ScrollTable/ScrollTable'));


function Range({spans, offsets, toggleSpan, theme, styles, toggleMiniVariantTool}) {
    const isWide = useMediaQuery("(min-width:960px)");
    const screenCase = isWide ? 'wide' : 'thin';

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
        <MediaQuery minWidth={960}>
            <span className={classes.range_tool}>
                <Typography className={classes2.tool_title}>Range</Typography>
                <ScrollTable
                    numRows={5}
                    theme={theme}
                    textClassName={classes.scroll_table_text}
                    listItemClassName={classes.scroll_table_list_item}
                    arrowButtonTopClassName={classes.top_arrow_button}
                    arrowButtonBottomClassName={classes.bottom_arrow_button}
                    arrowButtonClassName={classes.scroll_table_arrow_button}
                    listItems={[...getSpanTextLabels(), ...getOffsetTextLabels()]}
                />
                <div className={classes.divider} />
                <SpanArrowButtons
                    spans={spans}
                    theme={theme}
                    screenCase={screenCase}
                    toggleSpan={toggleSpan}
                    toggleMiniVariantTool={toggleMiniVariantTool}
                />
            </span>
        </MediaQuery>
    );
}
export default Range;