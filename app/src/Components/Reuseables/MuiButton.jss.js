import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
    button: props => ({
        ...props.style,
        background: props.theme.button_fill,
        color: props.theme.button_text,
        '&:hover': {
            background: props.theme.button_hover_fill,
            color: props.theme.button_hover_text,
        },
    }),
});
