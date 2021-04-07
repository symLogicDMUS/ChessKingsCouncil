import makeStyles from "@material-ui/core/styles/makeStyles";
import {darken, lighten} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    name_modal: props => ({
        margin: 'auto',
        borderRadius: '0.5rem',
        padding: '0.35vw',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].odd_row}`,
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
    top_area: props => ({
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        marginBottom: '0.5vh',
    }),
    content_area: props => ({
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingBottom: '2vw',
    }),
    drag_icon: props => ({
        fontSize: '0.8rem',
        color: themes[props.theme].text_alt,
    }),
    close_area: props => ({
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'nowrap',
       alignItems: 'center',
       justifyContent: 'flex-end',
    }),
}, {index: 1});