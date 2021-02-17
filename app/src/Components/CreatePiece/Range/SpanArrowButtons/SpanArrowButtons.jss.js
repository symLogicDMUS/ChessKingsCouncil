import {fontSizes} from "../Range.jss";
import {makeStyles} from "@material-ui/core/styles"

export const buttonSizeEm = 3

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        display: 'grid',
        "@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)": {
            fontSize: fontSizes.ipx,
            marginBottom: '0.5em',
            gridTemplateColumns: "repeat(3, 2.85em)",
            gridTemplateRows: "repeat(3, 2.85em)",
            columnGap: '0.28em',
            rowGap: '0.28em',
        },
        "@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1)": {
            fontSize: fontSizes.mobile,
            gridTemplateColumns: "repeat(3, 2.85em)",
            gridTemplateRows: "repeat(3, 2.85em)",
            columnGap: '0.28em',
            rowGap: '0.28em',
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 991px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
            gridTemplateColumns: "repeat(3, 2.85em)",
            gridTemplateRows: "repeat(3, 2.85em)",
            columnGap: '0.28em',
            rowGap: '0.28em',
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSizes.desktop,
            gridTemplateColumns: "repeat(3, 2.85em)",
            gridTemplateRows: "repeat(3, 2.85em)",
            columnGap: '0.28em',
            rowGap: '0.28em',
        },
    }),
});