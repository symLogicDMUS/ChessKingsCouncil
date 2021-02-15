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
                <MediaQuery minAspectRatio={'1001/1000'} minDeviceWidth={768}>Promotion</MediaQuery>
                <MediaQuery maxAspectRatio={'1/1'}>Promo</MediaQuery>
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