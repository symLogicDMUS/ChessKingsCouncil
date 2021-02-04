import {makeStyles} from "@material-ui/core/styles";
import {fontSize002} from "../styles/fontSizes.jss";

export const useStyles = makeStyles({
    background: props => ({
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }),
    board_pattern: props => ({
        fontSize: fontSize002,
        width: '10em',
        height: '10em',
    }),
    row: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
});
