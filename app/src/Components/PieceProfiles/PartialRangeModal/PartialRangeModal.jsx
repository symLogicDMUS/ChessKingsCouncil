import React, { useEffect, useReducer } from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {Close} from "../../Reuseables/Close";
import { RangeList } from "./RangeList";
import {getColorName} from "../../helpers/getColorName";
import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";
import { getPartialRangeBoardComponent } from "./getPartialRangeBoardComponent";
import { reducer } from "./PartialRangeModal.red";
import { close_style, useStyles } from "./PartialRangeModal.jss";

export function PartialRangeModal({
    range,
    rangeType,
    close,
    src,
    color,
    theme,
    pieceName,
    screenCase,
}) {
    const [state, dispatch] = useReducer(reducer, {
        location: "d4",
        src: src,
        theme: theme,
        board: getPartialRangeBoardComponent(
            getBinaryBoarAllFalse(),
            "d4",
            src,
            theme,
            null
        ),
    });

    const classes = useStyles({ theme: theme});

    return (
        <div>
            <Box className={classes.top}>
                <Typography className={classes.title}>{getColorName(color)} {pieceName}</Typography>
                <Close onClick={close} theme={theme} style={close_style()} />
            </Box>
            <div className={classes.partial_range_board}>
                {state.board}
            </div>
            <RangeList
                range={range}
                rangeType={rangeType}
                parentDispatch={dispatch}
                screenCase={screenCase}
                theme={theme}
            />
        </div>
    );
}
