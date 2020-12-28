import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    profile: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }),
    divider: props => ({
        fontSize: props.fontSize,
        width: '37em',
        marginLeft: '1.35em',
        marginTop: '0.75em',
        marginBottom: '0.75em',
    }),
});
