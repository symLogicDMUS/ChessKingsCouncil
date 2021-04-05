import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";
import {fontSize002} from "../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../Reuseables/Drawers/MiniVariantDrawer.jss";

export const styles = {
    modal: {
        ...modal,
    },
    save_animation: {
        width: '33.333%',
    },
    box: props => ({
        fontSize: '1.5vw',
        display: 'flex',
    }),
    sqr_text_checkbox: props => ({
        marginLeft: 0,
        flexDirection: 'row-reverse',
    }),
    drawer: props => ({
        "& .MuiToolbar-gutters": {
            '@media screen and (max-width: 960px)': {
                paddingLeft: 30,
                paddingRight: 4,
            },
            '@media screen and (min-width: 960px)': {
                paddingLeft: 12,
            },
        },
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
        width: '22.5vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: '1.15vw',
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
        width: '22.5vw',
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
        justifyContent: 'space-between',
    }),
    close: props => ({
        width: '1.1rem',
        height: '1.1rem',
    }),
    icon: props => ({
        width: '0.9rem',
        height: '0.9rem',
    }),
    modal: props => ({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        zIndex: 2,
        top: 0,
        left: 0,
    }),
    caption: props => ({
        fontSize: '1.1rem',
        letterSpacing: '0.0075em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
}, {index: 1});