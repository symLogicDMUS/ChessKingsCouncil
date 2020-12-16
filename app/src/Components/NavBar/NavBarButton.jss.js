import makeStyles from "@material-ui/core/styles/makeStyles";
import {sidBarWidth} from "../Reuseables/SidBar.jss";

const margin = '0.6em'

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        fontSize: props.flexDirection === 'column' ? props.fontSize * 5 : props.fontSize,
        height: '2.25em',
        width: props.flexDirection === 'column' ? sidBarWidth*0.99 : 0,
        flexGrow: 1,
        background: '#414141',
        borderRadius: 0,
    }),
    box: props => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }),
    text: props => ({
        fontSize: props.flexDirection === 'column' ? props.fontSize : props.fontSize*0.8,
        marginRight: margin,
        marginTop: '0.15em'
    }),
    icon: props => ({
        fontSize: props.fontSize*1.2,
        marginRight: margin,
    }),
});
