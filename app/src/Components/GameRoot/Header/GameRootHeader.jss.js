import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight} from "../../helpers/windowMeasurments";
import {boardSize, gameBoardLeft} from "../../Reuseables/BoardMixins.jss";
import {navBarHeight} from "../../NavBar/NavBarStyle";
import {lineHeight} from "../../styles/lineHeight.jss";

const boardWidth = () => boardSize('desktop', 'large');
const fontSize = () => boardWidth() * 0.08;

const header = {
    zIndex: 4,
    position: 'absolute',
    width: boardWidth(),
    fontSize: fontSize(),
    top: navBarHeight*1.75,
    left: gameBoardLeft('desktop'),
    lineHeight: '85%',
}

const turnAndConditionProperties = {
    zIndex: 'inherit',
    fontSize: fontSize(),
    lineHeight: '85%',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
}

export const useStyles = makeStyles({

    /** either label label or grid is displayed, conditionally.*/

    label: {
        ...header,
        color: 'black',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    grid: {
        ...header,
        display: 'grid',
        gridTemplateColumns: '48.67% 48.67%',
        columnGap: '2.66%',
    },
    turn: {
        gridColumn: '1',
        color: 'black',
        ...turnAndConditionProperties,
    },
    condition: {
        gridColumn: '2',
        color: '#b1faae',
        ...turnAndConditionProperties,
    }
})