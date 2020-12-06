import makeStyles from "@material-ui/core/styles/makeStyles";
import { boardSize, gameBoardLeft, gameBoardTop } from "../../Reuseables/BoardMixins.jss";
import {saveResignToolHeightDesktop} from "../SaveResignTool/SaveResignTool.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const expandedSize = window.screen.availWidth * 0.13;
export const margin = (screenCase) => boardSize(screenCase, "large") * 0.02

export const rangeDisplayLeft = (screenCase) =>
    gameBoardLeft(screenCase) + boardSize(screenCase, "large") + margin(screenCase);

const rangeDisplayTool = (screenCase) => ({
    position: "absolute",
    zIndex: "5",
    backgroundColor: "green",
    borderRadius: "1em",
    width: expandedSize,
    left: rangeDisplayLeft(screenCase),
    top: gameBoardTop('desktop') + availHeight() * 0.16 + margin('desktop'),
});

const label = {
    position: "absolute",
    width: "70%",
    height: "10%",
    left: "10%",
    textAlign: "left",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#b1faae",
    fontSize: "120%",
};

export const useStyles = makeStyles({
    expanded: {
        ...rangeDisplayTool("desktop"),
        height: expandedSize,
    },
    collapsed: {
        ...rangeDisplayTool("desktop"),
        height: window.screen.height * 0.04,
    },
    label: {
        ...label,
        top: "2%",
    },
});
