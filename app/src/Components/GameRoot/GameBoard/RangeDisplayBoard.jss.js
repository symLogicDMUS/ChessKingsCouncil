import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        board: (props) => ({
            zIndex: 2,
            display: "grid",
            position: "fixed",
            top: props.boardPos.top,
            left: props.boardPos.left,
            gridTemplateColumns: `repeat(8, ${props.sqrSize}px)`,
            gridTemplateRows: `repeat(8, ${props.sqrSize}px)`,
        }),
    },
    { index: 1 }
);
