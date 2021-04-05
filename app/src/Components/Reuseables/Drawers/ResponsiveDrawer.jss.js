import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

const z = 5;
export const appBarHeight = 48;
export const navDrawerSmWidth = 180;
export const menuIconWidth = 48;
export const menuIconMargin = 12;

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
            width: props.navDrawerWidth,
            flexShrink: 0,
        },
    }),
    appBar: props => ({
        flexGrow: 1,
        zIndex: z,
        marginLeft: props.navDrawerWidth,
        background: themes[props.theme].fill,
        borderBottom: `0.07em solid ${themes[props.theme].drawer_outline}`,
    }),
    appBarMdCompressed: props => ({
        width: `calc(100% - ${props.navDrawerWidth}px)`,
    }),
    appBarSmCompressed: props => ({
       width: `calc(100% - ${navDrawerSmWidth}px)`
    }),
    appBarMdRelaxed: props => ({
        width: '100%',
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
        backgroundColor: themes[props.theme].fill2,
    }),
    navPermanentPaper: props => ({
        zIndex: z,
        width: props.navDrawerWidth,
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
        width: props.toolDrawerWidth,
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