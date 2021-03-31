import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

const z = 6;
export const miniVariantIconsColumnWidth = 56;

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        zIndex: z,
        display: 'flex',
    }),
    drawer: props => ({
        zIndex: z,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    }),
    drawerPaper: props => ({
        zIndex: z,
        backgroundColor: themes[props.theme].fill2,
    }),
    drawerOpen: props => ({
        zIndex: z,
        width: '25vw',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        '@media screen and (max-width: 780px)': {
            minWidth: 168,
        },
    }),
    drawerClose: props => ({
        zIndex: z,
        width: miniVariantIconsColumnWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
    }),
    toolbar: props => ({
        zIndex: z,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        minHeight: 48,
        height: 48,
    }),
    chevron: props => ({
        zIndex: z,
        color: themes[props.theme].text,
    }),
    chevronClosed: props =>  ({
        zIndex: z,
        margin: 'auto',
    }),
    chevronOpen: props =>  ({
        zIndex: z,
        marginRight: 'auto',
    }),
    content: props =>  ({
        zIndex: z,
        flexGrow: 1,
    }),
    icon_extra_width_expanded: props => ({
        "& .MuiListItemIcon-root": {
            zIndex: z,
            '@media screen and (max-width: 640px)': {
                minWidth: 'unset',
                width: 20,
                marginRight: 10,
            },
            '@media screen and (max-width: 440px)': {
                marginRight: 4,
            },
        },
    }),
}), {index: 1});