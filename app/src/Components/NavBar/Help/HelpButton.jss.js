import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
    help: props => ({
        gridColumn: 1,
        position: 'absolute',
        backgroundColor: props.theme.button_fill,
    }),
    icon: props => ({
        color: props.theme.button_text,
    }),
});
