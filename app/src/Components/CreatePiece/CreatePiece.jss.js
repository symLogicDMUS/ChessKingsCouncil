import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";
import {fontSize002} from "../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";

export const pageTitle = (theme) => ({
    color: themes[theme].text,
    fontSize: '1.25rem'
});

export const appBarTitle = {
    fontSize: fontSize002,
    marginLeft: '1.5vw',
    fontWeight: 450,
}

export const styles = {
    modal: {
        ...modal,
    },
    save_animation: {
        width: '33.333%',
    },
    box: props => ({
        fontSize: fontSize002,
        display: 'flex',
    }),
    sqr_text_checkbox: props => ({
        marginLeft: 0,
        flexDirection: 'row-reverse',
    }),
};

export const useStyles = makeStyles({
    button: props => ({
        '@media screen and (max-width: 960px)': {
            width: '15vw',
            height: '15vw',
            fontSize: '4.5vw',
            borderRadius: '0.2rem',
        },
        '@media screen and (min-width: 960px)': {
            width: '3.875vw',
            height: '3.875vw',
            margin: 'unset',
            fontSize: '1.1625vw',
            borderRadius: '0.25em',
        },
        minWidth: 0,
        minHeight: 0,
        color: themes[props.theme].text,
    }),
    tool_flexbox: props => ({
        width: '93%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '3.5%',
        marginBottom: '2vh',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    tool_title: props => ({
        width: '100%',
        fontSize: '1.8vh',
        lineHeight: '1em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginBottom: '2.5%',
    }),
    tool_buttons: props => ({
        width: '100%',
        outline: '1px dashed red',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    four_button_group: props => ({
        width: '93%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    }),
    icon_button: props => ({
        '@media screen and (min-width: 960px)': {
            border: `0.04em solid ${themes[props.theme].outline}`,
        },
    }),
    close_area: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    close: props => ({
        width: '1.75vw',
        height: '1.75vw',
    }),
    icon: props => ({
        width: '1.5vw',
        height: '1.5vw',
        color: themes[props.theme].text,
    }),
    modal: props => ({
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        zIndex: 2,
    }),
    caption: props => ({
        fontSize: '1.1rem',
        letterSpacing: '0.0075em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
}, {index: 1});