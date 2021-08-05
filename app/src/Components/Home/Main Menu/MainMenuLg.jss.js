import {lighten, makeStyles} from "@material-ui/core/styles";

const topAreaHeight = 40;

export const textColor = '#fff';

export const buttonStyle = {maxWidth: 130};

export const signOutStyleOverride = {color: textColor, marginRight: '0.5rem'};




export const useStyles = makeStyles({
    root: props => ({
        '--space': `calc(100vh - ${topAreaHeight}px)`,
        '--bannerHeight': 'calc(var(--space) * 0.4)',
        '--menuHeight': 'calc(var(--space) * 0.6)'
    }),
    banner: props => ({
        zIndex: 1,
        width: '100vw',
        height: 'var(--bannerHeight)',
        verticalAlign: 'middle',
    }),
    main_menu_container: props => ({
        zIndex: 1,
        width: '100vw',
        height: 'var(--menuHeight)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    }),
    main_menu: props => ({
       margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    title: props => ({
        width: '67.5vw',
    }),
    page_links: props => ({
        display: 'flex',
    }),
    button: props => ({
        borderRadius: 0,
        margin: '0 0.35rem',
        color: textColor,
        backgroundColor: '#253b73',
    }),
    app_bar: props => ({
        zIndex: 2,
        height: topAreaHeight,
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#253b73',
        boxShadow:
            '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    }),
    icon: props => ({
        fontSize: '1rem',
    }),
}, {index: 1});
