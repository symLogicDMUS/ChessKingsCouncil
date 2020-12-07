import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    toggle_nav: props => ({
        gridColumn: 10,
        position: 'absolute',
        backgroundColor: props.theme.button_fill,
    }),
    icon: props => ({
        color: props.theme.button_text,
    }),
});