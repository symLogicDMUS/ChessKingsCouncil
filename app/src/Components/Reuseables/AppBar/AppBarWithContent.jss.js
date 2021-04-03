import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../Drawers/MiniVariantDrawer.jss";
import {navDrawerSmWidth} from "../Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    app_bar: props => ({}),
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
        letterSpacing: '0.0075em',
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        color: themes[props.theme].text,
        fontSize: '1rem',
        '@media screen and (min-width: 960px)': {
            marginLeft: 12,
        },
    }),
}, {index: 1});