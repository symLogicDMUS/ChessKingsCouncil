import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        width: '100%',
        height: '3rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: themes[props.theme].fill,
        '&:hover':{
            backgroundColor: lighten(themes[props.theme].fill, 0.05),
        },
    }),
    text: props => ({
        fontSize: '1.05rem',
        lineHeight: '1.05rem',
        height: '1.05rem',
        color: themes[props.theme].text,
    }),
    icon: props => ({
        height: '0.8rem',
        width: '0.8rem',
        marginRight: '0.65rem',
        marginLeft: '0.65rem',
        color: themes[props.theme].text,
    }),
}, {index: 1});