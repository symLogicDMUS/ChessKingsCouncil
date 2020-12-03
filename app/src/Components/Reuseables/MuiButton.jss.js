import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
    button: props => ({
        ...props.style,
        background: props.theme.fill,
        color: props.theme.font,
        '&:hover': {
            background: props.theme.hover.fill,
            color: props.theme.hover.font,
        },
    }),
});
