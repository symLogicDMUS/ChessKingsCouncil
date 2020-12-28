import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../../styles/themes.jss";

export const useStyles = makeStyles({
    selected_name: props => ({
       fontSize: props.fontSize,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        margin: '1em',
    }),
    hover_name: props => ({
        fontSize: props.fontSize,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        margin: '1em',
    }),
});
