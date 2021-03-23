import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    tool_buttons: props => ({
        width: '80%',
        height: 48,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),

}, {index: 1});