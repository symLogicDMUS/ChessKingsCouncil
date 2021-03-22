import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    tool_buttons: props => ({
        padding: '1vw',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        transform: 'translate(0, -0.8em)',
        ...props.style,
    }),

}, {index: 1});