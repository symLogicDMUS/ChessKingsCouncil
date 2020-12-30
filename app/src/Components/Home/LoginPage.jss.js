import { makeStyles } from "@material-ui/core/styles";
import { availHeight, availWidth } from "../helpers/windowMeasurments";


export const useStyles = makeStyles((theme) => ({
    login_page: (props) => ({
        width: "100%",
        height: availHeight()*0.95,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
    }),
    app_title_desktop: (props) => ({
        width: availWidth() * 0.85625,
    }),
    app_title_mobile: props => ({

    }),
}));