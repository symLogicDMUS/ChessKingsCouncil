import { makeStyles } from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";
import {drawerItemMarginLeft, drawerItemMarginTopBottom, drawerItemWidth} from "./Customize.jss";
import {themes} from "../../styles/themes/themes.jss";

export const tableHeightSm = 232;

export const useStyles = makeStyles({
    scroll_table: props => ({
        '@media screen and (max-width: 960px)': {
            width: `calc(100vw - ${miniVariantIconsColumnWidth+2}px)`,
        },
        '@media screen and (min-width: 960px)': {
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom,
            marginBottom: '1.6vw',
        },
    }),
    scroll_table_added: props => ({
        '@media screen and (min-width: 960px)': {
            margin: 'auto',
        },
        '@media screen and (max-width: 960px)': {
            marginBottom: '2em',
        },
    }),
    scroll_table_list_item: props => ({
        height: 26,
        '@media screen and (max-width: 960px)': {
            border: 'none',
        },
    }),
    scroll_table_button: props => ({
        height: '1.2rem',
        borderRadius: 0,
        '@media screen and (max-width: 960px)': {
            borderLeft: 'none',
            borderRight: 'none',
        },
        '@media screen and (min-width: 960px)': {
            borderLeft: `0.05em solid ${themes[props.theme].outline}`,
            borderRight: `0.05em solid ${themes[props.theme].outline}`,
        },
    }),
    top_button: props => ({
       '@media screen and (max-width: 960px)': {
           borderTop: `0.05rem solid ${themes[props.theme].outline_alt2}`,
           borderBottom: `0.05rem solid ${themes[props.theme].outline_alt2}`,
       },
    }),
    bottom_button: props => ({
        '@media screen and (max-width: 960px)': {
            borderTop: `0.05rem solid ${themes[props.theme].outline_alt2}`,
            borderBottom: 'none',
        },
    }),
    scroll_table_text: props => ({
        fontSize: '1rem',
        paddingLeft: '0.3rem',
    }),
    scroll_table_title: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1rem',
            border: 'none',
            height: 28,
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1rem',
        },
    }),
}, {index: 1});