import React, {useState} from "react";
import {Close} from "../Close";
import Box from "@material-ui/core/Box";
import {MuiDropdown} from "../MuiDropdown";
import {themesList} from "../../styles/themes.jss";
import {fontSize002} from "../../styles/fontSizes.jss";
import {close_icon} from "../StandardModal.jss";
import { useStyles } from "./SettingsModal.jss";
import {MuiTextField as TextField} from "../MuiTextField";

export function SettingsModal(props) {
    const classes = useStyles({theme: props.theme});

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
                        list={themesList}
                        theme={props.theme}
                        overrideItem={props.theme}
                        updateParent={props.updateTheme}
                        fullWidth={true}
                        autoFocus={true}
                        variant='outlined'
                        label='theme'
                        inputLabel='theme'
                        size={(props.screenCase === 'desktop') ? 'medium' : 'small'}
                    />
                    {props.children}
                </Box>
            </Box>
        </div>
    )
}