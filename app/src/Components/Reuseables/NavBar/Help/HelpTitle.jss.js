import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    help_title: props => ({
        fontSize: props.fontSize,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        textAlign: 'center',
        '@media screen and (max-width: 500px)': {
            fontSize: '1rem',
        },
    }),
}, {index: 1});