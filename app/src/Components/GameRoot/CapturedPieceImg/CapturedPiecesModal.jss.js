import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    captured_piece_images_modal: props => ({
        borderRadius: '0.25rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].odd_row}`,
        width: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
    }),
}, {index: 1});