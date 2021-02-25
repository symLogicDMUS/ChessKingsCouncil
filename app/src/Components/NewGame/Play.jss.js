import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize0016, fontSize001725, fontSize0018, fontSize002} from "../styles/fontSizes.jss";
import {viewWidth} from "../helpers/windowMeasurments";

export const icon = () => ({
    fontSize: 'inherit',
    height: '1.5em',
});

export const useStyles = makeStyles({
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
        /*phones/tablets (generalized)*/
        '@media screen and (max-device-width: 1040px)':{
            width: viewWidth() * 0.4,
        },
        /*laptop/desktop*/
        '@media screen and (min-device-width: 1040px)': {
            width: viewWidth() * 0.175,
        },
        // marginLeft: 'auto',
        backgroundColor: themes[props.theme].fill,
        transform: 'translate(0, -1em)',
    }),
    icon: props => ({
        fontSize: 'inherit',
        height: '1.5em',
    }),
}, {index: 1});