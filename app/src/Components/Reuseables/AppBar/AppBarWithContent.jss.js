import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../Drawers/MiniVariantDrawer.jss";
import {navDrawerSmWidth} from "../Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    app_bar: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    }),
    appBarCompressedLg: props => ({
        width: `calc(100% - ${props.navDrawerWidth + props.toolDrawerWidth}px)`,
    }),
    appBarRelaxedLg: props => ({
        width: `calc(100% - ${props.toolDrawerWidth}px)`,
    }),
    appBarCompressedSm: props => ({
        width: `calc(100% - ${navDrawerSmWidth + miniVariantIconsColumnWidth + 24}px)`,
    }),
    appBarRelaxedSm: props => ({
        width: `calc(100% - ${miniVariantIconsColumnWidth + 24}px)`,
    }),
    title: props => ({
        // lineHeight: 1.6,
        letterSpacing: '0.0075em',
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        color: themes[props.theme].text,
        '@media screen and (max-width: 960px)': {
            fontSize: '1rem',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2.25vh',
            marginLeft: 12,
        },
    }),
}, {index: 1});