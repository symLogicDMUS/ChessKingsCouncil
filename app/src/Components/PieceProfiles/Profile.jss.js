import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    profile: props => ({
        display: 'flex',
        flexDirection: 'column',
        fontSize: props.fontSize,
    }),
    divider: props => ({
        fontSize: props.fontSize,
        width: '74.5em',
        marginTop: '0.75em',
        marginBottom: '0.75em',
        marginLeft: '1.8em',
    }),
});