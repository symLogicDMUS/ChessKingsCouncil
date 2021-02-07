import React from "react";
import {MuiCheckbox} from "../../Reuseables/MuiCheckbox";
import {checkbox_root, checkbox_style} from "../../PieceProfiles/Header/CustomizeHeader.jss";
import MediaQuery from "react-responsive/src";

export function PromoCheckboxExample({theme}) {
    return (
        <>
            <MuiCheckbox
                style={checkbox_style()}
                rootStyle={{...checkbox_root(theme), marginRight: '1.5em'}}
                theme={theme}
            >
                <MediaQuery minDeviceWidth={768}>Promotion</MediaQuery>
                <MediaQuery maxDeviceWidth={767}>Promo</MediaQuery>
            </MuiCheckbox>
            <MuiCheckbox
                style={checkbox_style()}
                theme={theme}
            >
                Promo All
            </MuiCheckbox>
        </>
    )
}