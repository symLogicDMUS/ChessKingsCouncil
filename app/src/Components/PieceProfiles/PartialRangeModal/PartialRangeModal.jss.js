import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    top: props => ({
        zIndex: 'inherit',
        fontSize: '2.5vh',
        width: '100%',
        height: '1.5em',
        display: 'flex',
        flexDirection: 'row-reverse',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        border: '1px dashed #b1faae',
    }),
    title: props => ({
        zIndex: 'inherit',
        fontSize: '2.5vh',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginRight: '2em',
        flexGrow: 5,
    }),

}, {index: 1});