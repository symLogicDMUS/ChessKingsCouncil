import { makeStyles } from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";
import {drawerItemMarginLeft, drawerItemMarginTopBottom, drawerItemWidth} from "./Customize.jss";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    modal: props => ({
        height: '100vh',
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        position: 'fixed',
        zIndex: 5,
        top: 0,
        left: 0,
    }),
    window: props => ({
        zIndex: 6,
        position: 'fixed',
        padding: '0.1rem',
        borderRadius: '0.25rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.065rem solid ${themes[props.theme].odd_row}`,
    }),
    top_area: props => ({
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    }),
    close_button: props => ({
        padding: '0.2rem',
    }),
    icon: props => ({
        '@media screen and (max-width: 460px)': {
            width: '0.75rem',
            height: '0.75rem',
        },
        '@media screen and (min-width: 460px)': {
            height: '2.25vw',
            width: '2.25vw',
        },
    }),
    drag_icon: props => ({
        color: themes[props.theme].text_alt,
        cursor: 'move',
    }),
    close_icon: props => ({
        color: themes[props.theme].text,
    }),
    scroll_table: props => ({
        '@media screen and (max-width: 960px)': {
            width: `calc(94vw - ${miniVariantIconsColumnWidth}px)`,
            marginLeft: '2.5vw',
            marginRight: '2.5vw',
            marginBottom: '2.5vw',
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
        '@media screen and (max-width: 960px)': {
            height: '7.5vh',
        },
        '@media screen and (min-width: 960px)': {
            height: '2vw',
        },
    }),
    scroll_table_button: props => ({
        height: '1.2rem',
        borderRadius: 0,
    }),
    scroll_table_text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1.75rem',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1vw',
        },
        paddingLeft: '1vw',
    }),
    scroll_table_title: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1rem',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1.2vw',
        },
    }),
}, {index: 1});