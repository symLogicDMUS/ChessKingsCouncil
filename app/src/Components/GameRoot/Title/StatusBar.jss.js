import {themes} from "../../styles/themes/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {appBarHeight, leftDrawerWidth} from "../../Reuseables/Drawers/ResponsiveDrawer.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    statusBar: props => ({
        zIndex: 7,
        width: "100%",
        fontSize: "1rem",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        color: themes[props.theme].text,
    }),
    status: props => ({
        position: 'fixed',
        top: 0,
        height: appBarHeight,
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (max-width: 960px)': {
            left: 0,
            width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        },
        '@media screen and (min-width: 960px)': {
            left: leftDrawerWidth,
            width: '57vw',
        },
    }),
    text: props => ({
        fontSize: "1rem",
        textAlign: "center",
        color: themes[props.theme].text,
        margin: 'auto'
    }),
    range_analysis_switch: props => ({
        marginLeft: 'auto',
    }),
    signOut: props => ({
       '@media screen and (min-width: 960px)': {
           marginLeft: 'auto',
       },
    }),
}, {index: 1});