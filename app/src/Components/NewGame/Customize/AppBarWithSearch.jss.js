import {fontSize0023} from "../../styles/fontSizes.jss";
import { makeStyles } from "@material-ui/core/styles";
import {toolDrawerWidth} from "../../Reuseables/Drawers/ResponsiveDrawer.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    app_bar_with_search: props => ({
        fontSize: fontSize0023,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),

    appBarCompressed: props => ({
        width: `calc(100% - ${props.navDrawerWidth + toolDrawerWidth + 24}px)`,
    }),
    appBarRelaxed: props => ({
        width: `calc(100% - ${toolDrawerWidth + 24}px)`,
    }),
    title: props => ({
        color: themes[props.theme].text,
    }),
}, {index: 1});