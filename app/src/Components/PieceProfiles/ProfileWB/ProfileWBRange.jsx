import React, {useMemo} from "react";
import Box from "@material-ui/core/Box";
import {rankfiles} from "../../helpers/rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import { ProfileWBRangeHeader } from "../ProfileWBRangeHeader";
import {ProfileWBRangeSquare} from "./ProfileWBRangeSquare";
import {ProfileWBRangePiece} from "./ProfileWBRangePiece";
import {stepFuncDict2} from "../../helpers/stepFuncs";
import {outOfBounds as oob} from "../../helpers/oob";
import {rfToXy, xyToRf} from "../../helpers/crdCnvrt";
import { useStyles } from "./ProfileWBRange.jss";

export const ProfileWBRange = ({
    pieceLoc,
    pieceName,
    pieceImgUrl,
    theme,
    color,
    rangeType,
    range,
    openRangeModal,
    hasDrawerParent,
    screenCase
}) => {
    const classes = useStyles({ theme: theme, hasDrawerParent: hasDrawerParent });

    const getSpanRf = (stepFuncName) => {
        const span = []
        const stepFunc = stepFuncDict2[stepFuncName];
        let rf = stepFunc(pieceLoc);
        while (!oob(rf)) {
            span.push(rf)
            rf = stepFunc(rf);
        }
        return span
    };

    const getSpans = (stepFuncNames) => {
        const spans = []
        for (const stepFuncName of stepFuncNames) {
            spans.push(...getSpanRf(stepFuncName))
        }
        return spans
    };

    const getOffsetRf = (offset) => {
        let [x1, y1] = rfToXy(pieceLoc);
        let dx = x1 + offset[0];
        let dy = y1 + offset[1];
        return xyToRf(dx, dy);
    };

    const getOffsets = (offsetTuples) => {
        const offsets = []
        for (const offsetTuple of offsetTuples) {
            offsets.push(getOffsetRf(offsetTuple))
        }
        return offsets;
    };

    const getRangeRfList = (range, rangeType) => {
        if (rangeType === 'span') {
            return getSpans(range)
        }
        else {
            return getOffsets(range)
        }
    };

    const rangeRfList = useMemo(() => getRangeRfList(range, rangeType), [])

    const getBoard = () => {
        const squares = [];
        for (const rf of rankfiles) {
            if (rf === pieceLoc) {
                squares.push(
                    <ProfileWBRangeSquare
                        rf={rf}
                        key={rf}
                        theme={theme}
                        isLightSqr={binaryBoard[rf]}
                        isInRange={rangeRfList.includes(rf)}
                        rangeType={rangeType}
                        screenCase={screenCase}
                    >
                        <ProfileWBRangePiece
                            pieceImgUrl={pieceImgUrl}
                            alt={pieceName}
                            key={pieceName}
                        />
                    </ProfileWBRangeSquare>
                );
            } else {
                squares.push(
                    <ProfileWBRangeSquare
                        rf={rf}
                        key={rf}
                        theme={theme}
                        isLightSqr={binaryBoard[rf]}
                        isInRange={rangeRfList.includes(rf)}
                        rangeType={rangeType}
                        screenCase={screenCase}
                    >
                        {null}
                    </ProfileWBRangeSquare>
                );
            }
        }
        return squares;
    };

    return (
        <Box className={classes.profile_wb_range}>
            <ProfileWBRangeHeader
                theme={theme}
                color={color}
                rangeType={rangeType}
                openRangeModal={openRangeModal}
                hasDrawerParent={hasDrawerParent}
            />
            <Box className={classes.board_window}>
                {getBoard()}
            </Box>
        </Box>
    );
}