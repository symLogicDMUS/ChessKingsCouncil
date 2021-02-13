import {fontSizes} from "../Range.jss";
import {makeStyles} from "@material-ui/core/styles"

export const buttonSizeEm = 3

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        display: 'grid',
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            marginBottom: '0.5em',
            gridTemplateColumns: "repeat(3, 2.85em)",
            gridTemplateRows: "repeat(3, 2.85em)",
            columnGap: '0.28em',
            rowGap: '0.28em',
        },
        "@media (min-aspect-ratio: 1/2) and (max-aspect-ratio: 834/1194)": {
            fontSize: fontSizes.mobile,
            gridTemplateColumns: "repeat(3, 2.85em)",
            gridTemplateRows: "repeat(3, 2.85em)",
            columnGap: '0.28em',
            rowGap: '0.28em',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizes.ipad,
            gridTemplateColumns: "repeat(3, 1em)",
            gridTemplateRows: "repeat(3, 1em)",
            columnGap: '0.15em',
            rowGap: '0.15em',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSizes.desktop,
        },
    }),
});