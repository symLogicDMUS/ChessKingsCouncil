import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    piece_profiles: props => ({
        // display: 'flex',
        // flexDirection: 'column',
        height: availHeight() *0.7,
        width: availWidth(),
        overflow: 'scroll',
        backgroundColor: themes[props.theme].fill,
    }),
    piece_header: props => ({
       fontSize: props.fontSize,
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'no-wrap',
       width: '100%',
    }),
});