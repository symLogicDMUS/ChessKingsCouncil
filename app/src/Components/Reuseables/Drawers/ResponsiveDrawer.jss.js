import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {miniVariantIconsColumnWidth} from "./MiniVariantDrawer.jss";
import {leftDrawerWidth} from "./PermanentDrawerLeft.jss";

export const z = 5;
export const appBarHeight = 48;
export const toolBarPadding = 4;
export const menuIconWidth = 48;
export const menuIconPadding = 12;
export const navDrawerSmWidth = 200;
export const menuIconMarginRight = 8;

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        '& .MuiToolbar-regular': {
            minHeight: 48,
            height: 48,
        },
    }),
    mainContent: props => ({
        display: 'flex',
        flexDirection: 'column',
    }),
    lgMainWithDrawer: props => ({
        width: '57vw',
        marginLeft: '18vw',
        height: `calc(100vh - ${appBarHeight}px)`,
    }),
    lgMainWithNB: props => ({
        width: '100vw',
        fontSize: '1.85vw',
        height: `calc(100vh - 1.35em)`,
    }),
    smMainWithMiniVariant: props => ({
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
    }),
    smMainFull: props => ({
       width: '100vw',
    }),
    smMain: props => ({
        height: `calc(100vh - ${appBarHeight}px)`,
    }),
    drawer: props => ({
        [theme.breakpoints.up('md')]: {
            width: leftDrawerWidth,
            flexShrink: 0,
        },
    }),
    appBar: props => ({
        flexGrow: 1,
        zIndex: z,
        background: themes[props.theme].fill,
        borderBottom: `0.07em solid ${themes[props.theme].drawer_outline}`,
    }),
    menuButton: props => ({
        zIndex: z,
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        color: themes[props.theme].text,
    }),
    toolbar: {
        minHeight: 48,
        height: 48,
    },
    drawerPaper: props => ({
        zIndex: z,
        backgroundColor: themes[props.theme].fill,
    }),
    drawerPaper2: props => ({
        zIndex: z,
        backgroundColor: themes[props.theme].fill2,
    }),
    hidden: props => ({
        display: 'none',
    }),
}), {index: 1});
