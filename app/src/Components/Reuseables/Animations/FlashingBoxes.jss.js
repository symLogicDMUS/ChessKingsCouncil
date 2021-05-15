import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

const fontSizes = {
    wide: '2vh',
    thin: '1.9vh',
}

export const useStyles = makeStyles({
    row: props => ({
        '@media screen and (min-width: 960px)': {
            fontSize: fontSizes.wide,
            marginBottom: '5.5em',
        },
        '@media screen and (max-width: 960px)': {
            fontSize: fontSizes.thin,
            marginBottom: '3.5em',
        },
    }),
    load_box_container: props => ({
        '@media screen and (min-width: 960px)': {
            fontSize: fontSizes.wide,
            width: '10em',
            height: '10em',
            marginRight: '3em',
        },
        '@media screen and (max-width: 960px)': {
            fontSize: fontSizes.thin,
            width: '10em',
            height: '10em',
            marginRight: '3em',
            marginLeft: '1.5em',
            marginTop: '1.5em',
        },
    }),
    load_box: props => ({
        '@media screen and (min-width: 960px)': {
            fontSize: fontSizes.wide,
            width: '10em',
            height: '10em',
            borderRadius: '0.35em',
            backgroundColor: themes[props.theme].even_row
        },
        '@media screen and (max-width: 960px)': {
            fontSize: fontSizes.thin,
            width: '10em',
            height: '10em',
            borderRadius: '0.35em',
            backgroundColor: themes[props.theme].even_row
        },
    }),
    underline: props => ({
        '@media screen and (min-width: 960px)': {
            fontSize: fontSizes.wide,
            width: '10em',
            height: '2em',
            backgroundColor: themes[props.theme].even_row
        },
        '@media screen and (max-width: 960px)': {
            fontSize: fontSizes.thin,
            width: '10em',
            height: '2em',
            backgroundColor: themes[props.theme].even_row
        },
    }),
}, {index: 1});