import React from "react";
import {Close} from "../Modals/Close";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import {MuiDropdown} from "../UserInput/MuiDropdown";
import {specialThemeList, themesMenuItemList} from "../../styles/themes.jss";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useStyles} from "./SettingsModal.jss";

export function SettingsModal(props) {
    const isWide = useMediaQuery("(min-width: 960px)");

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
                <Box className={classes.close_area}>
                    <Close
                        onClick={props.closeModal}
                        theme={props.theme}
                        className={classes.close}
                        iconClassName={classes.close_icon}
                    />
                </Box>
                <Box className={classes.settings}>
                    <MuiDropdown
                        label='theme'
                        fullWidth={true}
                        autoFocus={true}
                        variant='outlined'
                        inputLabel='theme'
                        theme={props.theme}
                        updateParent={props.updateTheme}
                        size={isWide ? 'medium' : 'small'}
                        overrideItem={getOverrideItem(props.theme)}
                        className={classes.select_theme}
                    >
                        {themesMenuItemList}
                    </MuiDropdown>
                    {props.children}
                </Box>
            </Box>
        </div>
    )
}