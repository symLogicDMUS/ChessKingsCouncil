import { makeStyles } from "@material-ui/core/styles";
import {board} from "../../Reuseables/Board.jss";
import {fontSizes} from "./PartialRangeModal.jss";

export const useStyles = makeStyles({
    board: props => ({
        zIndex: 'inherit',
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            ...board(fontSizes.desktop)
        },
        '@media (max-aspect-ratio: 1/1)': {
            ...board(fontSizes.mobile)
        },
    }),
});