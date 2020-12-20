import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    piece_profiles: props => ({
        display: 'flex',
        flexDirection: 'column',
        height: availHeight() * 0.6,
        width: availWidth(),
        overflow: 'scroll',
        backgroundColor: themes[props.theme].fill,
    }),
    divider: props => ({
        fontSize: props.fontSize,
        // width: '80%',
        width: '77em',
        marginLeft: '1.8em',
        marginTop: '0.75em',
        marginBottom: '0.75em',
    }),
});