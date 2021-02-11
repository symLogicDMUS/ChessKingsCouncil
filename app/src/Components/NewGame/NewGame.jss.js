import {makeStyles} from "@material-ui/core/styles"
import {getTextWidth} from "../helpers/getTextWidth.jss";
import {
    fontSize012,
    fontSize0016,
    fontSize0018,
    fontSize01,
    fontSizeW018, fontSizeW0185, fontSizeW0182, fontSize00236, fontSize002,
} from "../styles/fontSizes.jss";

export const fontSizes = {
    desktop: fontSize012,
    mobile: fontSizeW0182,
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
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        '@media and (min-aspect-ratio 16/9)': {
            justifyContent: 'center',
            alignContent: 'center',
        },
        '@media and (max-aspect-ratio 1/1)': {
            justifyContent: 'space-evenly',
            alignContent: 'space-evenly',
        },

    }),
    item: props => ({
        margin: 'auto'
    }),
    title: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            textAlign: 'center'
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            textAlign: 'center'
        },
        '@media (aspect-ratio: 1024/1366)':{
            fontSize: fontSizes.ipad,
            textAlign: 'center'
        },
        fontFamily: 'Garamond',
        lineHeight: '1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    game_types: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    }),
    play_button: props => ({
        '@media (min-aspect-ratio 16/9)': {
            fontSize: fontSize0016,
            margin: '4em',
        },
        '@media (max-aspect-ratio 1/1)': {
            fontSize: fontSize0018,
            margin: '4em',
        },
        '@media (aspect-ratio: 1024/1366)':{
            fontSize: fontSize002,
            margin: '3em',
        },
        width: '100%',
    }),
});
