import React, {useState} from "react";
import Select from "@material-ui/core/Select";

export function MuiSelect(props) {

    const {updateParent, children, overrideItem, ...other} = props;

    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        setSelected(e.target.value);
        if (props.updateParent) {
            props.updateParent(e.target.value);
        }
    };

    return (
        <Select
            onChange={handleChange}
            value={!!overrideItem ? overrideItem : selected}
            {...other}
        >
            {props.children}
        </Select>
    );
}