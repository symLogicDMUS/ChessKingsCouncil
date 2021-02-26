import {fontSize002, fontSize0023, fontSizeW004} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";
import {get2ItemMargins} from "../CreatePiece.jss";
import {makeStyles} from "@material-ui/core/styles";
import {getBoardSize} from "../Board/CreatePieceBoard.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";

export const useStyles = makeStyles({
    img_window: props => ({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: themes[props.theme].fill,
        '@media screen and (max-device-width: 1040px)':{
            fontSize: (getBoardSize() - get2ItemMargins() * 3)*0.5,
            width: '1em',
            height: '1em',
            borderRadius: '0.035em',
            border: `0.005em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-device-width: 1040px)': {
            fontSize: (drawerWidth - get2ItemMargins())*0.5,
            width: "1em",
            height: "1em",
            border: "0.01em solid #2b2b2b",
            borderRadius: '0.03em',
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
        '@media screen and (max-device-width: 412px)': {
            fontSize: fontSize0023,
        },
        /*medium phones*/
        "@media screen and (min-device-width: 412px) and  (max-device-width: 767px)": {
            fontSize: fontSize0023,
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)':{
            fontSize: fontSizeW004,
        },
        /*desktop*/
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize002,
        },
        color: themes[props.theme].text,
        padding: 0,
    }),
    text: props => ({
        /*medium phones*/
        '@media screen and (min-device-width: 412px) and  (max-device-width: 767px)': {
            fontSize: fontSize0023
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)':{
            fontSize: fontSizeW004,
        },
        /*desktop*/
        '@media screen and (min-device-width: 1040px)': {
            fontSize: fontSize002,
        },
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginLeft: '0.1em',
        lineHeight: '0.7em',
    }),
}, {index: 1});
