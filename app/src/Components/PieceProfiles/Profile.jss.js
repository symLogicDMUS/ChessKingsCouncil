import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    profile: props => ({
        display: 'flex',
        flexDirection: 'column',
        fontSize: props.fontSize,
    }),
});