import React, {useState} from "react";
import {Close} from "../Close";
import Box from "@material-ui/core/Box";
import {MuiDropdown} from "../MuiDropdown";
import {specialThemeList, themesMenuItemList} from "../../styles/themes.jss";
import {fontSize002} from "../../styles/fontSizes.jss";
import {close_icon} from "../StandardModal.jss";
import { useStyles } from "./SettingsModal.jss";
import {MuiTextField as TextField} from "../MuiTextField";
import MenuItem from "@material-ui/core/MenuItem";

export function SettingsModal(props) {
    const classes = useStyles({theme: props.theme});

    const getOverrideItem = (theme) => {
        if (specialThemeList.includes(theme)) {
            return (
                <MenuItem value="None">
                    <em>None</em>
                </MenuItem>
            );
        }
        else {
            return props.theme;
        }
    };

    return (
        <div className={classes.modal}>
            <Box className={classes.window}>
                <Box className={classes.close_icon_flexbox}>
                    <Close
                        onClick={props.closeModal}
                        style={close_icon(fontSize002)}
                        theme={props.theme}
                    />
                </Box>
                <Box className={classes.settings}>
                    <MuiDropdown
                        theme={props.theme}
                        overrideItem={getOverrideItem(props.theme)}
                        updateParent={props.updateTheme}
                        fullWidth={true}
                        autoFocus={true}
                        variant='outlined'
                        label='theme'
                        inputLabel='theme'
                        size={(props.screenCase === 'desktop') ? 'medium' : 'small'}
                    >
                        {themesMenuItemList}
                    </MuiDropdown>
                    {props.children}
                </Box>
            </Box>
        </div>
    )
}