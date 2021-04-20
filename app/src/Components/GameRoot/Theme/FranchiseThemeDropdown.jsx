import React from "react";
import clsx from "clsx";
import {MuiDropdown} from "../../Reuseables/UserInput/MuiDropdown";
import {getFranchiseThemeOverride} from "../../../API/sampleData/specialThemeImgs/getFranchiseThemeOverride";
import {specialThemeMenuItemList} from "../../styles/themes.jss";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/SettingsModal.jss";
import { useStyles } from "./FranchiseThemeDropdown.jss";

export function FranchiseThemeDropdown(props) {
    const classes = useStyles();
    const classes2 = useMoreStyles({theme: props.theme});
    return <MuiDropdown
        size="medium"
        fullWidth={true}
        variant="outlined"
        theme={props.theme}
        label="franchise theme"
        inputLabel="franchise theme"
        updateParent={props.updateParent}
        overrideItem={getFranchiseThemeOverride(
            props.theme
        )}
        className={clsx(classes2.select_theme, {
            [classes.franchise_theme]: true
        })}
    >
        {specialThemeMenuItemList}
    </MuiDropdown>;
}