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
        width: "10.625vw",
        borderLeft: `0.025em solid ${themes[props.theme].outline}`,
        borderRight: `0.025em solid ${themes[props.theme].outline}`,
        paddingLeft: '0.5rem',
    }),
    scroll_table_text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1rem',
        },
        '@media screen and (min-width: 960px) and (max-width: 1080px)': {
            fontSize: '0.8em',
        },
        '@media screen and (min-width: 1080px)': {
            fontSize: '0.8rem',
        },
    }),
    scroll_table_arrow_button: props => ({
        height: '1.0625vw',
        width: "10.625vw",
        minHeight: 'unset',
        backgroundColor: themes[props.theme].fill,
    }),
    top_arrow_button: props => ({
       borderTopLeftRadius: '0.2rem',
       borderTopRightRadius: '0.2rem',
       borderBottomLeftRadius: 0,
       borderBottomRightRadius: 0,
    }),
    bottom_arrow_button: props => ({
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: '0.2rem',
        borderBottomRightRadius: '0.2rem',
    }),

}, {index: 1});

