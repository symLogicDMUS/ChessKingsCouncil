import {fontSizes} from "../Range.jss";
import {makeStyles} from "@material-ui/core/styles"

export const buttonSizeEm = 3

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        display: 'grid',
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: fontSizes.ipx,
            marginBottom: '0.5em',
        },
        "@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1)": {
            fontSize: fontSizes.mobile,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSizes.short
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
        },
        gridTemplateColumns: "repeat(3, 2.85em)",
        gridTemplateRows: "repeat(3, 2.85em)",
        columnGap: '0.28em',
        rowGap: '0.28em',
    }),
});