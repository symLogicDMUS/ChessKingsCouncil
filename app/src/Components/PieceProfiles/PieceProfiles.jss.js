import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight} from "../helpers/windowMeasurments";

export const useStyles = makeStyles({
    piece_profiles: props => ({
        display: 'flex',
        flexDirection: 'column',
        height: availHeight() *0.7,
        width: '100%',
        overflow: 'scroll',
    }),
    piece_header: props => ({
       fontSize: props.fontSize,
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'no-wrap',
       width: '100%',
    }),
});