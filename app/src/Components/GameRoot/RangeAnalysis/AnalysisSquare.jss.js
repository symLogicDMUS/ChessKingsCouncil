import {lighten, makeStyles} from "@material-ui/core/styles";
import {fade} from "@material-ui/core";
import {themes} from "../../styles/themes.jss";

/**
 * see ChessKingsCouncil/app/src/Reuseables/Square.jss for more
 * */
export const useStyles = makeStyles({
    square: props => ({
        maxWidth: '11vh',
        maxHeight: '11vh',
        minWidth: 'unset',
        minHeight: 'unset',
        '&:hover':{
            filter: 'brightness(110%)',
        },
    }),
}, {index: 1});