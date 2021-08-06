import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";

export const mui_input = (theme) => ({
    /*root*/
    "& .MuiInputLabel-root": {
        width: '100%',
        color: '#000',
    },
    /*root when variant is outline*/
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: themes[theme].outline_alt,
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
        color: '#000',
    },

    /*hover*/
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: themes[theme].outline_alt,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-input": {
        color: '#000',
    },
    "&:hover .MuiInputLabel-root": {
        color: '#000',
    },

    /*focused*/
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        color: '#000',
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: '#000',
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: '#000',
    },

    /*arrow icon*/
    "& .MuiSelect-icon": {
        color: '#000',
    },
});

export const useStyles = makeStyles({
    input: props => ({
        '@media screen and (min-width: 960px)': {
            width: '17.5vw',
        },
        /*root*/
        "& .MuiInputLabel-root": {
            width: '100%',
            color: themes[props.theme].outline_alt,
        },
        /*root when variant is outline*/
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline_alt,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            color: themes[props.theme].outline_alt,
        },

        /*hover*/
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline_alt,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            color: themes[props.theme].outline_alt,
        },
        "&:hover .MuiInputLabel-root": {
            color: themes[props.theme].outline_alt,
        },

        /*focused*/
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: themes[props.theme].outline_alt,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: themes[props.theme].outline_alt,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: themes[props.theme].outline_alt,
        },
    }),
}, {index: 1});