import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../styles/themes/themes.jss";

export const mui_input = (theme) => ({
    /*root*/
    "& .MuiInputLabel-root": {
        width: "100%",
        color: "#000",
    },

    /*root when variant is outline*/
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: themes[theme].outline_alt,
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
        color: "#000",
    },

    /*hover*/
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: themes[theme].outline_alt,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-input": {
        color: "#000",
    },
    "&:hover .MuiInputLabel-root": {
        color: "#000",
    },

    /*focused*/
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        color: "#000",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#000",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#000",
    },

    /*arrow icon*/
    "& .MuiSelect-icon": {
        color: "#000",
    },
});