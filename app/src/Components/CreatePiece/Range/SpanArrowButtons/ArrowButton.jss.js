import {themes} from "../../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../../Reuseables/Drawers/PermanentDrawer.jss";

const buttonSizethin = '100%';
const iconButtonSizethin = '100%';
const arrowSizethin = '8.5vw';

export const useStyles = makeStyles({
    arrow_button_container: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        '@media screen and (max-width: 960px)': {
            border: 'unset',
            width: buttonSizethin,
            height: buttonSizethin,
        },
        '@media screen and (min-width: 960px)': {
            fontSize: (drawerWidth - 55) * 0.5 * 0.333 * 0.333,
            border: `0.075em solid ${themes[props.theme].outline}`,
            width: '2.75em',
            height: '2.75em',
            borderRadius: '0.2em',
        },
    }),
    button_container_normal: props => ({
        backgroundColor: themes[props.theme].button_fill,
        '@media screen and (min-width: 960px)': {
            '&:hover': {
                backgroundColor: themes[props.theme].text_alt,
            },
        },
    }),
    button_container_selected: props => ({
        backgroundColor: themes[props.theme].span,
        '@media screen and (min-width: 960px)': {
            '&:hover': {
                backgroundColor: themes[props.theme].span,
            },
        },
    }),
    button_container_thin: props => ({
        backgroundColor: 'unset',
        "& .MuiIconButton-root": {
            width: iconButtonSizethin,
            height: iconButtonSizethin,
        }
    }),
    button_container_adjust: props => ({
        transform: 'translate(0, 1.7rem)',
        zIndex: 2,
    }),
    arrow_button: props => ({
        width: iconButtonSizethin,
        height: iconButtonSizethin,
        '@media screen and (min-width: 960px)': {
            fontSize: (drawerWidth - 55) * 0.5 * 0.333 * 0.333,
            width: '2.75em',
            height: '2.75em',
            borderRadius: '0.2em',
        },
    }),
    vector: (props) => ({
        '@media screen and (max-width: 960px)': {
            width: arrowSizethin,
            height: arrowSizethin,
        },
        '@media screen and (min-width: 960px)': {
            fontSize: (drawerWidth - 55) * 0.5 * 0.333 * 0.333,
            width: '2em',
            height: '2em',
        },
    }),
    vector_active: props => ({
        '@media screen and (min-width: 960px)': {
            color: themes[props.theme].text,
        },
        '@media screen and (max-width: 960px)': {
            color: themes[props.theme].arrow_active,
        },
    }),
    vector_inactive: props => ({
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-width: 960px)': {
            color: themes[props.theme].arrow_inactive,
        },
        '@media screen and (min-width: 960px)': {
            color: themes[props.theme].text,
        },
    }),
    mid: props => ({
        '@media screen and (max-width: 960px)': {
            width: buttonSizethin,
            height: buttonSizethin,
            borderRadius: '0.2em',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: (drawerWidth - 55) * 0.5 * 0.333 * 0.333,
            width: '2.75em',
            height: '2.75em',
            borderRadius: '0.2em',
        },

    }),
}, {index: 1});
