import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import {checkBoxStyle} from "./CheckBox.jss";
/**
 * arguments
 * position: the position object includes left/top values and may include margins
*/
export function CheckBox({ screenCase, theme, position, fontSize, fontFamily, clickMethod, clickValue, labelText, checkmarkState }) {
    const checkboxStyle = checkBoxStyle[screenCase].checkbox(fontSize, fontFamily, theme);
    const labelStyle = checkBoxStyle[screenCase].label(fontSize, fontFamily, theme);
    return (
            <div className={this.props.className}>
                <div className={classes.label}>
                    {labelText}
                    <Checkbox
                        icon={<CheckBoxOutlineBlankIcon className={checkboxStyle.checkbox.unchecked} />}
                        checkedIcon={<CheckBoxIcon style={checkboxStyle.checkbox.checked} />}
                        onClick={() => clickMethod(clickValue)}
                        checked={checkmarkState}
                        name="checkedI"
                    />
                </div>
            </div>
    );
}
