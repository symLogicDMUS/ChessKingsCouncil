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
        '@media (min-aspect-ratio: 16/9)': {
            height: availHeight()*0.81,
        },
        '@media (max-aspect-ratio: 1/1)': {
            height: availHeight()*0.95
        },
    }),
    app_title_desktop: (props) => ({
        width: availWidth() * 0.8,
    }),
    app_title_mobile: (props) => ({
        width: availWidth() * 0.8,
    }),
    auth_buttons: props => ({
        fontSize: fontSize002,
        width: '16em',
    }),
}));