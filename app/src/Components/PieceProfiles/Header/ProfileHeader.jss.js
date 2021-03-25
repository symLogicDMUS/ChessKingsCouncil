import React from "react";
import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";

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
        '@media screen and (max-width: 960px)': {
            width: '90vw',
            marginLeft: '5vw',
            marginTop: '2.5vw',
        },
        '@media screen and (min-width: 960px)': {
            width: headerWidthDesktop,
            justifyContent: 'space-between',
            marginTop: '2vh',
        },
    }),
    piece_name: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '4vh',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2.85vh',
        },
        lineHeight: '2.75rem',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
}, {index: 1});
