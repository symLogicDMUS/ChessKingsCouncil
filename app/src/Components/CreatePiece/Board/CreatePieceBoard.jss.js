import makeStyles from "@material-ui/core/styles/makeStyles";
import {board} from "../../Reuseables/Board.jss";
import {fontSize0095} from "../../styles/fontSizes.jss";
import {availWidth, viewHeight, viewWidth} from "../../helpers/windowMeasurments";

export const getBoardFontSize = () => {
    if (viewHeight() >= viewWidth()*2) {
        return availWidth()*0.95*0.125
    }
    else {
        return viewHeight()*0.5*0.125
    }
}

export const getBoardSize = () => {
    return getBoardFontSize()*8;
};

export const useStyles = makeStyles({
    board: props => ({
        '@media screen and (max-device-width: 1040px)':{
            ...board(getBoardFontSize()),
        },
        '@media screen and (min-device-width: 1040px)': {
            ...board(fontSize0095),
            boxShadow: '0 0 0.1em white',
            margin: 'auto',
        },
    }),
});