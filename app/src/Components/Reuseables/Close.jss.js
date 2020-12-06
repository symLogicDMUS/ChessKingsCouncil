import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
    close: props => ({
        ...props.style,
    }),
    icon: props => ({
        color: props.theme.text
    }),
});
