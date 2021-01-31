import React, { useReducer } from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {Close} from "../../Reuseables/Close";
import { RangeList } from "./RangeList";
import {PartialRangeBoard} from "./PartialRangeBoard";
import {getColorName} from "../../helpers/getColorName";
import { getBinaryBoarAllFalse } from
        "../../helpers/getBinaryBoardAllFalse";
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
        board: getBinaryBoarAllFalse(),
    });

    const classes = useStyles({ theme: theme});

    return (
        <div>
            <Box className={classes.top}>
                <Typography className={classes.title}>{getColorName(color)} {pieceName}</Typography>
                <Close onClick={close} theme={theme} style={close_style()} />
            </Box>
            <PartialRangeBoard
                parentDispatch={dispatch}
                boardObj={state.board}
                location={state.location}
                rangeType={rangeType}
                src={state.src}
                theme={theme}
            />
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
