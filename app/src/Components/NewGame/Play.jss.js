import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize0016, fontSize001725, fontSize0018, fontSize002} from "../styles/fontSizes.jss";
import {viewWidth} from "../helpers/windowMeasurments";

export const icon = () => ({
    fontSize: 'inherit',
    height: '1.5em',
});

export const useStyles = makeStyles({
    root_enabled: props => ({
        '@media screen and (max-device-width: 1040px)': {
            opacity: '100%'
        },
    }),
    root_disabled: props => ({
        '@media screen and (max-device-width: 1040px)': {
            opacity: '35%'
        },
    }),
    play_button: props => ({

        /*medium/short height phones*/
        "@media screen and (min-device-width: 412px) and (max-device-width:  767px)": {
            fontSize: fontSize0018,
        },
        /*tall phones*/
        "@media screen and (max-device-width: 412px)": {
            fontSize: fontSize001725,
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)': {
            fontSize: fontSize002,
        },
        /*laptop/desktop*/
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize0016,
            width: viewWidth() * 0.174,
        },
        // marginLeft: 'auto',
        backgroundColor: themes[props.theme].fill,
    }),
    icon: props => ({
        fontSize: 'inherit',
        height: '1.5em',
    }),
}, {index: 1});