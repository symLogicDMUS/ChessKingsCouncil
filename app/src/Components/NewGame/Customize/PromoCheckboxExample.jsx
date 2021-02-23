import React from "react";
import {MuiCheckbox} from "../../Reuseables/MuiCheckbox";
import {checkbox_root, checkbox_gen} from "../../PieceProfiles/Header/CustomizeHeader.jss";
import MediaQuery from "react-responsive/src";

export function PromoCheckboxExample({theme}) {
    return (
        <>
            <MuiCheckbox
                style={checkbox_gen()}
                rootStyle={{...checkbox_root(theme), marginRight: '1.5em'}}
                theme={theme}
            >
                <MediaQuery minDeviceWidth={1040}>Promotion</MediaQuery>
                <MediaQuery maxDeviceWidth={1040}>Promo</MediaQuery>
            </MuiCheckbox>
            <MuiCheckbox
                style={checkbox_gen()}
                theme={theme}
            >
                Promo All
            </MuiCheckbox>
        </>
    )
}