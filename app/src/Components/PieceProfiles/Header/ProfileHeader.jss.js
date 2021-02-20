import React from "react";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "../PieceProfiles.jss";
import {fontSizeW005, fontSizeW0055} from "../../styles/fontSizes.jss";

export const headerFontSizes = {
    desktop: fontSizes.desktop,
    mobile: fontSizeW0055,
    ipx: fontSizeW005,
    ipad: fontSizes.ipad,
    short: fontSizes.short,
}

export const titleFontSizes = {
    desktop: headerFontSizes.desktop* 0.8,
    mobile: headerFontSizes.mobile*0.8,
    ipx: headerFontSizes.ipx*0.8,
    ipad: headerFontSizes.ipad*0.8,
    short: headerFontSizes.short*0.8,
}

/**
 * Shared by custom-game (Customize) and LoadDelete (MyPieces, LoadModal in CreatePiece) headers
 * */

export const header = (style, theme) => ({
    ...style,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: themes[theme].fill,
    '@media (max-aspect-ratio: 1/1)': {
        fontSize: fontSizes.mobile,
    },
    '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
        marginTop: '1em',
        fontSize: fontSizes.desktop,
    },
    "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
        marginTop: '0.25em',
        fontSize: fontSizes.ipx,
    },
    /*shortest phones*/
    "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
        fontSize: fontSizes.short,
    },
    '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
        marginTop: '0.5em',
        fontSize: fontSizes.ipad,
    },
});

export const text = (theme) => ({
    '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
        fontSize: fontSizes.desktop,
    },
    '@media (max-aspect-ratio: 1/1)': {
        fontSize: fontSizes.mobile,
    },
    "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
        fontSize: fontSizes.ipx,
    },
    /*shortest phones*/
    "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
        fontSize: fontSizes.short,
    },
    '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
        fontSize: fontSizes.ipad,
    },
    fontFamily: 'Roboto-Light, Roboto',
    color: themes[theme].text,
});