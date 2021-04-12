import {makeStyles} from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    modal: props => ({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        zIndex: 2,
        top: 0,
        left: 0,
        '@media screen and (min-width: 960px)': {
            display: 'none',
        },
    }),
    window: props => ({
        borderRadius: '0.25rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].odd_row}`,
        margin: 'auto',
    }),
    top_area: props => ({
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        marginBottom: '0.5vh',
    }),
    content_area: props => ({
        paddingLeft: '3.5vw',
        paddingRight: '3.5vw',
        paddingBottom: '3.5vw',
    }),
    drag_icon: props => ({
        fontSize: '0.8rem',
        color: themes[props.theme].text_alt,
    }),
}, {index: 1});