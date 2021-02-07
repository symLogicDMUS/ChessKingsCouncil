import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";
import {fontSize0055, fontSize0067, fontSize0095} from "../../styles/fontSizes.jss";

export const fontSizes = {
    desktop: fontSize0095,
    mobile: fontSize0067,
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
            boxShadow: '0 0 0.05em white'
        },
        "@media (aspect-ratio: 375/812)": {
            ...board(fontSizes.ipx)
        },
    }),
});