import makeStyles from "@material-ui/core/styles/makeStyles";
import {darken, lighten} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    name_modal: props => ({
        margin: 'auto',
        borderRadius: '0.5rem',
        padding: '3.5vw',
        backgroundColor: themes[props.theme].fill,
    }),
    name: props => ({
        '@media screen and (min-width: 960px)': {
            marginBottom: '1.15vw',
        },
        '@media screen and (max-width: 960px)': {
            width: '50vw',
        },

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
    thin_screen: props => ({
        width: '100%',
    }),
    close_area: props => ({
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'nowrap',
       alignItems: 'center',
       justifyContent: 'flex-end',
    }),
}, {index: 1});