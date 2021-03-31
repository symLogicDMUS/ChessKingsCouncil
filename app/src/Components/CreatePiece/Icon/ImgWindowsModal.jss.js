import {makeStyles} from "@material-ui/core/styles";
import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    window: props => ({
        borderRadius: '0.5rem',
        backgroundColor: themes[props.theme].fill,
        margin: 'auto',
    }),
    window_area: props => ({
        display: 'flex',
        flexDirection: 'row',
    }),
}, {index: 1});