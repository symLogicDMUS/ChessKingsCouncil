import React from "react";
import {themes} from "../../styles/themes.jss";
import {fontSize0023, fontSize00301} from "../../styles/fontSizes.jss";
import {fontSizes} from "../ProfileWB.jss";

/**
 * Shared by custom-game (Customize) and LoadDelete (MyPieces, LoadModal in CreatePiece) headers
 * */

export const header = (fontSize, style, theme) => ({
    ...style,
    '@media screen and (min-width: 768px)': {
        fontSize: fontSizes.desktop,
        width: '37.5em',
        marginLeft: '1.3em'
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSizes.mobile,
    },
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: themes[theme].fill,
});

export const text = (theme) => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSize0023,
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize00301
    },
    fontFamily: 'Roboto-Light, Roboto',
    color: themes[theme].text,
});