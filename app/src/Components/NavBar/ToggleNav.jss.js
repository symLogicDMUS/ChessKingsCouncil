import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    toggle_nav: props => ({
        fontSize: props.fontSize,
        height: '2.25em',
        width: props.flexDirection === 'column' ? '100%' : 0,
        backgroundColor: props.theme.button_fill,
        flexGrow: 0.1,
    }),
    icon: props => ({
        color: props.theme.button_text,
    }),
});