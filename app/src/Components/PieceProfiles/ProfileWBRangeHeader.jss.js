import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";

export const styleOverride = {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
};

export const useStyles = makeStyles({
    range_title: props => ({
        flexGrow: 4,
        textAlign: 'center',
        paddingLeft: '2vw',
    }),
    expand_button: props => ({
        '@media screen and (max-width: 1040px)': {
            width: '2.2vw',
            height: '2.2vw',
            fontSize: '3.5vw',
        },
        '@media screen and (min-width: 1040px)': {
            width: '2vw',
            height: '2vw',
            fontSize: '1.6vw',
        },
    }),
    expand_icon: props => ({
        fontSize: 'inherit',
        width: '1em',
        height: '1em',
        color: themes[props.theme].text,
    }),
}, {index: 1});