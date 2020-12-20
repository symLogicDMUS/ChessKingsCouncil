import {makeStyles} from "@material-ui/core/styles";
import {availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

const size = '9em'

export const useStyles = makeStyles({
    profile_avatar: props => ({
        fontSize: props.fontSize,
        height: '10.75em',
        width: size,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto-Light, Roboto',
    }),
    avatar_title: props => ({
        fontSize: '0.75em',
        height: '1.55em',
        width: '100%',
        textAlign: 'center',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    avatar_window: props => ({
        fontSize: props.fontSize,
        width: size,
        height: size,
        fontFamily: 'Roboto-Light, Roboto',
        backgroundColor: themes[props.theme].fill,
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
});