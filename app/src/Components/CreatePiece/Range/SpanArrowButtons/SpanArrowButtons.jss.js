import {fontSize002, fontSize00224, fontSize0023, fontSizeW005} from "../../../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles"

export const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize0023,
    ipx: fontSizeW005,
}

export const buttonSizeEm = 3

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSizes.desktop,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSizes.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            fontSize: fontSizes.ipx,
            marginBottom: '0.5em',
        },
        display: 'grid',
        gridTemplateColumns: "repeat(3, 2.85em)",
        gridTemplateRows: "repeat(3, 2.85em)",
        columnGap: '0.28em',
        rowGap: '0.28em',
    }),
});