import makeStyles from "@material-ui/core/styles/makeStyles";
import {lineHeight, toolLeft, toolWidth} from "../CreatePiece.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {iconToolHeight, iconToolTop} from "./calculations.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawerLeft.jss";
import {fontSize} from "../em.jss";

/*em units*/
export const margin1 = 1.1;
export const white_button_left = 1.1;
export const black_button_left = 16;
export const upload_button_top = 2.5;
export const choose_button_top = 6.1;




export const imgWindow = (fontSize) => ({
    fontSize: fontSize * 1.2,
    width: "6em",
    height: "6em",
});

export const useStyles = makeStyles({
    icon_tool: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: 'row',
        width: drawerWidth,
        height: '15.5em',
        backgroundColor: "#4b6eaf",
        borderRadius: "0.2em",
    }),
    title: props => ({
        fontSize: props.fontSize,
        margin: `${margin1}em`,
        lineHeight: '0.7em',
        color: "#a9a9a9",
        border: "1px dashed #b1faae",
    }),
    button_group: (props) => ({
        display: 'flex',
        gridColumn: 1,
        fontSize: props.fontSize,
        '& > *': {
            margin: '1.1em',
        },
    }),
    button: (props) => ({
        fontSize: props.fontSize,
        width: '6.5em',
        height: '2.5em',
    }),
    white_window: props => ({
        ...imgWindow(props.fontSize),
    }),

    black_window: props => ({
        ...imgWindow(props.fontSize),
    }),
    image: {
        width: '100%',
        height: '100%'
    }
});