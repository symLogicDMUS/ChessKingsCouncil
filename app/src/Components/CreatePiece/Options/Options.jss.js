import makeStyles from "@material-ui/core/styles/makeStyles";
import { availHeight, availWidth } from "../../helpers/windowMeasurments";
import { toolWidth } from "../CreatePiece.jss";
import { optionButtonSize } from "./Option.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawerLeft.jss";

const getWidthDesktop = () => toolWidth();
const getHeightDesktop = () => availHeight() * 0.13;
const getTopDesktop = () => availHeight() * 0.785;
const getLeftDesktop = () => availWidth() * 0.57;

export const useStyles = makeStyles({
    options_tool: (props) => ({
        // position: 'absolute',
        fontSize: props.fontSize,
        width: drawerWidth,
        height: getHeightDesktop(),
        // top: getTopDesktop(),
        // left: getLeftDesktop(),
        borderRadius: '0.1em',
        backgroundColor: "orange",
        "& > *": {
            margin: `${optionButtonSize * 0.25}em`,
        },
    }),
    title: {
        position: "absolute",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: "#a9a9a9",
    },
});
