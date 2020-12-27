import makeStyles from "@material-ui/core/styles/makeStyles";
import { themes } from "../styles/themes.jss";

export const useStyles = makeStyles({
    input: (props) => ({
        ...props.style,
        "& .MuiInputLabel-root": {
            color: themes[props.theme].outline,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
        },
        "& .MuiOutlinedInput-input": {
            color: themes[props.theme].outline_label,
        },

        /*hover*/
        "&:hover .MuiInputLabel-root": {
            color: themes[props.theme].outline,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
        },
        "&:hover .MuiOutlinedInput-input": {
            color: themes[props.theme].outline_label,
        },

        /*focused*/
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: themes[props.theme].outline_label,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: themes[props.theme].outline_label,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: themes[props.theme].outline_label,
        },
    }),
    field: (props) => ({
        ...props.fieldStyle,
    }),
});
