import {makeStyles} from "@material-ui/core/styles"
import {twoItemFontSizes} from "../../CreatePiece.jss";

export const buttonSizeEm = 3

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        display: 'grid',
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: twoItemFontSizes.ipx,
            marginBottom: '0.5em',
        },
        "@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1)": {
            fontSize: twoItemFontSizes.mobile,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: twoItemFontSizes.mobile
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: twoItemFontSizes.ipad,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: twoItemFontSizes.desktop,
        },
        gridTemplateColumns: "repeat(3, 2.85em)",
        gridTemplateRows: "repeat(3, 2.85em)",
        columnGap: '0.28em',
        rowGap: '0.28em',
    }),
});