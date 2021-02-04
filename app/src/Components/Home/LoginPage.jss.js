import { makeStyles } from "@material-ui/core/styles";
import { availHeight, availWidth } from "../helpers/windowMeasurments";
import {fontSize002} from "../styles/fontSizes.jss";


export const useStyles = makeStyles((theme) => ({
    login_page: (props) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        '@media screen and (min-width: 768px)': {
            height: availHeight()*0.85,
        },
        '@media screen and (max-width: 767px)': {
            height: availHeight()*0.95
        },
    }),
    app_title_desktop: (props) => ({
        width: availWidth() * 0.75,
    }),
    app_title_mobile: (props) => ({
        width: availWidth() * 0.85,
    }),
    auth_buttons: props => ({
        fontSize: fontSize002,
        width: '16em',
        border: '1px dashed black',
    }),
}));