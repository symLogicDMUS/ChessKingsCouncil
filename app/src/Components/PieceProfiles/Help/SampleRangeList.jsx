import React, {memo} from "react";
import {ListItem} from "../../Reuseables/ScrollTable/ListItem";
import {stepFuncNamesToText} from "../../helpers/spanToText";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import MediaQuery from "react-responsive/src";
import {range_list_button_style, range_list_gen_style, range_list_row_style} from "./ProfileHelpText.jss";

export const SampleRangeList = memo(({theme}) => {
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
            <MediaQuery minWidth={960}>
                <ScrollTable
                    listItems={
                        rangeFuncs.map((rangeFunc) => (
                            <ListItem
                                key={rangeFunc}
                                theme={theme}
                            >
                                {stepFuncNamesToText[rangeFunc]}
                            </ListItem>
                        ))}
                    numRows={5}
                    theme={theme}
                    rowStyle={range_list_row_style()}
                    buttonStyle={range_list_button_style('desktop')}
                    style={range_list_gen_style('desktop')}
                />
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <ScrollTable
                    listItems=
                        {rangeFuncs.map((rangeFunc) => (
                            <ListItem
                                key={rangeFunc}
                                theme={theme}
                            >
                                {stepFuncNamesToText[rangeFunc]}
                            </ListItem>
                        ))}
                    numRows={5}
                    theme={theme}
                    rowStyle={range_list_row_style()}
                    buttonStyle={range_list_button_style('desktop')}
                    style={range_list_gen_style('desktop')}
                />
            </MediaQuery>
        </div>
    );
});
