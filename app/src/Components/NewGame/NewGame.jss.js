import {makeStyles} from "@material-ui/core/styles"
import {availHeight, innerHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";
import {
    fontSize012,
    fontSize0016,
    fontSize0018,
    fontSizeW018,
    fontSize002,
    fontSize001725,
    fontSizeW015,
} from "../styles/fontSizes.jss";
import Box from "@material-ui/core/Box";
import React from "react";

export const fontSizes = {
    desktop: fontSize012,
    mobile: fontSizeW015,
    ipx: fontSizeW018,
    ipad: fontSize012,
}

export const textFieldStyle = (fontSize) => ({
    text: {
        normal: {
            fontSize: fontSize,
            height: '1em',
        },
        hover: {
            fontSize: fontSize,
            height: '1em'
        },
        focused: {
            fontSize: fontSize,
            height: '1em'
        },
    },
    root: {
        normal: {
            fontSize: fontSize,
            height: '1em',
        },
        hover: {
            fontSize: fontSize,
            height: '1em'
        },
        focused: {
            fontSize: fontSize,
            height: '1em'
        },
    }
})

export const textFieldGenStyle = {
    width: '100%',
}

export const useStyles = makeStyles({
    new_game: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-evenly',
        "@media (max-aspect-ratio: 1/1)": {
            justifyContent: 'space-between',
            height: innerHeight() - (appBarHeight + innerHeight() * 0.075),
            marginTop: '7.5vh',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            height: '90vh',
            justifyContent: 'center',
            alignContent: 'center',
        },
    }),
    item: props => ({

    }),
    title: props => ({
        "@media (max-aspect-ratio: 6/10)": {
            fontSize: fontSizes.ipx,
            textAlign: 'center'
        },
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
            fontSize: fontSizes.mobile,
            textAlign: 'center',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.ipad,
            textAlign: 'center'
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSizes.desktop,
        },
        fontFamily: 'Garamond',
        lineHeight: '1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    title_container: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }),
    game_name_container: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }),
    game_types: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: fontSize002,
        marginTop: '1em',
        width: '100%',
    }),
    player_types: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }),
    player_type: props => ({
        fontSize: fontSize0018,
    }),
    play_button: props => ({
        '@media (max-aspect-ratio: 6/10)': {
            fontSize: fontSize001725,
            margin: '1em',
        },
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
            fontSize: fontSize0018,
            margin: '1.5em',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
            margin: '1em',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize0016,
            margin: '1.5em',
        },
        width: '100%',
    }),
});
