import makeStyles from "@material-ui/core/styles/makeStyles";
import {getTextWidth} from "../../helpers/getTextWidth.jss";

export const useStyles = makeStyles({
    title: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: props.fontSize,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: props.fontSize * 0.85,
            lineHeight: '1.5em',
        },
        fontFamily: 'Garamond',
    }),
    game_types: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    }),
});
