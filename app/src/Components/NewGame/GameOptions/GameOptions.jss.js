import {makeStyles} from "@material-ui/core/styles"
import {availWidth} from "../../helpers/windowMeasurments";
import {fontSize018, fontSize012, fontSize0115, fontSize0016, fontSize0018} from "../../styles/fontSizes.jss";
import {getTextWidth} from "../../helpers/getTextWidth.jss";
import {themes} from "../../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize012,
    mobile: fontSize018,
}

export const input_style = (text, fontSize, fontFamily, theme) => ({
    fontSize: fontSize,
    color: themes[theme].text,
    width: getTextWidth(text, fontSize, fontFamily) * 0.95,
})

export const play_button = (theme) => ({
    '@media screen and (min-width: 768px)': {
        fontSize: fontSize0016,
        width: getTextWidth('Play As', fontSize0115, 'Garamond'),
        margin: '2em'
    },
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize0018,
        width: getTextWidth('Play As', fontSizes.mobile, 'Garamond'),
        margin: '2.5em'
    },
    color: themes[theme].button_fill,
    alignSelf: 'center'
})

export const useStyles = makeStyles({
    game_options: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        '@media screen and (min-width: 768px)': {
            width: '100%',
        },
        '@media screen and (max-width: 767px)': {
            justifyContent: 'space-between',
            width: '100%',
        },
    }),
});
