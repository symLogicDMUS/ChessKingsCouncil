import React from "react";
import {Close} from "../Modals/Close";
import Box from "@material-ui/core/Box";
import {MuiDropdown} from "../UserInput/MuiDropdown";
import {fontSize002} from "../../styles/fontSizes.jss";
import {specialThemeList, themesMenuItemList} from "../../styles/themes.jss";
import MenuItem from "@material-ui/core/MenuItem";
import {close_icon} from "../Modals/StandardModal.jss";
import {input_label, useStyles} from "./SettingsModal.jss";


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
                        updateParent={props.updateTheme}
                        overrideItem={getOverrideItem(props.theme)}
                        label='theme'
                        fullWidth={true}
                        autoFocus={true}
                        variant='outlined'
                        inputLabel='theme'
                        theme={props.theme}
                        inputLabelStyle={
                            input_label(props.theme)
                        }
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