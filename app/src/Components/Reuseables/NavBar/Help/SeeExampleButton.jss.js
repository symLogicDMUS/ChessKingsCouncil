import {makeStyles} from "@material-ui/core/styles";
import {appBarHeight} from "../../Drawers/ResponsiveDrawer.jss";
import {themes} from "../../../styles/themes.jss";

export const useStyles = makeStyles({
    modal: props => ({
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 14,
        backgroundColor: '#000',
    }),
    src: props => ({
        width: '100%',
        maxHeight: `calc(100% - ${appBarHeight}px)`,
        position: 'absolute',
        top: appBarHeight,
        left: 0,
    }),
    button: props => ({
        color: themes[props.theme].text,
    }),
    close: props => ({
        position: 'fixed',
        top: 0,
        right: '0.5rem',
        borderRadius: 0,
        padding: 0,
        height: 48,
        backgroundColor: '#000',
        color: '#fff',
        "& .MuiSvgIcon-root": {
            color: '#fff',
        },
        zIndex: 14,
    }),
    icon: props => ({
       transform: 'translate(0, -0.05rem)'
    }),
    link: props => ({
        display: 'inline-block',
        marginLeft: '0.25rem',
        marginRight: '0.25rem',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        boxSizing: 'inherit',
        letterSpacing: '0.00938em',
        color: themes[props.theme].sqr_hover_alt,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        '&:hover':{
            textDecoration: 'underline',
        },
    }),
}, {index: 1});