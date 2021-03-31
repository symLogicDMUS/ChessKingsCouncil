import {makeStyles} from "@material-ui/core/styles";
import {viewWidth} from "../../helpers/windowMeasurments";
import {themes} from "../../styles/themes.jss";

const z = 5;
export const appBarHeight = 48;
export const toolDrawerWidth = viewWidth() * 0.25;
export const navDrawerSmWidth = 180;

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        display: 'flex',
        minHeight: 48,
        height: 48,
        '& .MuiToolbar-regular': {
            minHeight: 48,
            height: 48,
        },
        '@media screen and (min-width: 960px)': {
            "& .MuiToolbar-gutters": {
                padding: 0
            },
        },
    }),
    drawer: props => ({
        [theme.breakpoints.up('md')]: {
            width: props.navDrawerWidth,
            flexShrink: 0,
        },
    }),
    appBar: props => ({
        zIndex: z,
        marginLeft: props.navDrawerWidth,
        background: themes[props.theme].fill,
        borderBottom: `0.07em solid ${themes[props.theme].drawer_outline}`
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
    title: props => ({
        fontWeight: 500,
        lineHeight: 1.6,
        overflow: 'hidden',
        fontSize: '1.25rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        letterSpacing: '0.0075em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
}), {index: 1});