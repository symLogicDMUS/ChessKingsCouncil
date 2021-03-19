import { makeStyles } from "@material-ui/core/styles";
import {board} from "../../Reuseables/Board/Board.jss";
import {fontSizes} from "./PartialRangeModal.jss";

export const useStyles = makeStyles({
    board: props => ({
        zIndex: 'inherit',
        '@media screen and (min-width: 1040px)': {
            ...board(fontSizes.desktop)
        },
        '@media screen and (max-width: 1040px)': {
            ...board(fontSizes.mobile)
        },
    }),
}, {index: 1});