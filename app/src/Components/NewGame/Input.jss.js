import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";

export const mui_input = (theme) => ({
    /*root*/
    "& .MuiInputLabel-root": {
        width: '100%',
        color: themes[theme].outline,
    },
    /*root when variant is outline*/
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: themes[theme].outline,
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
        color: themes[theme].outline,
    },

    /*hover*/
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: themes[theme].outline,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-input": {
        color: themes[theme].outline,
    },
    "&:hover .MuiInputLabel-root": {
        color: themes[theme].outline,
    },

    /*focused*/
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        color: themes[theme].outline,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: themes[theme].outline,
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: themes[theme].outline,
    },

    /*arrow icon*/
    "& .MuiSelect-icon": {
        color: themes[theme].outline,
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
            color: themes[props.theme].outline,
        },
        /*root when variant is outline*/
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            color: themes[props.theme].outline,
        },

        /*hover*/
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            color: themes[props.theme].outline,
        },
        "&:hover .MuiInputLabel-root": {
            color: themes[props.theme].outline,
        },

        /*focused*/
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: themes[props.theme].outline,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: themes[props.theme].outline,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: themes[props.theme].outline,
        },
    }),
}, {index: 1});