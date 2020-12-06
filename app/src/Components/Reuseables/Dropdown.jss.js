import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles({
    dropdown: props => ({

        ...props.style,

        /*
         * default (dropdown not in focus or hovered over)
         */
        color: props.theme.outline,
        "& .MuiInputLabel-root": {
            color: props.theme.fill,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: props.theme.outline,
        },
        "& .MuiOutlinedInput-input": {
            color: props.theme.fill,
        },

        /*
         * when hovered over
         */
        "&:hover .MuiInputLabel-root": {
            color: props.theme.fill,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: props.theme.outline,
        },
        "&:hover .MuiOutlinedInput-input": {
            color: props.theme.fill,
        },

        /*
         * when in focus
         */
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "none",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "none",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "none",
        },
    }),
});
