import React from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {MuiCheckbox} from "../../../Reuseables/MuiCheckbox";
import { useStyles } from "./PromoCheckboxExample.jss";

export function PromoCheckboxExample({fontSize, theme}) {
    const classes = useStyles({theme});
    return (
        <Box className={classes.promo_checkbox_example} >
            <MuiCheckbox
                style={{fontSize: fontSize}}
                rootStyle={{fontSize: fontSize, marginRight: '1.5em'}}
                theme={theme}
            >
                <MediaQuery minAspectRatio={'1/1'} minDeviceWidth={992}>Promotion</MediaQuery>
                <MediaQuery maxAspectRatio={'1/1'}>Promo</MediaQuery>
            </MuiCheckbox>
            <MuiCheckbox
                style={{fontSize: fontSize}}
                rootStyle={{fontSize: fontSize, marginRight: '1.5em'}}
                theme={theme}
            >
                Promo All
            </MuiCheckbox>
        </Box>
    )
}