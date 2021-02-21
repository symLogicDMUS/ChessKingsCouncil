import {fontSize002, fontSize0023, fontSizeW0024, fontSizeW004} from "../../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {twoItemMargins} from "../CreatePiece.jss";
import {viewHeight} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";
import {fontSizes as boardFontSizes} from "../Board/CreatePieceBoard.jss";

export const useStyles = makeStyles({
    img_window: props => ({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: themes[props.theme].fill,
        /*tall phones*/
        '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
            // fontSize: (viewHeight()*0.4 - appBarHeight) -  (viewHeight()*0.4 - appBarHeight)*0.35,
            fontSize: (boardFontSizes.ipx*8 - twoItemMargins.ipx * 3)*0.5,
            width: '1em',
            height: '1em',
            borderRadius: '0.035em',
            border: `0.0075em solid ${themes[props.theme].outline}`,
        },
        /*medium phones*/
        '@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 6/10) and (max-aspect-ratio: 85/100)': {
            // fontSize: (viewHeight()*0.4 - appBarHeight) -  (viewHeight()*0.4 - appBarHeight)*0.35,
            fontSize: (boardFontSizes.mobile*8 - twoItemMargins.mobile * 3)*0.5,
            width: "1em",
            height: "1em",
            borderRadius: '0.035em',
            border: `0.0075em solid ${themes[props.theme].outline}`,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: (boardFontSizes.mobile*8 - twoItemMargins.mobile * 3)*0.5,
            width: '1em',
            height: '1em',
            borderRadius: '0.035em',
            border: `0.0075em solid ${themes[props.theme].outline}`,
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            // fontSize: (viewHeight()*0.35 - appBarHeight) -  (viewHeight()*0.35 - appBarHeight)*0.2,
            fontSize: (boardFontSizes.ipad*8 - twoItemMargins.ipad * 3)*0.5,
            width: '1em',
            height: '1em',
            margin: 'auto',
            borderRadius: '0.035em',
            border: `0.005em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
            width: "9em",
            height: "9em",
            border: "0.05em solid #2b2b2b",
            borderRadius: '0.2em',
        },
    }),
    img_label: props => ({
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    icon: (props) => ({
        /*tall phones*/
        '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
            fontSize: fontSize0023,
        },
        /*medium phones*/
        "@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 6/10) and (max-aspect-ratio: 85/100)": {
            fontSize: fontSize0023,
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW004,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSizeW0024,
        },
        /*desktop*/
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
        },
        color: themes[props.theme].text,
        padding: 0,
    }),
    text: props => ({
        /*medium phones*/
        '@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 6/10) and (max-aspect-ratio: 85/100)': {
            fontSize: fontSize0023
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
            fontSize: fontSizeW004,
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            fontSize: fontSizeW0024
        },
        /*desktop*/
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize002,
        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginLeft: '0.1em',
        lineHeight: '0.7em',
    }),
});
