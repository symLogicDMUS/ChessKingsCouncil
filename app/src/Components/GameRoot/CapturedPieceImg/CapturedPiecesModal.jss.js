import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    captured_piece_images_modal: props => ({
        zIndex: 6,
        position: 'fixed',
        padding: '0.1rem',
        borderRadius: '0.25rem',
        backgroundColor: themes[props.theme].fill2,
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        border: `0.065rem solid ${themes[props.theme].odd_row}`,
    }),
}, {index: 1});