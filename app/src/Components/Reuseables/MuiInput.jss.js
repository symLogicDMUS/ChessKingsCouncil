import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    input: props => ({

        ...props.style,

        /*
         * default (dropdown not in focus or hovered over)
         */

        "& .MuiInputLabel-root": {
            color: themes[props.theme].text,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
        },
        "& .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },

        /*
         * when hovered over
         */
        "&:hover .MuiInputLabel-root": {
            color: themes[props.theme].text,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
        },
        "&:hover .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },

        /*
         * when in focus
         */
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: themes[props.theme].text,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: themes[props.theme].text,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: themes[props.theme].text,
        },
    }),
});
