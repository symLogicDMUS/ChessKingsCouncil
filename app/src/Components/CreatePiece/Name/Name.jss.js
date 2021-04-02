import makeStyles from "@material-ui/core/styles/makeStyles";
import {darken, lighten} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    window: props => ({
        margin: 'auto',
        borderRadius: '0.5rem',
        backgroundColor: themes[props.theme].fill,
    }),
    name: props => ({
        '@media screen and (min-width: 960px)': {
            width: '93%',
            marginLeft: '3.5%',
            marginBottom: '2vh',
        },
        '@media screen and (max-width: 960px)': {
            width: '35vw',
            marginTop: '1.75vw',
            marginLeft: '3.5vw',
            marginRight: '3.5vw',
            marginBottom: '3.5vw',
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