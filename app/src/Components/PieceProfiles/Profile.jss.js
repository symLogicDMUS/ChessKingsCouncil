import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    profile: props => ({
        display: 'flex',
        flexDirection: 'column',
        fontSize: props.fontSize,
    }),
    divider: props => ({
        fontSize: props.fontSize,
        width: '37em',
        marginLeft: '1.35em',
        marginTop: '0.75em',
        marginBottom: '0.75em',
    }),
});
