import makeStyles from "@material-ui/core/styles/makeStyles";
import {darken} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {marginBottom} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    tool_window: props => ({
        position: 'absolute',
        left: '22.5vw',
        top: 'calc(50vh - (20px + 24px + 2.5vw))',
    }),
    name: props => ({
        '@media screen and (max-width: 960px)': {
            width: '50vw',
            marginTop: '0.5vw',
            marginLeft: '2.5vw',
            marginRight: '2.5vw',
            marginBottom: '2.5vw',
        },
        '@media screen and (min-width: 960px)': {
            marginBottom: marginBottom,
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
}, {index: 1});