import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {fontSize0026} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    help_title: props => ({
        fontSize: fontSize0026,
        fontFamily: 'Roboto-Light, Roboto',
        textAlign: 'center',
        color: themes[props.theme].text,
    }),
}, {index: 1});