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
}, {index: 1});