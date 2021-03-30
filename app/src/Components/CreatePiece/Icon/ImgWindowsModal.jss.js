import {makeStyles} from "@material-ui/core/styles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    modal: props => ({
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        zIndex: 2,
    }),
    window: props => ({
        display: 'flex',
        borderRadius: '0.5rem',
        backgroundColor: themes[props.theme].fill,
        margin: 'auto',
    }),
    x_close_flexbox: props => ({
        width: '84vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
}, {index: 1});