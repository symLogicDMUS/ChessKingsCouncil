import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

const z = 5;
export const appBarHeight = 48;
export const navDrawerSmWidth = 180;

export const pageTitle = (theme) => ({
    fontWeight: 500,
    lineHeight: 1.6,
    overflow: 'hidden',
    fontSize: '1.08rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    letterSpacing: '0.0075em',
    color: themes[theme].text,
    fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
});

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        '& .MuiToolbar-regular': {
            minHeight: 48,
            height: 48,
        },
        "& .MuiToolbar-gutters": {
            '@media screen and (max-width: 960px)': {
                paddingLeft: 16,
                paddingRight: 4,
            },
            '@media screen and (min-width: 960px)': {
                padding: 0
            },
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
    appBarRelaxed: props => ({
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
        paddingLeft: '1.15vw',
        paddingRight: '1.15vw',
        display: 'flex',
        flexDirection: 'column',
    }),
    hidden: props => ({
       display: 'none',
    }),
}), {index: 1});