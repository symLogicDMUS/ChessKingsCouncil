import { makeStyles } from "@material-ui/core/styles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    piece_profiles: props => ({
        display: 'flex',
        overflow: 'scroll',
        flexDirection: 'column',
        '@media screen and (min-width: 768px)': {
            height: availHeight() * 0.75,
            width: availWidth()*0.5,
            marginLeft: '0.25em',
            marginTop: '0.25em',
        },
        '@media screen and (max-width: 767px)': {
            height: availHeight()*0.58,
            width: availWidth()*0.98,
            marginLeft: '0.1em',
            marginTop: '0.1em',
        },
        backgroundColor: themes[props.theme].fill,
    }),
    divider: props => ({
        fontSize: props.fontSize,
        width: '77em',
        marginLeft: '1.8em',
        marginTop: '0.75em',
        marginBottom: '0.75em',
    }),
});