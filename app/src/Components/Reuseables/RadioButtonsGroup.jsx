import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";

export default function RadioButtonsGroup({
    buttons,
    style,
    defaultValue,
    updateParent,
    isOverride,
    ariaLabel,
    groupName,
}) {
    const [value, setValue] = React.useState(defaultValue);

    const overrideItem = <Radio value="none" name="None" />;
    const handleChange = (e) => {
        setValue(e.target.value);
        if (updateParent) updateParent(e.target.value);
    };

    return (
        <FormControl component="fieldset">
                <RadioGroup
                    value={isOverride ? overrideItem : value}
                    onChange={handleChange}
                    style={style}
                    name={groupName}
                    ariaLabel={ariaLabel}
                >
                    {buttons}
                </RadioGroup>
        </FormControl>
    );
}
