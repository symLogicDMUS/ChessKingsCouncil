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
            fontSize: '3vh',
            width: '18.75vw',
            height: '5.75vh',
            border: `0.05em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2.25vh',
            width: '6.5vw',
            height: '4.5vh',
            border: `0.05em solid ${themes[props.theme].outline}`
        },
        '@media screen and (max-device-width: 460px)': {
            outline: `0.12rem solid ${themes[props.theme].outline}`,
        },
    }),
    load_button: props => ({
        '@media screen and (max-width: 960px)': {
            marginRight: '2.5vw',
        },
        '@media screen and (min-width: 960px)': {
            marginRight: '0.65vw',
        },
    }),
    delete_button: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: '2.5vw',
        },
        '@media screen and (min-width: 960px)': {
            marginLeft: '0.65vw',
        },
    }),
    icon: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: fontSize001685
        },
        color: themes[props.theme].text,
    }),
    delete_icon: props => ({
        transform: 'translate(0.25em, 0)',
    }),
}, {index: 1});