import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    profile: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'column',
    }),
});