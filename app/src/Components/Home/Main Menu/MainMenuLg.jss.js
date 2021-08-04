import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const buttonStyle = {maxWidth: 130};

export const useStyles = makeStyles({
    root: props => ({
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        backdropFilter: 'blur(5px)',
        // backgroundColor: 'rgba(255, 255, 255, 0.1)',
    }),
    main_menu: props => ({
        borderRadius: 8,
        padding: '1rem',
        zIndex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.3)',
        // backdropFilter: 'blur(2px)'
    }),
    title: props => ({
        width: '80vw',
        marginBottom: '2.5vh',
    }),
    button: props => ({
        borderRadius: 0,
        margin: '0 0.35rem',
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        '&:hover': {
            backgroundColor: lighten(themes[props.theme].fill, 0.1),
        },
    }),
    page_links: props => ({
        display: 'flex',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
    }),
    top_area: props => ({
        zIndex: 2,
        position: 'fixed',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: themes[props.theme].fill,
        boxShadow:
            '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    }),
    icon: props => ({
        fontSize: '1rem',
    }),
}, {index: 1});
