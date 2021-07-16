import {themes} from "../../styles/themes/themes.jss";
import {darken, lighten, makeStyles} from "@material-ui/core/styles";

export const smResetButton = {
    marginLeft: 0,
}

export const useStyles = makeStyles({
    window: props => ({
        zIndex: 13,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.3rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].odd_row}`,
        '@media screen and (max-width: 600px)': {
            width: '100vw',
        },
        '@media screen and (min-width: 600px)': {
            width: '66.667vw',
        },
        "& .MuiDialogActions-root": {
            paddingLeft: '1rem',
            paddingRight: '1rem',
        },
    }),
    accordion: props => ({
        "& .MuiAccordionSummary-root": {
            backgroundColor: darken(themes[props.theme].fill, 0.035),
            borderBottom: `0.05rem solid ${themes[props.theme].odd_row}`,
        },
        "& .MuiAccordionDetails-root": {
            backgroundColor: darken(themes[props.theme].fill, 0.02),
        },
        "& .MuiSvgIcon-root": {
            color: themes[props.theme].text,
        },
        "& .MuiTouchRipple-root": {
            color: themes[props.theme].text,
        },
    }),
    accordion_summary: props => ({
        fontSize: '1rem',
        color: themes[props.theme].text,
        fontWeight: 500,
    }),
    normal: props => ({
        color: themes[props.theme].text,
    }),
    highlight: props => ({
        color: themes[props.theme].modal_actions,
    }),
    all_pages: props => ({
        fontSize: '1.025rem',
    }),
    close_area: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    close: props => ({
        width: '1.2rem',
        height: '1.2rem',
        position: 'absolute',
        right: 1,
    }),
    close_icon: props => ({
        height: '1rem',
        width: '1rem',
    }),
    select_theme: props => ({

        marginBottom: 16,
        marginTop: 8,

        /*root*/
        "& .MuiInputLabel-root": {
            width: '100%',
            color: themes[props.theme].text,
        },
        /*root when variant is outline*/
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].text,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },

        /*hover*/
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].text,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },
        "&:hover .MuiInputLabel-root": {
            color: themes[props.theme].text,
        },

        /*focused*/
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: themes[props.theme].text,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: themes[props.theme].text,
        },

        /*arrow icon*/
        "& .MuiSelect-icon": {
            color: themes[props.theme].text,
        },
    }),
    save_theme_button: props => ({
        color: themes[props.theme].modal_actions,
        backgroundColor: themes[props.theme].button_fill,
        '&:hover':{
            backgroundColor: lighten(themes[props.theme].button_fill, 0.08),
        },
        '@media screen and (min-width: 375px)': {
            marginRight: '0.5rem',
        },
        '@media screen and (max-width: 375px)': {
            width: '100%',
            marginTop: '1rem',
        },
    }),
    reset_theme_button: props => ({
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].button_fill,
        '&:hover':{
            backgroundColor: lighten(themes[props.theme].button_fill, 0.08),
        },
        '@media screen and (max-width: 375px)': {
            width: '100%',
            marginTop: '1rem',
        },
    }),
    dialog_actions: props => ({
        '@media screen and (max-width: 375px)': {
            flexDirection: 'column',
            alignItems: 'center',
        },
    }),
}, {index: 1});
