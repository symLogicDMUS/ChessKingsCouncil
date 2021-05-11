import React from "react";
import {Close} from "../Modals/Close";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import {MuiDropdown} from "../UserInput/MuiDropdown";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useStyles} from "./SettingsModal.jss";
import {specialThemeList} from "../../styles/themes/specialThemeImgs/specialThemeList.jss";
import {themesMenuItemList} from "../../styles/themes/themeMenuItemList.jss";
import {Backdrop, Dialog} from "@material-ui/core";

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
        <Dialog
            open={true}
            classes={{
                paper: classes.window
            }}
            onBackdropClick={props.closeModal}
        >
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
        </Dialog>
    )
}