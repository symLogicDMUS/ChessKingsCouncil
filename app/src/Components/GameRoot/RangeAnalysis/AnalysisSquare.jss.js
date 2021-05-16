import {makeStyles} from "@material-ui/core/styles";
import {lgScreenItemWidth} from "../GameRoot.jss";

/**
 * see ChessKingsCouncil/app/src/Reuseables/Square.jss for more
 * */
export const useStyles = makeStyles({
    square: props => ({
        '@media screen and (max-width: 960px)': {
            width: '10.5vw',
            height: '10.5vw',
        },
        '@media screen and (min-width: 960px)': {
            width: `calc(${lgScreenItemWidth} * 0.125)`,
            height: `calc(${lgScreenItemWidth} * 0.125)`,
        },
        '&:hover':{
            filter: 'brightness(110%)',
        },
        maxWidth: '11vh',
        maxHeight: '11vh',
        minWidth: 'unset',
        minHeight: 'unset',
        cursor: 'default',
    }),
}, {index: 1});