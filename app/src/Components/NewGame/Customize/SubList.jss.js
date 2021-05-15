import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes/themes.jss";
import {drawerItemMarginLeft, drawerItemMarginTopBottom, drawerItemWidth} from "./Customize.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    sub_list: props => ({
        display: 'grid',
        '@media screen and (max-width: 960px)': {
            width: `calc(100vw - ${miniVariantIconsColumnWidth+1}px)`,
            gridTemplateColumns: '25% 75%',
        },
        '@media screen and (min-width: 960px)': {
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom,
            marginBottom: drawerItemMarginTopBottom,
            gridTemplateColumns: '7.5vw 15vw',
        },
    }),
    header: props => ({
        gridColumn: '1/3',
        '@media screen and (max-width: 960px)': {
            height: 32,
            fontSize: '1.1rem',
            border: `0.05rem solid ${themes[props.theme].outline_alt2}`,
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1.2rem',
            border: `0.05rem solid ${themes[props.theme].outline}`,
        },
    }),
    cell: props => ({
        height: 26,
        textAlign: 'center',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        '@media screen and (max-width: 960px)': {
            borderRight: `0.05rem solid ${themes[props.theme].outline_alt2}`,
        },
        '@media screen and (min-width: 960px)': {
            borderRight: `0.05rem solid ${themes[props.theme].outline}`,
        },
    }),
    even_row: props => ({
        backgroundColor: themes[props.theme].even_row,
    }),
    odd_row: props => ({
        backgroundColor: themes[props.theme].odd_row,
    }),
    last_row: props => ({
        '@media screen and (min-width: 960px)': {
            borderBottom: `0.05rem solid ${themes[props.theme].outline}`,
        },
        '@media screen and (max-width: 960px)': {
            borderBottom: 'none',
        },
    }),
    col1: props => ({
        gridColumn: 1,
        '@media screen and (min-width: 960px)': {
            borderLeft: `0.05rem solid ${themes[props.theme].outline}`,
        },
        '@media screen and (max-width: 960px)': {
            borderLeft: `0.05rem solid ${themes[props.theme].outline_alt2}`,
        },
    }),
    col2: props => ({
        gridColumn: 2,
    }),
    text: props => ({
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
}, {index: 1});