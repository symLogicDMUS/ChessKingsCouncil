import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    /*wide viewports only: */
    sub_button: props => ({
        width: '2.75vw',
        height: '2.75vw',
    }),
    sub_icon: props => ({
        width: '1.75vw',
        height: '1.75vw',
    }),
    selected: props => ({
        color: themes[props.theme].text,
    }),
    unselected: props => ({
        color: 'rgba(0, 0, 0, 0)',
    }),
    no_sub_unselected: props => ({
        color: themes[props.theme].outline,
    }),
}, {index: 1});