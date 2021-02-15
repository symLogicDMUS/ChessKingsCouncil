import React, { memo } from "react";
import { v4 as uuidv4 } from "uuid";
import { RangeListItem } from "../RangeListItem";
import { stepFuncNamesToText } from "../../helpers/spanToText";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import MediaQuery from "react-responsive/src";
import {range_list_button_style, range_list_gen_style, range_list_row_style} from "./ProfileHelpText.jss";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";

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
            <MediaQuery minAspectRatio={'1001/1000'} minDeviceWidth={768}>
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
                    rowStyle={range_list_row_style()}
                    buttonStyle={range_list_button_style('desktop')}
                    style={range_list_gen_style('desktop')}
                />
            </MediaQuery>
            <MediaQuery maxAspectRatio={'1/1'}>
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
                    rowStyle={range_list_row_style()}
                    buttonStyle={range_list_button_style('desktop')}
                    style={range_list_gen_style('desktop')}
                />
            </MediaQuery>
        </div>
    );
});
