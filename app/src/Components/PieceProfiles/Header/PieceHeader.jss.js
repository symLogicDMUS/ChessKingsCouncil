import {themes} from "../../styles/themes.jss";
import React from "react";

/**
 * Shared by custom-game (Customize) and LoadDelete (MyPieces, LoadModal in CreatePiece) headers
 * */

export const header = (fontSize, style, theme) => ({
    ...style,
    fontSize: fontSize,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: themes[theme].fill,
});

export const text = (fontSize, theme) => ({
    fontSize: fontSize*1.5,
    fontFamily: 'Roboto-Light, Roboto',
    color: themes[theme].text,
});