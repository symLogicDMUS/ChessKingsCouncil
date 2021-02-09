import {makeStyles} from "@material-ui/core/styles"
import {getTextWidth} from "../helpers/getTextWidth.jss";
import {themes} from "../styles/themes.jss";
import {
    fontSize012,
    fontSize0016,
    fontSize0018,
    fontSize01,
    fontSize0095, fontSize0085
} from "../styles/fontSizes.jss";


export const fontSizes = {
    desktop: fontSize012,
    mobile: window.screen.availWidth*0.185,
    ipx: fontSize0085,
}

export const input_style = (text, fontSize, fontFamily, theme) => ({
    fontSize: fontSize,
    color: themes[theme].text,
    width: getTextWidth(text, fontSize, fontFamily) * 0.9,
})

export const play_button = (theme) => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSize0016,
        width: getTextWidth('Play As', fontSizes.desktop, 'Garamond'),
        margin: '2em'
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize0018,
        width: getTextWidth('Play As', fontSizes.mobile, 'Garamond'),
        margin: '2.5em'
    },
    "@media (max-aspect-ratio: 1/2)": {
        fontSize: fontSize0018,
        width: getTextWidth('Play As', fontSizes.ipx, 'Garamond'),
        margin: '2.5em'
    },
    color: themes[theme].button_fill,
    alignSelf: 'center'
})

export const useStyles = makeStyles({
    new_game: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (min-width: 768px)': {
            justifyContent: 'center',
            alignContent: 'center',
        },
        '@media screen and (max-width: 767px)': {
            justifyContent: 'space-evenly',
            alignContent: 'space-evenly',
        },
    }),
});
