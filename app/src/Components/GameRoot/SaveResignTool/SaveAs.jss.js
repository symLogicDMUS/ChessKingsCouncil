import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize002, fontSize0023} from "../../styles/fontSizes.jss";
import {darken} from "@material-ui/core/styles";

export const button = (theme) => ({
    '@media screen and (min-width: 960px)': {
        fontSize: fontSize002
    },
    '@media screen and (max-width: 960px)': {
        fontSize: fontSize0023
    },
    color: themes[theme].text,
});

export const useStyles = makeStyles({
    modal: {
        ...modal
    },
    dialog_window: props => ({
        '@media screen and (min-width: 960px)': {
            width: '27%',
            height: '27%',
        },
        '@media screen and (max-width: 960px)': {
            width: '100%',
            height: '40%',
        },
        backgroundColor: themes[props.theme].modal_fill,
        border: `0.05rem solid ${themes[props.theme].odd_row}`,
    }),
    title: props => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
    }),
    dialog_actions: props => ({
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize002,
            width: '22em',
            marginLeft: '1.5em',
        },
        '@media screen and (max-width: 960px)': {
            fontSize: fontSize0023,
            marginRight: '3.5%',
            width: '97.5%',
        },
    }),
    text_field: props => ({

        /*root*/
        "& .MuiInputLabel-root": {
            color: darken(themes[props.theme].text, 0.2),
        },
        /*root when variant is outline*/
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },

        /*hover*/
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
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

    }),
}, {index: 1});