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
            color: themes[props.theme].outline,
        },
        "&:hover .MuiInputLabel-root": {
            color: themes[props.theme].outline,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: themes[props.theme].outline,
        },
        "&:hover .MuiOutlinedInput-input": {
            color: themes[props.theme].outline,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: themes[props.theme].outline,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: themes[props.theme].outline,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: themes[props.theme].outline,
        },
    }),
    field: (props) => ({
        ...props.fieldStyle,
    }),
});
