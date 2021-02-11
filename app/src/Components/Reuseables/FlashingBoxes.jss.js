import { makeStyles } from "@material-ui/core/styles";
import {fontSize002, fontSize0019} from "../styles/fontSizes.jss";
import {themes} from "../styles/themes.jss";

const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize0019,
}

export const useStyles = makeStyles({
    row: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
            marginBottom: '5.5em',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            marginBottom: '3.5em',
        },
    }),
    load_box_container: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
            width: '10em',
            height: '10em',
            marginRight: '3em',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: '10em',
            height: '10em',
            marginRight: '3em',
            marginLeft: '1.5em',
            marginTop: '1.5em',
        },
    }),
    load_box: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
            width: '10em',
            height: '10em',
            borderRadius: '0.35em',
            backgroundColor: themes[props.theme].even_row
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: '10em',
            height: '10em',
            borderRadius: '0.35em',
            backgroundColor: themes[props.theme].even_row
        },
    }),
    underline: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
            width: '10em',
            height: '2em',
            backgroundColor: themes[props.theme].even_row
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
            width: '10em',
            height: '2em',
            backgroundColor: themes[props.theme].even_row
        },
    }),
});