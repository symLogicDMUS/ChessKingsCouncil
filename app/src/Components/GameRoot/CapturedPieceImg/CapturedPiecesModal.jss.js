import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    captured_piece_images_modal: props => ({
        margin: 'auto',
        borderRadius: '0.25rem',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].odd_row}`,
    }),
}, {index: 1});