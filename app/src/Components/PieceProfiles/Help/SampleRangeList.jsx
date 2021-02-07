import React, { memo } from "react";
import { v4 as uuidv4 } from "uuid";
import { RangeListItem } from "../RangeListItem";
import { stepFuncNamesToText } from "../../helpers/spanToText";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import {board} from "../../Reuseables/Board.jss";
import {fontSizes} from "./SampleRangeBoard";
import MediaQuery from "react-responsive/src";

export const SampleRangeList = memo(({ theme }) => {
    const rangeFuncs = [
        "step_1sqr90d",
        "step_1sqr45d",
        "step_1sqr0d",
        "step_1sqr315d",
        "step_1sqr270d",
        "step_1sqr225d",
        "step_1sqr180d",
        "step_1sqr135d",
    ];
    return (
        <div>
            <MediaQuery minDeviceWidth={768}>
                <ScrollTable
                    numRows={5}
                    listItems={rangeFuncs.map((rangeFunc) => (
                        <RangeListItem
                            key={uuidv4()}
                            theme={theme}
                            rangeText={stepFuncNamesToText[rangeFunc]}
                        />
                    ))}
                    theme={theme}
                    rowStyle={{
                        cursor: 'pointer'
                    }}
                    buttonStyle={{
                        borderRadius: 0,
                        fontSize: fontSizes.desktop,
                        width: '101%'
                    }}
                    style={{
                        height: 8, //converted to em units in ScrollTable.jss
                        fontSize: fontSizes.desktop,
                        width: board(fontSizes.desktop).width
                    }}
                />
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767}>
                <ScrollTable
                    numRows={5}
                    listItems={rangeFuncs.map((rangeFunc) => (
                        <RangeListItem
                            key={uuidv4()}
                            theme={theme}
                            rangeText={stepFuncNamesToText[rangeFunc]}
                        />
                    ))}
                    theme={theme}
                    rowStyle={{
                        cursor: 'pointer'
                    }}
                    buttonStyle={{
                        borderRadius: 0,
                        fontSize: fontSizes.mobile,
                        width: '101%'
                    }}
                    style={{
                        height: 8, //converted to em units in ScrollTable.jss
                        fontSize: fontSizes.mobile,
                        width: board(fontSizes.desktop).width
                    }}
                />
            </MediaQuery>
        </div>
    );
});
