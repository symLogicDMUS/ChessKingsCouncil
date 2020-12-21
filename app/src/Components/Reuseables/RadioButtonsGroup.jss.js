import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    group: props => ({
       fontSize: props.fontSize,
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
    }),
});