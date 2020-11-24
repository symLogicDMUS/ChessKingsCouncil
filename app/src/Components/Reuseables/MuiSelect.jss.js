
import makeStyles from "@material-ui/core/styles/makeStyles";

export const styles = {
    root: {

        fontSize: props => props.fontSize,
        width: props => props.width,
        height: props => props.height,
        top: props => props.top,
        left: props => props.left,

        color: "#a9a9a9",
        "& .MuiInputLabel-root": {
            color: "#a9a9a9",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#707070",
        },
        "& .MuiOutlinedInput-input": {
            color: "#a9a9a9",
        },

        "&:hover .MuiInputLabel-root": {
            color: "#a9a9a9",
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#888888",
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#a9a9a9",
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#72e2ff",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#72e2ff",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#72e2ff",
        },
    },
};