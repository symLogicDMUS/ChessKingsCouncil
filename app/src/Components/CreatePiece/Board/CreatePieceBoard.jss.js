import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";
import {fontSize0055, fontSize0095} from "../../styles/fontSizes.jss";
import {availWidth} from "../../helpers/windowMeasurments";

export const fontSizes = {
    desktop: fontSize0095,
    mobile: availWidth()*0.12,
    ipx: availWidth()*0.12,
}

export const useStyles = makeStyles({
    board: props => ({
        '@media screen and (min-width: 768px)': {
            ...board(fontSizes.desktop),
            marginLeft: bigBoardMargin,
            marginTop: bigBoardMargin,
            boxShadow: '0 0 0.1em white'
        },
        '@media screen and (max-width: 767px)': {
            ...board(fontSizes.mobile),
            marginTop: '-0.12em',
        },
        "@media (max-aspect-ratio: 1/2)": {
            ...board(fontSizes.ipx)
        },
    }),
});