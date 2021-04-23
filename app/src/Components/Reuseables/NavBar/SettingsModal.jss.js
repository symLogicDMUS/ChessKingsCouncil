import {themes} from "../../styles/themes.jss";
import {modal} from "../../helpers/modal.jss";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    modal: props => ({
       ...modal,
        zIndex: 13,
    }),
    window: props => ({
        '@media screen and (max-width: 600px)': {
            width: '100vw',
            height: '33.333vh',
        },
        '@media screen and (min-width: 600px)': {
            width: '66.667vw',
            height: '33.667vh',
        },
        fontSize: '2vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.3rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].odd_row}`,
    }),
    settings: props => ({
        flexGrow: 2,
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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
    }),
    close_icon: props => ({
        height: '1rem',
        width: '1rem',
    }),
    select_theme: props => ({
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
}, {index: 1});
