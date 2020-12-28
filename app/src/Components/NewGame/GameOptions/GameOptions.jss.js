import {makeStyles} from "@material-ui/core/styles"
import {availWidth} from "../../helpers/windowMeasurments";
import {themes} from "../../styles/themes.jss";

export const submit_button = (fontSize, fontScaler, theme) => ({
    fontSize: fontSize * fontScaler,
    color: themes[theme].button_fill,
    alignSelf: 'center',
    width: `${18 / fontScaler}em`,
    margin: `${1.2}em`,
})

export const useStyles = makeStyles({
    game_options: props => ({
        '@media screen and (min-width: 768px)': {
            width: availWidth(),
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
        },
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'space-between',
    }),
});