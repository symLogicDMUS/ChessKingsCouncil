import { makeStyles } from "@material-ui/core/styles";
import {game_board} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    hover_board: props => ({
       ...game_board(2)
    }),
});