import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";
import {fontSize0095} from "../../styles/fontSizes.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";

export const fontSizes = {
    desktop: fontSize0095,
    ipx: availWidth()*0.1248,
    mobile: ((availHeight() - appBarHeight) * 0.55) / 8,
    ipad: ((availHeight() - appBarHeight) * 0.65) / 8,
}

export const useStyles = makeStyles({
    board: props => ({
        '@media (max-aspect-ratio: 1/1) and (min-aspect-ratio: 1/2)': {
            ...board(fontSizes.mobile),
        },
        "@media (max-aspect-ratio: 1/2)": {
            ...board(fontSizes.ipx),
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            ...board(fontSizes.ipad),
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            ...board(fontSizes.desktop),
            boxShadow: '0 0 0.1em white'
        },
    }),
});