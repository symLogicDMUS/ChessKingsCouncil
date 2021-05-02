import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes/themes.jss";
import {drawerItemMarginLeft, drawerItemMarginTopBottom, drawerItemWidth} from "./Customize.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    sub_list: props => ({
        display: 'grid',
        '@media screen and (max-width: 960px)': {
            marginTop: '0.5vw',
            marginLeft: '2.5vw',
            marginRight: '2.5vw',
            marginBottom: '2.5vw',
            width: `calc(94vw - ${miniVariantIconsColumnWidth}px)`,
            gridTemplateColumns: '24.5% 74.5%',
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
            fontSize: '1.2rem',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1.2vw',
        },
        borderBottom: `0.05rem solid ${themes[props.theme].outline}`,
    }),
    cell: props => ({
        textAlign: 'center',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        borderRight: `0.05rem solid ${themes[props.theme].outline}`,
    }),
    row: props => ({
        '@media screen and (max-width: 960px)': {
            height: '1rem',
        },
        '@media screen and (min-width: 960px)': {
            height: '2vw',
        },
    }),
    even_row: props => ({
        backgroundColor: themes[props.theme].even_row,
    }),
    odd_row: props => ({
        backgroundColor: themes[props.theme].odd_row,
    }),
    last_row: props => ({
        borderBottom: `0.05rem solid ${themes[props.theme].outline}`,
    }),
    col1: props => ({
        gridColumn: 1,
        borderLeft: `0.05rem solid ${themes[props.theme].outline}`,
    }),
    col2: props => ({
        gridColumn: 2,
    }),
    text: props => ({
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
}, {index: 1});