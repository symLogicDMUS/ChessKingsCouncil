import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "./MiniVariantDrawer.jss";

const z = 5;
export const appBarHeight = 48;
export const toolBarPadding = 4;
export const menuIconWidth = 48;
export const menuIconPadding = 12;
export const navDrawerSmWidth = 180;
export const menuIconMarginRight = 8;
export const rightDrawerWidth = '25vw';
export const leftDrawerWidth = '18vw';

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        '& .MuiToolbar-regular': {
            minHeight: 48,
            height: 48,
        },
    }),
    main: props => ({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    }),
    drawer: props => ({
        [theme.breakpoints.up('md')]: {
            width: '18vw',
            flexShrink: 0,
        },
    }),
    appBar: props => ({
        flexGrow: 1,
        zIndex: z,
        background: themes[props.theme].fill,
        borderBottom: `0.07em solid ${themes[props.theme].drawer_outline}`,
    }),
    appBarLg: props => ({
        width: '57vw',
        marginRight: rightDrawerWidth,
    }),
    appBarCompressed: props => ({
        width: `calc(82vw - ${miniVariantIconsColumnWidth}px)`,
        marginRight: miniVariantIconsColumnWidth,
    }),
    appBarRelaxed: props => ({
        width: '100vw',
    }),
    menuButton: props => ({
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
    navPermanentPaper: props => ({
        zIndex: z,
        width: leftDrawerWidth,
        '@media screen and (max-width: 960px)': {
            width: 0,
        },
    }),
    navPersistentPaper: props => ({
        zIndex: z,
        width: navDrawerSmWidth,
    }),
    toolDrawerPaper: props => ({
        zIndex: z,
        width: rightDrawerWidth,
    }),
    tools: props => ({
        zIndex: z,
        flexGrow: 1,
        display: 'flex',
        paddingLeft: '1.15vw',
        paddingRight: '1.15vw',
        flexDirection: 'column',
    }),
    hidden: props => ({
        display: 'none',
    }),
}), {index: 1});
