import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    two_item_app_bar: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    child1: props => ({
        flexGrow: 1,
    }),
    child2: props => ({
        marginRight: 'auto',
    }),
    icon: props => ({
        color: themes[props.theme].text,
        fontSize: '1.1rem',
    }),
}, {index: 1});