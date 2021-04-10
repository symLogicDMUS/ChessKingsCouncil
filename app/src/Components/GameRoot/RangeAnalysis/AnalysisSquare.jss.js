import { makeStyles } from "@material-ui/core/styles";

/**
 * see ChessKingsCouncil/app/src/Reuseables/Square.jss for more
 * */
export const useStyles = makeStyles({
    square: props => ({
        maxWidth: '11vh',
        maxHeight: '11vh',
        minWidth: 'unset',
        minHeight: 'unset',
    }),
}, {index: 1});