import React from "react";
import MediaQuery from "react-responsive/src";
import {MuiCheckbox} from "../../Reuseables/Clickables/MuiCheckbox";
import {useStyles} from "../../PieceProfiles/Header/CustomizeHeader.jss";

export function PromoCheckboxExample({theme}) {
    const classes = useStyles({theme});
    return (
        <>
            <MuiCheckbox
                classProp={classes.checkbox_gen}
                rootClassProp={classes.checkbox_root}
                theme={theme}
            >
                <MediaQuery minWidth={960}>Promotion</MediaQuery>
                <MediaQuery maxWidth={960}>Promo</MediaQuery>
            </MuiCheckbox>
            <MuiCheckbox
                classProp={classes.checkbox_gen}
                theme={theme}
            >
                Promo All
            </MuiCheckbox>
        </>
    )
}