import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    input: props => ({

        ...props.style,

        /*
         * default (dropdown not in focus or hovered over)
         */
        // color: props.theme.outline,
        "& .MuiInputLabel-root": {
            color: props.theme.outline,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: props.theme.outline,
        },
        "& .MuiOutlinedInput-input": {
            color: props.theme.outline,
        },

        /*
         * when hovered over
         */
        "&:hover .MuiInputLabel-root": {
            color: props.theme.outline,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: props.theme.outline,
        },
        "&:hover .MuiOutlinedInput-input": {
            color: props.theme.outline,
        },

        /*
         * when in focus
         */
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: props.theme.outline,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: props.theme.outline,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: props.theme.outline,
        },
    }),
});
