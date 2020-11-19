import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import "./CheckBox.scss";

/**Checkbox with label */
export function CheckBox({
    screenCase,
    styleObjects,
    clickMethod,
    clickValue,
    heightValue,
    labelText,
    fontFamily,
    checkmarkState,
}) {
    const checkboxStyle = {
        fontSize: heightValue * 0.8,
        width: "1.5em",
        height: "1.5em",
        transform: "translate(0, -0.12em)",
    };
    return (
        <div>
            <div
                style={{
                    fontFamily: fontFamily,
                    fontSize: heightValue * 0.8,
                    display: "inline-block",
                    // border: "1px dashed red",
                    lineHeight: 1,
                }}
                className="check-box"
            >
                {labelText}
                <Checkbox
                    icon={<CheckBoxOutlineBlankIcon style={checkboxStyle} />}
                    checkedIcon={<CheckBoxIcon style={checkboxStyle} />}
                    onClick={() => clickMethod(clickValue)}
                    //style={styleObjects[screenCase]['']}
                    checked={checkmarkState}
                    className="check-box"
                    name="checkedI"
                />
            </div>
        </div>
    );
}
