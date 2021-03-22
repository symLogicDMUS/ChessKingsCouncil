import makeStyles from "@material-ui/core/styles/makeStyles";
import {viewWidth} from "../../helpers/windowMeasurments";
import {drawerWidth} from "../../Reuseables/Drawers/PermanentDrawer.jss";
import {fontSize0015} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    range_tool: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '@media screen and (max-width: 412px)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        /*short/medium height phones*/
        "@media screen and (min-width: 412px) and  (max-width: 767px)": {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        /*tablets*/
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        '@media screen and (min-width: 1040px)': {
            width: '93%',
            marginLeft: '3.5%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        ...props.styles,
    }),
    divider: props => ({
        /*tablets*/
        '@media screen and (min-width: 768px) and (max-width: 1040px)': {
            width: 65 * 8 * 0.1,
        },
    }),
    scroll_table_style: props => ({
        '@media screen and (min-width: 1040px)': {
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

