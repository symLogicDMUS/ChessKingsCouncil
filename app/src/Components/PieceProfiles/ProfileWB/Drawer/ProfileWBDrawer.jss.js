import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../../styles/themes.jss";
import {neighborWidth as drawerWidth} from "../../../Reuseables/Drawers/PersistentDrawer.jss";
import {modal} from "../../../helpers/modal.jss";

export const margin = '5vh';
export const headerHeight = '3.5vh';
export const sqrSize = '23vh';
export const boardSqrSize = '2.75vh';
export const halfMargin = '2.5vh';

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        height: '100%',
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 8,
    }),
    modal: props => ({
        ...modal,
        zIndex: 9,
    }),
    root_inactive: {
        pointerEvents: 'none',
    },
    wrapper: {},
    paper: {
        position: "relative",
    },
    profile_wb_drawer: props => ({
        height: '100vh',
        zIndex: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].odd_row}`,
    }),
    sqr_item_area: props => ({
        display: 'flex',
        flexDirection: 'column',
        marginLeft: margin,
        marginRight: margin,
    }),
    sqr_item: props => ({
        width: sqrSize,
        height: sqrSize,
        backgroundColor: themes[props.theme].fill,
        outline: `0.05rem solid ${themes[props.theme].outline}`,
    }),
    sqr_item_header: props => ({
        height: headerHeight,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        outline: `0.05rem solid ${themes[props.theme].outline}`,
    }),
    sqr_item_title: props => ({
        color: themes[props.theme].text,
    }),
    item1: props => ({
        marginBottom: halfMargin
    }),
    item2: props => ({
        marginTop: halfMargin,
        marginBottom: halfMargin,
    }),
    item3: props => ({
        marginTop: halfMargin,
    }),
    top_area: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: halfMargin,
    }),
    chevron_button: props => ({
        color: themes[props.theme].text,
        width: margin,
        height: margin,
        marginRight: 1,
    }),
    icon: props => ({
       fontSize: '1.5rem',
    }),
    invisible: props => ({
       opacity: 0,
    }),
    name_and_color: props => ({
        flexGrow: 3,
        textAlign: 'center',
        fontWeight: 500,
        overflow: 'hidden',
        fontSize: '1rem',
        letterSpacing: '0.0075em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
}));