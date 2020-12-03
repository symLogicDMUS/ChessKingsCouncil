import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    dropdown: props => ({

        ...props.styles,

        /*
         * the label: MuiInputLabel-root
         * the border: MuiOutlinedInput-notchedOutline
         * selected item text: MuiOutlinedInput-input
         */

        /*
         * default (dropdown not in focus or hovered over)
         */
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

        /*
         * when hovered over
         */
        "&:hover .MuiInputLabel-root": {
            color: "#a9a9a9",
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#888888",
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#a9a9a9",
        },

        /*
         * when in focus
         */
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#72e2ff",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#72e2ff",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#72e2ff",
        },
    }),
});
