import {fontSizes} from "../Range.jss";
import {makeStyles} from "@material-ui/core/styles"

export const buttonSizeEm = 3

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            marginBottom: '0.5em',
        },
        '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSizes.desktop,
        },
        display: 'grid',
        gridTemplateColumns: "repeat(3, 2.85em)",
        gridTemplateRows: "repeat(3, 2.85em)",
        columnGap: '0.28em',
        rowGap: '0.28em',
    }),
});