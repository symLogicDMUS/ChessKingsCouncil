import makeStyles from "@material-ui/core/styles/makeStyles";
import {availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    title_bar: props => ({
       width: availWidth() * 0.5,
       color: themes[props.theme].text,
        marginLeft: '3.25%',
    }),
    divider: props => ({
        width: '77em',
        marginLeft: '3.25%',
        marginBottom: '0.75em',
    }),
});