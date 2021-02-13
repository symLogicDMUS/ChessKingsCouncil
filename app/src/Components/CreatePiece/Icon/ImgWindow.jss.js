import {
    fontSize002, fontSize0023,
    fontSize00236, fontSizeW0031, fontSizeW004, fontSizeW0045, fontSizeW0048, fontSizeW04,
    fontSizeW041, fontSizeW042, fontSizeW043, fontSizeW045, fontSizeW047,
} from "../../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {availHeight} from "../../helpers/windowMeasurments";
import {fontSizes} from "../Board/CreatePieceBoard.jss";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";

export const useStyles = makeStyles({
    img_window: props => ({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: themes[props.theme].fill,
        '@media (max-aspect-ratio: 1/2)': {
            fontSize: fontSizeW041,
            width: '1em',
            height: '1em',
            borderRadius: '0.035em',
            border: `0.0075em solid ${themes[props.theme].outline}`,
        },
        '@media (min-aspect-ratio: 1/2) and (max-aspect-ratio: 834/1194)': {
            fontSize: fontSize00236,
            width: "9em",
            height: "9em",
            borderRadius: '0.2em',
            border: `0.05em solid ${themes[props.theme].outline}`,
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: availHeight() - (appBarHeight + availHeight() * 0.075 + fontSizes.ipad*8 + availHeight() * 0.04),
            width: '1em',
            height: '1em',
            margin: 'auto',
            borderRadius: '0.035em',
            border: `0.005em solid ${themes[props.theme].outline}`,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            width: "9em",
            height: "9em",
            border: "0.05em solid #2b2b2b",
            borderRadius: '0.2em',
        },
    }),
    img_label: props => ({
        // fontSize: fontSize002,
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    icon: (props) => ({
        '@media (max-aspect-ratio: 1/2)': {
            fontSize: fontSize0023
        },
        "@media (min-aspect-ratio: 1/2) and (max-aspect-ratio: 834/1194)": {
            fontSize: fontSize0023
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW004,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
        },
        color: themes[props.theme].text,
        padding: 0,
    }),
    text: props => ({
        '@media (min-aspect-ratio: 1/2) and (max-aspect-ratio: 834/1194)': {
            fontSize: fontSize0023
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW004,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginLeft: '0.1em',
        lineHeight: '0.7em',
    }),
});
