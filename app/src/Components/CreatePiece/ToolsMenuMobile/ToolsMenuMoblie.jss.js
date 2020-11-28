import makeStyles from "@material-ui/core/styles/makeStyles";
import {winHeight, winWidth} from "../../helpers/windowMeasurments";

const listItem = {
    position: "absolute",
    width: "100%",
    height: "16%",
    backgroundColor: "#515151",
    border: "1px solid #3c3f41",
    widget: {
        position: "absolute",
        left: "90%",
        height: "16%",
        width: "7.5%",
    },
}

export const useStyles = makeStyles({
    tools_menu: {
        position: "absolute",
        width: winWidth() * 0.934,
        height: winHeight() * 0.48,
        top: winHeight() * 0.6,
        left: winWidth() * 0.03,
    },
    name: {
        ...listItem,
        top: "0",
    },
    icon: {
        ...listItem,
        top: "16%",
    },
    range: {
        ...listItem,
        top: "32%",
    },
    location: {
        ...listItem,
        top: "48%",
    },
    options: {
        ...listItem,
        top: "64%",
    },
    selected_tool: {
        position: "absolute",
        width: "100%",
        height: "16%",
        backgroundColor: "#515151",
        border: "1px solid #3c3f41",
        top: "32%",
        widget: {
            position: "absolute",
            left: "90%",
            height: "16%",
            width: "7.5%",
            top: "-2.5%",
        }
    },
});
