import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";
import {fontSize0055, fontSize0095} from "../../styles/fontSizes.jss";
import {availWidth} from "../../helpers/windowMeasurments";

export const fontSizes = {
    desktop: fontSize0095,
    mobile: availWidth()*0.124,
    ipx: fontSize0055,
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
            // marginLeft: '-0.12em',
        },
        "@media (aspect-ratio: 375/812)": {
            ...board(fontSizes.ipx)
        },
    }),
});