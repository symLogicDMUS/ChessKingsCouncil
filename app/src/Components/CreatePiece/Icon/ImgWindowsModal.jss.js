import {makeStyles} from "@material-ui/core/styles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

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
    done_button: props => ({
        fontSize: '2vw',
        width: '63.5vw',
        height: '2.1em',
        marginLeft: '3.5vw',
    }),
    icon: props => ({
        height: '2vw',
        width: '2vw',
    }),
}, {index: 1});