import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import { useStyles } from "./RadioButtonsGroup.jss";
import { fontSizeAlt1 as fontSize } from "../styles/fontSize.jss";
import {FormLabel} from "@material-ui/core";

export default function RadioButtonsGroup({
    buttons,
    style,
    title,
    defaultValue,
    updateParent,
    isOverride,
    ariaLabel,
    groupName,
}) {
    const [value, setValue] = React.useState(defaultValue);

    const classes = useStyles({ fontSize: fontSize });

    const overrideItem = <Radio value="none" name="None" />;
    const handleChange = (e) => {
        setValue(e.target.value);
        if (updateParent) updateParent(e.target.value);
    };

    return (
        <Box>
            <RadioGroup
                value={isOverride ? overrideItem : value}
                onChange={handleChange}
                style={style}
                name={groupName}
                ariaLabel={ariaLabel}
            >
                {buttons}
            </RadioGroup>
        </Box>
    );
}
