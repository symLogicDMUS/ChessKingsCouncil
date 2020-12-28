import makeStyles from "@material-ui/core/styles/makeStyles";
import {availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    title_bar: props => ({
        '@media screen and (min-width: 768px)': {
            width: availWidth() * 0.5,
            marginLeft: '3.25%',
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
        },
        color: themes[props.theme].text,
    }),
    divider: props => ({
        '@media screen and (min-width: 768px)': {
            width: '77em',
            marginLeft: '3.25%',
            marginBottom: '0.75em',
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
            marginLeft: '5%',
            marginBottom: '0.3em',
        },
    }),
});