import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";
import {fontSize002} from "../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";

export const pageTitle = (theme) => ({
    color: themes[theme].text,
    fontSize: ''
});

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

export const appBarTitle = {
    fontSize: fontSize002,
    marginLeft: '1.5vw',
    fontWeight: 450,
}

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
        border: `0.04em solid ${themes[props.theme].outline}`
    }),
}, {index: 1});