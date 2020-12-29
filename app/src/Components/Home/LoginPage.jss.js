import { makeStyles } from "@material-ui/core/styles";
import { availHeight, availWidth } from "../helpers/windowMeasurments";
import { themes } from "../styles/themes.jss";

export const anonymous_button = (fontSize) => ({});

export const useStyles = makeStyles((theme) => ({
    login_page: (props) => ({
        width: "100%",
        height: availHeight() * 0.85,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        // border: "1px dashed white",
    }),
    app_title: (props) => ({
        width: availWidth() * 0.85625,
    }),
}));
