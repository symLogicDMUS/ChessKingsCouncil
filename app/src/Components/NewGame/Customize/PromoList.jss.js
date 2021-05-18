import { makeStyles } from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";
import {drawerItemMarginLeft, drawerItemMarginTopBottom, drawerItemWidth} from "./Customize.jss";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    scroll_table: props => ({
        '@media screen and (max-width: 960px)': {
            width: '100%',
        },
        '@media screen and (min-width: 960px)': {
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom,
            marginBottom: '1.6vw',
        },
    }),
    scroll_table_added: props => ({
        '@media screen and (max-width: 960px)': {
            marginBottom: '2em',
        },
    }),
    scroll_table_list_item: props => ({
        height: 26,
        borderLeft: `0.05em solid ${themes[props.theme].outline}`,
        borderRight: `0.05em solid ${themes[props.theme].outline}`,
    }),
    scroll_table_button: props => ({
        height: 16,
        borderRadius: 0,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    scroll_table_text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1.75rem',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1rem',
        },
        paddingLeft: '1vw',
    }),
    scroll_table_title: props => ({
        backgroundColor: themes[props.theme].fill,
        '@media screen and (max-width: 960px)': {
            fontSize: '1rem',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1.2rem',
            borderTop: `0.05em solid ${themes[props.theme].outline}`,
            borderLeft: `0.05em solid ${themes[props.theme].outline}`,
            borderRight: `0.05em solid ${themes[props.theme].outline}`,
        },
    }),
}, {index: 1});