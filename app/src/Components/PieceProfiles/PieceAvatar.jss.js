import {makeStyles} from "@material-ui/core/styles";
import {availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

const size = '8.75em'

export const useStyles = makeStyles({
    piece_avatar: props => ({
        fontSize: props.fontSize,
        height: '10.75em',
        width: size,
        // display: 'flex',
        // flexDirection: 'column',
        // fontFamily: 'Roboto-Light, Roboto',
    }),
    avatar_title: props => ({
        fontSize: props.fontSize*0.85,
        height: '2em',
        width: size,
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    avatar_window: props => ({
        fontSize: props.fontSize,
        width: size,
        height: size,
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
});