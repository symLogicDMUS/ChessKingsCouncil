import {makeStyles} from "@material-ui/core/styles";
import {boardPos, game_board} from "../../Reuseables/Board/Board.jss";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    animation_plane: props => ({
        ...game_board(props.boardSize, props.boardPos, 5),
    }),
    piece: props => ({
        zIndex: 5,
        position: 'fixed',
        width: props.sqrSize * 0.95,
        height: props.sqrSize * 0.95,
    }),
    start_sqr: props => ({
        zIndex: 4,
        position: 'fixed',
        width: props.sqrSize,
        height: props.sqrSize,
        '@media screen and (min-width: 960px)': {
            border: `0.35em solid ${themes[props.theme].sqr_border}`
        },
        '@media screen and (max-width: 960px)': {
            border: `0.2em solid ${themes[props.theme].sqr_border}`
        },
    }),
}, {index: 1});