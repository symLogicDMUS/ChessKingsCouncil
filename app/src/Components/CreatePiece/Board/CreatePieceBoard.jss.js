import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";
import {fontSize0095} from "../../styles/fontSizes.jss";
import {availWidth} from "../../helpers/windowMeasurments";

export const fontSizes = {
    desktop: fontSize0095,
    mobile: availWidth()*0.12,
    ipx: availWidth()*0.12,
    ipad: availWidth() * 0.09,
}

export const useStyles = makeStyles({
    board: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            ...board(fontSizes.desktop),
            margin: 'auto',
            boxShadow: '0 0 0.1em white'
        },
        '@media (max-aspect-ratio: 1/1)': {
            ...board(fontSizes.mobile),
            marginTop: '-0.12em',
        },
        "@media (max-aspect-ratio: 1/2)": {
            ...board(fontSizes.ipx)
        },
        '@media (aspect-ratio: 1024/1366)':{
            ...board(fontSizes.ipad),
            margin: 'auto',
        },
    }),
});