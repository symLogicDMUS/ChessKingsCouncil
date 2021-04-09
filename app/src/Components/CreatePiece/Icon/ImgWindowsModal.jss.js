import {makeStyles} from "@material-ui/core/styles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";
import {appBarHeight} from "../../Reuseables/Drawers/PersistentDrawer.jss";

export const useStyles = makeStyles({
    window: props => ({
        margin: 'auto',
        borderRadius: '0.5rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].odd_row}`,
    }),
    window_area: props => ({
        display: 'flex',
        flexDirection: 'row',
    }),
    draggable_icon: props => ({
        color: themes[props.theme].text_alt,
        cursor: 'move',
    }),
    icon: props => ({
        height: '2vw',
        width: '2vw',
    }),
    done_button: props => ({
        fontSize: '2vw',
        color: themes[props.theme].text,
    }),
    below_window_area: props => ({
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: '111%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    ok_fab: props => ({
        zIndex: 8,
        marginLeft: 'auto',
        marginTop: '2vw',
        marginRight: '2vw',
        position: 'relative',
        top: appBarHeight,
       backgroundColor: themes[props.theme].fill,
       color: themes[props.theme].text,
    }),
}, {index: 1});