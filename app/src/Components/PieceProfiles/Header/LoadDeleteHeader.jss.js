import {themes} from "../../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize001685} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    header: props => ({
        justifyContent: 'space-between',
    }),
    buttons_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }),
    button: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1.25rem',
        },
        '@media screen and (min-width: 960px) and (max-width: 1360px)': {
            fontSize: '1.1vw',
            border: '1px dashed red',
        },
        '@media screen and (min-width: 1360px) and (max-width: 1460px)': {
            fontSize: '0.9rem',
        },
        '@media screen and (min-width: 1460px)': {
            fontSize: '1.1rem',
        },
    }),
    button_size: props => ({
        '@media screen and (max-width: 960px)': {
            width: '18.75vw',
            height: '5.75vh',
        },
        '@media screen and (min-width: 960px)': {
            width: '6.5vw',
            height: '4.5vh',
        },
    }),
    button_border: props => ({
        '@media screen and (max-width: 960px)': {
            border: `0.05em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-width: 960px)': {
            border: `0.05em solid ${themes[props.theme].outline}`
        },
        '@media screen and (max-device-width: 460px)': {
            outline: `0.12rem solid ${themes[props.theme].outline}`,
        },
    }),
    load_button: props => ({
        '@media screen and (max-width: 960px)': {
            marginRight: '1.25vw',
        },
        '@media screen and (min-width: 960px)': {
            marginRight: '0.65vw',
        },
    }),
    delete_button: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: '1.25vw',
        },
        '@media screen and (min-width: 960px)': {
            marginLeft: '0.65vw',
        },
    }),
    icon: props => ({
        minWidth: 'unset',
        minHeight: 'unset',
        '@media screen and (max-width: 960px)': {
            fontSize: '1.35rem',
        },
        '@media screen and (min-width: 960px) and (max-width: 1360px)': {
            width: '1.5vw',
        },
        '@media screen and (min-width: 1360px) and (max-width: 1460px)': {
            width: '1.25vw',
        },
        '@media screen and (min-width: 1460px)': {
            fontSize: '1rem',
        },
        color: themes[props.theme].text,
    }),
    delete_icon: props => ({
        transform: 'translate(0.25em, 0)',
    }),
}, {index: 1});