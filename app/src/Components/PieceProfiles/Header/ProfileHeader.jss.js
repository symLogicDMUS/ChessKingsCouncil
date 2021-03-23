import React from "react";
import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize002, fontSize0025, fontSizeW0045, fontSizeW0048} from "../../styles/fontSizes.jss";

/**
 * Shared by custom-game (Customize) and LoadDelete (MyPieces, LoadModal in CreatePiece) headers
 * */
export const headerWidthDesktop = '46.5vw';


export const useStyles = makeStyles({
    header: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        '@media screen and (max-width: 1040px)': {

        },
        '@media screen and (min-width: 1040px)': {
            width: headerWidthDesktop,
            justifyContent: 'space-between',
        },
    }),
    piece_name: props => ({
        '@media screen and (max-width: 1040px)': {
            fontSize: '4.5vw',
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: '2.85vh',
        },
        lineHeight: '2.75rem',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
    text: props => ({
        '@media screen and (max-width: 1040px)': {
            fontSize: fontSizeW0045,
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: fontSize002,
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
    }),
}, {index: 1});
