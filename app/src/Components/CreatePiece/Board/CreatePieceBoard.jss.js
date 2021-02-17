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
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            ...board(fontSizes.ipx),
        },
        '@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1)': {
            ...board(fontSizes.mobile),
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 991px) and (max-aspect-ratio: 1/1)':{
            ...board(fontSizes.ipad),
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            ...board(fontSizes.desktop),
            boxShadow: '0 0 0.1em white',
            margin: 'auto',
        },
    }),
});

