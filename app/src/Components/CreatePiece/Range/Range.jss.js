import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../Reuseables/Drawers/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";

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
    scroll_table_list_item: props => ({
        height: '1.7vw',
        borderLeft: `0.025em solid ${themes[props.theme].outline}`,
        borderRight: `0.025em solid ${themes[props.theme].outline}`,
    }),
    scroll_table_arrow_button: props => ({
        borderRadius: 0,
        height: '1.0625vw',
        minHeight: 'unset',
    }),
}, {index: 1});

