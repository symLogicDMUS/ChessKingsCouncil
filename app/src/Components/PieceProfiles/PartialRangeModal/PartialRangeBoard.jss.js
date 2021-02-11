import { makeStyles } from "@material-ui/core/styles";
import {board} from "../../Reuseables/Board.jss";
import {fontSizes} from "./PartialRangeModal.jss";

export const useStyles = makeStyles({
    board: props => ({
        zIndex: 'inherit',
        '@media (min-aspect-ratio: 16/9)': {
            ...board(fontSizes.desktop)
        },
        '@media (max-aspect-ratio: 1/1)': {
            ...board(fontSizes.mobile)
        },
    }),
});