import makeStyles from "@material-ui/core/styles/makeStyles";
import {boardSize} from "../../Reuseables/BoardMixins.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";

const size = boardSize('desktop', 'large');

export const useStyles = makeStyles({
    board: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: props.fontSize,
        width: '40em',
        height: '40em',
        lineHeight: '0',
        margin: '1em',
        boxShadow: '0px 0px 20px white'
    }),
});