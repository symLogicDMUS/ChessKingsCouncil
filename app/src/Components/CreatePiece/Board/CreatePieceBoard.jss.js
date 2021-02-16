import makeStyles from "@material-ui/core/styles/makeStyles";
import {bigBoardMargin, board} from "../../Reuseables/Board.jss";
import {fontSize0095} from "../../styles/fontSizes.jss";
import {availHeight, availWidth, innerHeight} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";

export const fontSizes = {
    desktop: fontSize0095,
    ipx: availWidth() * 0.118,
    mobile: (innerHeight() - appBarHeight) * 0.625*0.1249,
    ipad: (innerHeight() - appBarHeight) * 0.65*0.1249,
}

export const useStyles = makeStyles({
    board: props => ({
        "@media (max-aspect-ratio: 6/10)": {
            ...board(fontSizes.ipx),
        },
        '@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)': {
            ...board(fontSizes.mobile),
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            ...board(fontSizes.ipad),
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            ...board(fontSizes.desktop),
            boxShadow: '0 0 0.1em white',
            margin: 'auto',
        },
    }),
});

