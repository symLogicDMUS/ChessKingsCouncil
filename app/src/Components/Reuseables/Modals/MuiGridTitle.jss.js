import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const searchBackgroundColor = (theme) => ({
    backgroundColor: lighten(themes[theme].odd_row, 0.085),
});

export const useStyles = makeStyles({
    title_area: props => ({
        paddingTop: '1.75vh',
        paddingBottom: '1.75vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media screen and (max-width: 960px)': {
            width: '95vw',
        },
        '@media screen and (min-width: 960px)': {
            width: '85.5vw',
        },
    }),
    title_box: props => ({
        width: '100%',
        display: 'inline-flex',
        alignItems: 'center',
    }),
    title: props => ({
        marginLeft: 'auto',
        lineHeight: '0.7em',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        '@media screen and (max-width: 600px)': {
            fontSize: '1.75rem',
            marginRight: '0.2rem',
            transform: 'translate(2rem, 0)',
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            fontSize: '2em',
            marginRight: '0.25em',
            transform: 'translate(12.5vw, 0)',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2em',
            marginRight: '0.25em',
            transform: 'translate(8.5vw, 0)',
        },
    }),
    title_icon: props => ({
        marginRight: 'auto',
        marginLeft: '0.25em',
        color: themes[props.theme].text,
        '@media screen and (max-width: 600px)': {
            fontSize: '1.75rem',
            transform: 'translate(2rem, 0)',
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            fontSize: '2em',
            transform: 'translate(12.5vw, 0)',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2em',
            transform: 'translate(8.5vw, 0)',
        },
    }),
    search: props => ({
        alignSelf: 'flex-end',
        height: '2.15rem',
        '@media screen and (max-width: 600px)': {
            width: '60vw',
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            width: '35vw',
        },
        '@media screen and (min-width: 960px)': {
            width: '20vw',
        },
    }),
    search_icon: props => ({
       color: themes[props.theme].text,
    }),
    medium_icon: props => ({
        fontSize: '1.75rem',
    }),
    small_icon: props => ({
        fontSize: '1.35rem',
        marginLeft: '0.5rem',
    }),
}, {index: 1});