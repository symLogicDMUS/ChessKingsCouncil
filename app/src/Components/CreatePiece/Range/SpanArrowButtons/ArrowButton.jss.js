import {themes} from "../../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

const arrowSizeSm = '100%';

export const transition = {
    type: 'spring',
    stiffness: 200,
};
export const variants = {
    'start': {
        scale: 0,
    },
    'end': {
        scale: 1,
    }
}

export const useStyles = makeStyles({
    arrow_button: props => ({
        '@media screen and (max-width: 960px)': {
            borderRadius: 0,
            "& .MuiTouchRipple-root": {
                color: themes[props.theme].sqr_text,
            },
            '@media screen and (max-width: 426px)': {
                padding: '0.25em',
            },
        },
        '@media screen and (min-width: 960px)': {
            width: '3.2125vw',
            height: '3.2125vw',
            borderRadius: '0.25rem',
            border: `0.05em solid ${themes[props.theme].outline}`,
            "& .MuiTouchRipple-root": {
                color: themes[props.theme].span,
            },
        },
    }),
    arrow_button_normal: props => ({
        backgroundColor: themes[props.theme].button_fill,
        '&:hover': {
            backgroundColor: themes[props.theme].text_alt,
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
            color: themes[props.theme].sqr_text,
        },
    }),
    vector_inactive: props => ({
        '@media screen and (max-width: 960px)': {
            color: themes[props.theme].arrow_inactive,
        },
        '@media screen and (min-width: 960px)': {
            color: themes[props.theme].text,
        },
    }),
    vector_sm_active: props => ({
        color: themes[props.theme].arrow_inactive,
    }),
    vector_sm_inactive: props => ({
        color: themes[props.theme].arrow_inactive,
    }),
    vector_lg_active: props => ({
        color: themes[props.theme].sqr_text,
    }),
    vector_lg_inactive: props => ({
        color: themes[props.theme].text,
    }),
    mid: props => ({
        width: '3.2125vw',
        height: '3.2125vw',
    }),
    hover: props => ({
        '&:hover': {
            backgroundColor: themes[props.theme].offset,
        },
    }),
}, {index: 1});
