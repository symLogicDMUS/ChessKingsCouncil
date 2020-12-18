import makeStyles from "@material-ui/core/styles/makeStyles";
import {getTextWidth} from "../../helpers/getTextWidth.jss";

export const useStyles = makeStyles({
    title: props => ({
        fontSize: props.fontSize,
        fontFamily: 'Garamond',
    }),
    game_types: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    }),
});
