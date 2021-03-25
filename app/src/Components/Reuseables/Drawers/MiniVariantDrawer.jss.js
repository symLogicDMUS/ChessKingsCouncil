import {makeStyles} from "@material-ui/core/styles";
import {viewWidth} from "../../helpers/windowMeasurments";
import {themes} from "../../styles/themes.jss";

export const toolButtonsDrawerWidth = viewWidth()*0.25;

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        display: 'flex',
    }),
    drawer: props => ({
        flexShrink: 0,
        whiteSpace: 'nowrap',
    }),
    drawerPaper: props => ({
        backgroundColor: themes[props.theme].fill2,
    }),
    drawerOpen: props => ({
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
        width: theme.spacing(7) + 1,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
    }),
    toolbar: props => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        minHeight: 48,
        height: 48,
    }),
    chevron: props => ({
        color: themes[props.theme].text,
    }),
    chevronClosed: props =>  ({
      margin: 'auto',
    }),
    chevronOpen: props =>  ({
      marginRight: 'auto',
    }),
    content: props =>  ({
        flexGrow: 1,
    }),
    icon_extra_width_expanded: props => ({
        "& .MuiListItemIcon-root": {
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