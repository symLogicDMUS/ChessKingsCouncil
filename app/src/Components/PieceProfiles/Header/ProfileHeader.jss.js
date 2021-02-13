import React from "react";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "../PieceProfiles.jss";
import {fontSizeW005, fontSizeW0055} from "../../styles/fontSizes.jss";

export const headerFontSizes = {
    desktop: fontSizes.desktop,
    mobile: fontSizeW0055,
    ipx: fontSizeW005,
    ipad: fontSizes.ipad,
}

export const titleFontSizes = {
    desktop: headerFontSizes.desktop* 0.8,
    mobile: headerFontSizes.mobile*0.8,
    ipx: headerFontSizes.ipx*0.8,
    ipad: headerFontSizes.ipad*0.8
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
    '@media (min-aspect-ratio: 1001/1000)': {
        marginTop: '1em',
        fontSize: fontSizes.desktop,
    },
    "@media (max-aspect-ratio: 1/2)": {
        marginTop: '0.25em',
        fontSize: fontSizes.ipx,
    },
    '@media (aspect-ratio: 1024/1366)': {
        marginTop: '0.5em',
        fontSize: fontSizes.ipad,
    },
});

export const text = (theme) => ({
    '@media (min-aspect-ratio: 1001/1000)': {
        fontSize: fontSizes.desktop,
    },
    '@media (max-aspect-ratio: 1/1)': {
        fontSize: fontSizes.mobile,
    },
    "@media (max-aspect-ratio: 1/2)": {
        fontSize: fontSizes.ipx,
    },
    '@media (aspect-ratio: 1024/1366)': {
        fontSize: fontSizes.ipad,
    },
    fontFamily: 'Roboto-Light, Roboto',
    color: themes[theme].text,
});