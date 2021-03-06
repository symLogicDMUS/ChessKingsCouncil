import React from "react";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "../PieceProfiles.jss";

/**
 * Shared by custom-game (Customize) and LoadDelete (MyPieces, LoadModal in CreatePiece) headers
 * */

export const header = (style, theme) => ({
    ...style,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    backgroundColor: themes[theme].fill,
    '@media screen and (min-width: 768px)': {
        fontSize: fontSizes.desktop,
        width: '37.5em',
        marginLeft: '1.3em',
        justifyContent: 'flex-start',
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSizes.mobile,
        width: '100%',
    },
});

export const text = (theme) => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSizes.desktop,
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSizes.mobile,
    },
    fontFamily: 'Roboto-Light, Roboto',
    color: themes[theme].text,
});