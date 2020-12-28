import {themes} from "../../styles/themes.jss";
import React from "react";
import {mobileScaler} from "../ProfileWB.jss";

/**
 * Shared by custom-game (Customize) and LoadDelete (MyPieces, LoadModal in CreatePiece) headers
 * */

export const header = (fontSize, style, theme) => ({
    ...style,
    '@media screen and (min-width: 768px)': {
        fontSize: fontSize,
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize * mobileScaler
    },
    // fontSize: fontSize,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    backgroundColor: themes[theme].fill,
});

export const text = (fontSize, theme) => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSize,
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize * mobileScaler
    },
    fontFamily: 'Roboto-Light, Roboto',
    color: themes[theme].text,
});