import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    board: props => ({
        zIndex: 2,
        position: 'absolute',
        top: props.boardPos.top,
        left: props.boardPos.left,
        display: 'grid',
        gridTemplateColumns: `repeat(8, ${props.sqrSize}px)`,
        gridTemplateRows: `repeat(8, ${props.sqrSize}px)`,
    }),
}, {index: 1});