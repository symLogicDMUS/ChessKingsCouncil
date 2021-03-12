import {makeStyles} from "@material-ui/core/styles";
import {boardPos, game_board} from "../../Reuseables/Board/Board.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    animation_plane: props => ({
        ...game_board(props.boardSize, 5),
    }),
    piece: props => ({
        position: 'absolute',
        zIndex: 5,
        width: props.sqrSize * 0.95,
        height: props.sqrSize * 0.95,
    }),
    start_sqr: props => ({
        zIndex: 4,
        position: 'absolute',
        width: props.sqrSize,
        height: props.sqrSize,
        '@media screen and (min-device-width: 1040px)': {
            border: `0.35em solid ${themes[props.theme].sqr_border}`
        },
        '@media screen and (max-device-width: 1040px)': {
            border: `0.2em solid ${themes[props.theme].sqr_border}`
        },
    }),
}, {index: 1});