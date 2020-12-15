import makeStyles from "@material-ui/core/styles/makeStyles";
import {boardSize} from "../../Reuseables/BoardMixins.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";

const size = boardSize('desktop', 'large');

export const useStyles = makeStyles({
    board: props => ({
        position: 'absolute',
        fontSize: props.fontSize,
        width: '40em',
        height: '40em',
        lineHeight: '0',
        margin: '2em',
        WebkitBoxShadow: '0px 0px 20px white',
        boxShadow: '0px 0px 20px white'
    }),
});