import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../Reuseables/Drawers/PermanentDrawer.jss";

export const useStyles = makeStyles({
    range_tool: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '@media screen and (max-width: 960px)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        '@media screen and (min-width: 960px)': {
            width: '93%',
            marginLeft: '3.5%',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2vh',
        },
        ...props.styles,
    }),
    divider: props => ({
        /*tablets*/
        '@media screen and (max-width: 960px)': {
            width: 65 * 8 * 0.1,
        },
    }),
    scroll_table_style: props => ({
        '@media screen and (min-width: 960px)': {
            width: '9em',
            height: 9,
            fontSize: (drawerWidth - 55) * 0.5 * 0.333 * 0.333,
        },
    }),
    scroll_table_list_item: props => ({
        fontSize: (drawerWidth - 55) * 0.5 * 0.333 * 0.333,
        height: '1.8em',
    }),
    scroll_table_arrow_button: props => ({
        borderRadius: 0,
    }),
}, {index: 1});

