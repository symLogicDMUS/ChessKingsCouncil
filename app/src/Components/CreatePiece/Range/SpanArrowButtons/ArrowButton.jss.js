import {themes} from "../../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../../Reuseables/Drawers/PermanentDrawer.jss";

const buttonSizeSm = '100%';
const arrowSizeSm = '100%';

export const transitionDuration = {
    enter: 500,
    exit: 500,
}

export const useStyles = makeStyles({
    arrow_button: props => ({
        "& .MuiTouchRipple-root": {
            color: themes[props.theme].span,
        },
        '@media screen and (max-width: 960px)': {
            border: 'unset',
            borderRadius: 0,
            backgroundColor: 'none',
            "& .MuiIconButton-root": {
                width: buttonSizeSm,
                height: buttonSizeSm,
            },
        },
        '@media screen and (min-width: 960px)': {
            width: '3.2125vw',
            height: '3.2125vw',
            borderRadius: '0.25rem',
            border: `0.05em solid ${themes[props.theme].outline}`,
        },
    }),
    arrow_button_normal: props => ({
        '@media screen and (min-width: 960px)': {
            backgroundColor: themes[props.theme].button_fill,
            '&:hover': {
                backgroundColor: themes[props.theme].text_alt,
            },
        },
    }),
    arrow_button_selected: props => ({
        backgroundColor: themes[props.theme].span,
        '&:hover': {
            backgroundColor: themes[props.theme].span,
        },
    }),
    arrow_button_adjust: props => ({
        zIndex: 2,
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
        '@media screen and (max-width: 960px)': {
            color: themes[props.theme].arrow_active,
        },
        '@media screen and (min-width: 960px)': {
            color: themes[props.theme].text,
        },
    }),
    vector_inactive: props => ({
        '@media screen and (max-width: 960px)': {
            color: themes[props.theme].arrow_inactive,
            // color: themes[props.theme].text_alt,
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
    hover: props => ({
       '&:hover':{
           backgroundColor: themes[props.theme].offset,
       },
    }),
}, {index: 1});
