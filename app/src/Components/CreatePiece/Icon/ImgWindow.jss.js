import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    img_window: props => ({
        display: 'flex',
        alignItems: 'center',
        fontSize: props.fontSize,
        width: "9em",
        height: "9em",
        border: "0.05em solid #2b2b2b",
        borderRadius: '0.2em',
        cursor: 'pointer',
    }),
    img_label: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    icon: (props) => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
        padding: 0,
    }),
    text: props => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginLeft: '0.1em',
        lineHeight: '0.7em',
    }),
});
