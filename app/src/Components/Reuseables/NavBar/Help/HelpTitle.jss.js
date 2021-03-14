import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../../styles/themes.jss";

export const useStyles = makeStyles({
    help_title: props => ({
        fontSize: props.fontSize,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        textAlign: 'center',
    }),
}, {index: 1});