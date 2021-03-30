import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../Drawers/MiniVariantDrawer.jss";

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
        width: `calc(100% - 25vw)`,
    }),
    appBarRelaxedSm: props => ({
        width: `calc(100% - ${miniVariantIconsColumnWidth + 24}px)`,
    }),
    title: props => ({
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
}, {index: 1});