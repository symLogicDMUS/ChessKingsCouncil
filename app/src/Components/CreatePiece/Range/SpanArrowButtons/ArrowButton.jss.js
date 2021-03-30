import {themes} from "../../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../../Reuseables/Drawers/PermanentDrawer.jss";

const buttonSizeSm = '100%';
const iconButtonSizeSm = '100%';
const arrowSizeSm = '8.5vw';

export const useStyles = makeStyles({
    arrow_button_container: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        '@media screen and (max-width: 960px)': {
            border: 'unset',
            width: buttonSizeSm,
            height: buttonSizeSm,
        },
        '@media screen and (min-width: 960px)': {
            fontSize: (drawerWidth - 55) * 0.5 * 0.333 * 0.333,
            border: `0.075em solid ${themes[props.theme].outline}`,
            width: '3.2125vw',
            height: '3.2125vw',
            borderRadius: '0.25rem',
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
            width: iconButtonSizeSm,
            height: iconButtonSizeSm,
        }
    }),
    button_container_adjust: props => ({
        transform: 'translate(0, 1.7rem)',
        zIndex: 2,
    }),
    arrow_button: props => ({
        width: '100%',
        height: '100%',
    }),
    vector: (props) => ({
        '@media screen and (max-width: 960px)': {
            width: arrowSizeSm,
            height: arrowSizeSm,
        },
        '@media screen and (min-width: 960px)': {
            width: '2.15vw',
            height: '2.15vw',
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
            width: buttonSizeSm,
            height: buttonSizeSm,
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
