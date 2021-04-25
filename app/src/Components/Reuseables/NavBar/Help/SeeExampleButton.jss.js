import {makeStyles} from "@material-ui/core/styles";
import {appBarHeight} from "../../Drawers/ResponsiveDrawer.jss";
import {themes} from "../../../styles/themes/themes.jss";

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
    img_area: props => ({
        position: 'absolute',
        top: appBarHeight,
        left: 0,
        width: `calc(100vw - 1px)`,
        height: `calc(100vh - ${appBarHeight}px)`,
        display: 'flex',
        border: '1px solid #262626',
    }),
    src: props => ({
        maxHeight: '100%',
        maxWidth: '100%',
        minHeight: '50%',
        minWidth: '50%',
        margin: 'auto',
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
        display: 'inline',
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