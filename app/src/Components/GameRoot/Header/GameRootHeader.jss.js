import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {bigBoardMargin} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({

    /** either label label or grid is displayed, conditionally.*/
    header: props => ({
        zIndex: 4,
        fontSize: props.fontSize,
        marginLeft: bigBoardMargin,
        lineHeight: '85%',
        width: '8em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }),
    turnAndCondition: props => ({
        fontSize: props.fontSize,
        zIndex: 'inherit',
        lineHeight: '85%',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].span,
    }),
})