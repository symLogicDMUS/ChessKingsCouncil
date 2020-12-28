import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {bigBoardMargin} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({

    /** either label label or grid is displayed, conditionally.*/
    header: props => ({
        width: "31em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }),
    status_bar: props => ({
        zIndex: 4,
        '@media screen and (min-width: 768px)': {
            width: '15em',
        },
        '@media screen and (max-width: 767px)': {
            width: '13em'
        },
        textAlign: 'center',
        color: themes[props.theme].text,
    }),
})