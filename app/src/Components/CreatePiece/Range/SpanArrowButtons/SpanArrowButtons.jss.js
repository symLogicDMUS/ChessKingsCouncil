import {fontSizes} from "../Range.jss";
import {makeStyles} from "@material-ui/core/styles"

export const buttonSizeEm = 3

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSizes.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizes.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            marginBottom: '0.5em',
        },
        '@media (aspect-ratio: 1024/1366)':{
            fontSize: fontSizes.ipad,
        },
        display: 'grid',
        gridTemplateColumns: "repeat(3, 2.85em)",
        gridTemplateRows: "repeat(3, 2.85em)",
        columnGap: '0.28em',
        rowGap: '0.28em',
    }),
});