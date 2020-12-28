import {availHeight} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

const {makeStyles} = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        fontSize: props.fontSize,
        width: '100%',
        backgroundColor: themes[props.theme].fill,
    }),
    heading: props => ({
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }),
    accordion_tab: props => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        border: themes[props.theme].outline,
    }),
    accordion_body: props => ({
        fontSize: props.fontSize,
        height: '3.5em',
        marginTop: '-0.25em',
        backgroundColor: themes[props.theme].fill,
    }),
    expand_icon: props => ({
       color: themes[props.theme].text,
    }),
}));
