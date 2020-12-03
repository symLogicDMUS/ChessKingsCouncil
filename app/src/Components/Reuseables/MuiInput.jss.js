import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    dropdown: props => ({

        ...props.styles,

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
            color: props.theme.hover.fill,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: props.theme.hover.outline,
        },
        "&:hover .MuiOutlinedInput-input": {
            color: props.theme.hover.fill,
        },

        /*
         * when in focus
         */
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: props.theme.focus.fill,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: props.theme.focus.fill,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: props.theme.focus.fill,
        },
    }),
});
