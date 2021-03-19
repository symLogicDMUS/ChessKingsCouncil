import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize001725, fontSize0018, fontSize002} from "../styles/fontSizes.jss";
import {viewWidth} from "../helpers/windowMeasurments";

export const icon = () => ({
    fontSize: 'inherit',
    height: '1.5em',
});

export const useStyles = makeStyles({
    play_button: props => ({
        /*medium/short height phones*/
        "@media screen and (min-width: 412px) and (max-width:  767px)": {
            fontSize: fontSize0018,
        },
        /*tall phones*/
        "@media screen and (max-width: 412px)": {
            fontSize: fontSize001725,
        },
        /*tablets*/
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            fontSize: fontSize002,
        },
        /*phones/tablets (generalized)*/
        '@media screen and (max-width: 1040px)':{
            width: viewWidth() * 0.4,
        },
        /*laptop/desktop*/
        '@media screen and (min-width: 1040px)': {
            width: viewWidth() * 0.175,
        },
        backgroundColor: themes[props.theme].fill,
        transform: 'translate(0, -3.75vh)',
    }),
    icon: props => ({
        fontSize: 'inherit',
        height: '1.5em',
    }),
}, {index: 1});