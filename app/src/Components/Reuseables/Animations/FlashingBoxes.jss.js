import { makeStyles } from "@material-ui/core/styles";
import {fontSize002, fontSize0019} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize0019,
}

export const useStyles = makeStyles({
    row: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSizes.desktop,
            marginBottom: '5.5em',
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile,
            marginBottom: '3.5em',
        },
    }),
    load_box_container: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSizes.desktop,
            width: '10em',
            height: '10em',
            marginRight: '3em',
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile,
            width: '10em',
            height: '10em',
            marginRight: '3em',
            marginLeft: '1.5em',
            marginTop: '1.5em',
        },
    }),
    load_box: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSizes.desktop,
            width: '10em',
            height: '10em',
            borderRadius: '0.35em',
            backgroundColor: themes[props.theme].even_row
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile,
            width: '10em',
            height: '10em',
            borderRadius: '0.35em',
            backgroundColor: themes[props.theme].even_row
        },
    }),
    underline: props => ({
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSizes.desktop,
            width: '10em',
            height: '2em',
            backgroundColor: themes[props.theme].even_row
        },
        '@media screen and (max-device-width: 1040px)': {
            fontSize: fontSizes.mobile,
            width: '10em',
            height: '2em',
            backgroundColor: themes[props.theme].even_row
        },
    }),
}, {index: 1});