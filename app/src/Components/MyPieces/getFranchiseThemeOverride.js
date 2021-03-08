import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {themeList} from "../styles/themes.jss";

export const getFranchiseThemeOverride = (theme) => {
    if (themeList.includes(theme)) {
        return (
            <MenuItem value="None">
                <em>None</em>
            </MenuItem>
        );
    }
    else {
        return theme;
    }
};