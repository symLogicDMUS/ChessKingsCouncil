import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const buttonStyle = {maxWidth: 130};

const topAreaHeight = 40;

export const useStyles = makeStyles({
    root: props => ({
        '--space': `calc(100vh - ${topAreaHeight}px)`,
        '--bannerHeight': 'calc(var(--space) * 0.45)',
        '--menuHeight': 'calc(var(--space) * 0.55)'
    }),
    banner: props => ({
        zIndex: 1,
        width: '100vw',
        height: 'var(--bannerHeight)',
        verticalAlign: 'middle',
    }),
    main_menu: props => ({
        zIndex: 1,
        width: '100vw',
        height: 'var(--menuHeight)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    }),
    title: props => ({
        position: 'fixed',
        left: '50vw',
        width: '45vw',
        top: '14vh',
    }),
    page_links: props => ({
        margin: 'auto',
        display: 'flex',
    }),
    button: props => ({
        borderRadius: 0,
        margin: '0 0.35rem',
        color: '#d7bb99',
        backgroundColor: '#000',
    }),
    top_area: props => ({
        zIndex: 2,
        height: topAreaHeight,
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#000',
    }),
    icon: props => ({
        fontSize: '1rem',
    }),
}, {index: 1});
