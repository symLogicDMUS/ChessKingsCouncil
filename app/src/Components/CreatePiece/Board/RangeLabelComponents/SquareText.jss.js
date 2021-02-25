import { makeStyles } from "@material-ui/core/styles";
import {getBoardFontSize} from "../CreatePieceBoard.jss";
import {fontSize002375} from "../../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    sqr_text: props => ({
        /*phones/tablets (generalized)*/
        '@media screen and (max-device-width: 1040px)':{
            fontSize: getBoardFontSize() * 0.3,
        },
        /*laptop/desktop*/
        '@media screen and (min-device-width: 1040px)':{
            fontSize: fontSize002375,
        },
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: '#ffffff',
    }),
}, {index: 1});